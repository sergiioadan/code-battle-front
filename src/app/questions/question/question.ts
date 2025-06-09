import { Component, OnInit } from '@angular/core';
import { Pregunta, Nivel } from '../../models/question.model';
import { QuestionService } from '../../questions/question';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Aquí importas FormsModule

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Y aquí lo declaras
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

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.cambiarNivel();
  }

  cambiarNivel(): void {
    this.preguntas = this.questionService.getPreguntas(this.nivelActual);
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

    const index = Math.floor(Math.random() * this.restantes.length);
    this.actual = this.restantes.splice(index, 1)[0];
    this.respondido = false;
    this.mensajeResultado = '';
  }

  seleccionar(opcion: string): void {
    if (this.respondido) return;

    this.respondido = true;
    this.totalRespuestas++;
    const correcto = opcion === this.actual.respuesta;
    if (correcto) this.puntuacion++;

    this.mensajeResultado = correcto
      ? '✅ ¡Correcto!'
      : `❌ Incorrecto. Era ${this.actual.respuesta}`;

    setTimeout(() => this.mostrarSiguiente(), 1500);
  }

  finalizarNivel(): void {
    this.mostrarReiniciar = true;

    if (this.puntuacion >= 7) {
      this.mensajeResultado = '🎉 ¡Muy bien! Has desbloqueado el siguiente nivel.';
    } else {
      this.mensajeResultado =
        '❌ No te desanimes, vuelve a intentarlo. Necesitas mínimo 7 aciertos.';
    }
  }

  reiniciar(): void {
    this.cambiarNivel();
  }
}
