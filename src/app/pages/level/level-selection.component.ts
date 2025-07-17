import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressService } from '../../questions/question/progress.service';
import { AuthService } from '../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { NIVELES } from '../../config/niveles.config';
import { Nivel } from '../../models/question.model';

@Component({
  selector: 'app-level-selection',
  standalone: true,
  templateUrl: './level-selection.component.html',
  styleUrls: ['./level-selection.component.scss'],
  imports: [CommonModule]
})
export class LevelSelectionComponent implements OnInit {
  niveles: {
    clave: Nivel;
    nombre: string;
    bloqueado: boolean;
    puntuacion: number;
    aciertos: number;
  }[] = [];

  constructor(
    private progressService: ProgressService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const username = this.authService.getCurrentUsername();

    // Inicializamos con los niveles del config
    this.niveles = NIVELES.map((nivel, i) => ({
      ...nivel,
      bloqueado: i > 0, // el primer nivel desbloqueado
      puntuacion: 0,
      aciertos: 0
    }));

    this.progressService.getProgress(username).subscribe((progreso) => {
      for (let i = 0; i < this.niveles.length; i++) {
        const nivel = this.niveles[i];
        const data = progreso[nivel.clave];

        if (data) {
          nivel.aciertos = data.hits;
          nivel.puntuacion = data.points;
        
          if (data.hits >= 7) {
            nivel.bloqueado = false;
        
            if (i + 1 < this.niveles.length) {
              this.niveles[i + 1].bloqueado = false;
            }
          }
        }
      }
    });
  }

  jugarNivel(clave: Nivel): void {
    this.router.navigate(['/play', clave]);
  }
}
