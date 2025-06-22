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
    this.router.navigate(['/profile']);
  }

  irAEstadisticas() {
    this.router.navigate(['/estadisticas']);
  }

  jugar() {
    this.router.navigate(['/seleccion-nivel']);
  }
}
