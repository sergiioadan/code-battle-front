import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  imports: [FormsModule,CommonModule]
})
export class InicioComponent implements OnInit {
  topJugadores: { username: string, totalPoints: number }[] = [];

  constructor(private http: HttpClient,private router: Router) {}
    irALogin() {
      this.router.navigate(['/login']);
    }

    irARegistro() {
      this.router.navigate(['/register']);
    }

    irARanking() {
      this.router.navigate(['/ranking']);
    }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/ranking')
      .subscribe(data => this.topJugadores = data);
  }
}
