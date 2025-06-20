import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  irAInfoJugador() {
    this.router.navigate(['/profile']); // Ajusta según tu ruta real
  }

  irAEstadisticas() {
    this.router.navigate(['/estadisticas']); // Ajusta según tu ruta real
  }

  jugar() {
    this.router.navigate(['/seleccion-nivel']);
  }
}
