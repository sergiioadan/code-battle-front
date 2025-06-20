import { Component, OnInit } from '@angular/core';
import { Pregunta, Nivel } from '../../models/question.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth.service';
import { ProgressService } from './progress.service';
import { ActivatedRoute } from '@angular/router';
import { NIVELES } from '../../config/niveles.config';
import { PREGUNTAS } from '../../config/preguntas.config';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './question.html',
  styleUrls: ['./question.scss']
})
export class QuestionComponent implements OnInit {
  nivelActual: Nivel = 'tipos';
  preguntas: Pregunta[] = [];
  restantes: Pregunta[] = [];
  actual!: Pregunta;
  puntuacion = 0;
  totalRespuestas = 0;
  respondido = false;
  mostrarReiniciar = false;
  mensajeResultado = '';
  tiempoInicioPregunta: number = 0;
  totalAciertos = 0;

  niveles = NIVELES.map(n => ({
    ...n,
    bloqueado: n.clave === 'tipos',
    aciertos: 0,
    puntuacion: 0
  }));

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private progressService: ProgressService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const username = this.authService.getCurrentUsername();

    this.route.paramMap.subscribe(params => {
      const nivelParam = params.get('nivel') as Nivel;
      if (nivelParam) {
        this.nivelActual = nivelParam;
        this.cambiarNivel();
      }
    });

    this.progressService.getProgress(username).subscribe(progreso => {
      for (let i = 0; i < this.niveles.length; i++) {
        const nivel = this.niveles[i];
        const data = progreso[nivel.clave];

        if (data && data.hits >= 7) {
          nivel.bloqueado = false;
          nivel.aciertos = data.hits;
          nivel.puntuacion = data.points;

          if (i + 1 < this.niveles.length) {
            this.niveles[i + 1].bloqueado = false;
          }
        }
      }
    });
  }

  cambiarNivel(): void {
    this.preguntas = PREGUNTAS[this.nivelActual] || [];
    this.restantes = [...this.preguntas];
    this.puntuacion = 0;
    this.totalRespuestas = 0;
    this.mostrarReiniciar = false;
    this.mensajeResultado = '';
    this.mostrarSiguiente();
  }

  mostrarSiguiente(): void {
    if (this.restantes.length === 0 || this.totalRespuestas >= 10) {
      this.finalizarNivel();
      return;
    }

    this.tiempoInicioPregunta = Date.now();
    const index = Math.floor(Math.random() * this.restantes.length);
    this.actual = this.restantes.splice(index, 1)[0];
    this.respondido = false;
    this.mensajeResultado = '';
  }

  getDificultadNivel(nivel: Nivel): 'Basic' | 'Medium' | 'Hard' {
    switch (nivel) {
      case 'tipos':
      case 'constantes':
        return 'Basic';
      case 'tipado':
        return 'Medium';
      case 'listas':
        return 'Hard';
      default:
        return 'Basic';
    }
  }

  seleccionar(opcion: string): void {
    if (this.respondido) return;

    this.respondido = true;
    this.totalRespuestas++;

    const tiempoFin = Date.now();
    const tiempo = Math.floor((tiempoFin - this.tiempoInicioPregunta) / 1000);

    const correcto = opcion === this.actual.respuesta;
    if (correcto) this.totalAciertos++;

    this.enviarRespuesta(correcto, tiempo);

    this.mensajeResultado = correcto
      ? '✅ ¡Correcto!'
      : `❌ Incorrecto. Era ${this.actual.respuesta}`;

    setTimeout(() => this.mostrarSiguiente(), 1500);
  }

  finalizarNivel(): void {
    this.mostrarReiniciar = true;

    if (this.puntuacion >= 7) {
      this.mensajeResultado = '🎉 ¡Muy bien! Has desbloqueado el siguiente nivel.';
      const indexActual = this.niveles.findIndex(n => n.clave === this.nivelActual);
      if (indexActual >= 0 && indexActual + 1 < this.niveles.length) {
        this.niveles[indexActual + 1].bloqueado = false;
      }
    } else {
      this.mensajeResultado = '❌ No te desanimes, vuelve a intentarlo. Necesitas mínimo 7 aciertos.';
    }

    this.http.post('http://localhost:8080/points', {
      player: this.authService.getCurrentUsername() || 'anonimo',
      nivel: this.nivelActual,
      points: this.puntuacion,
      hits: this.totalAciertos
    }).subscribe({
      next: () => console.log('Puntos guardados correctamente.'),
      error: err => console.error('Error al guardar puntos:', err)
    });
  }

  enviarRespuesta(isCorrecta: boolean, tiempo: number): void {
    const request = {
      player: this.authService.getCurrentUsername() || 'anonimo',
      nivel: this.nivelActual,
      difficulty: this.getDificultadNivel(this.nivelActual),
      isCorrect: isCorrecta,
      time: tiempo
    };

    this.http.post<number>('http://localhost:8080/calculate', request)
      .subscribe({
        next: (puntos) => {
          this.puntuacion += puntos;
        },
        error: (err) => {
          console.error('Error al calcular puntos:', err);
        }
      });
  }

  reiniciar(): void {
    this.cambiarNivel();
    this.totalAciertos = 0;
  }
}
