import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  imports: [FormsModule]
})
export class InicioComponent {
  nombre = '';

  constructor(private router: Router) {}

  comenzarJuego() {
    if (this.nombre.trim()) {
      localStorage.setItem('jugador', this.nombre);
      this.router.navigate(['/juego']);
    } else {
      alert('Por favor, introduce tu nombre.');
    }
  }
}
