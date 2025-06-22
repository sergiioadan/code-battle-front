import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService, Usuario } from '../user/user';


@Component({
  selector: 'app-topbar',
standalone: true,
  templateUrl: './topbar.html',
  styleUrls: ['./topbar.scss'],
  imports: [FormsModule,CommonModule]
})
export class TopbarComponent {
  searchTerm: string = '';
  usuariosFiltrados: any[] = [];
indiceSeleccionado = -1;


  constructor(private router: Router, private http: HttpClient,private userService: UserService) {}

  buscarUsuario(): void {
  if (this.searchTerm.length < 3) {
    this.usuariosFiltrados = [];
    return;
  }

  this.http.get<any[]>(`https://code-battle-back.onrender.com/search?username=${this.searchTerm}`).subscribe(
    usuarios => {
      this.usuariosFiltrados = usuarios.slice(0, 5); // máximo 5 resultados
    },
    error => {
      console.error('Error al buscar usuarios', error);
      this.usuariosFiltrados = [];
    }
  );
}

  seleccionarSiguiente() {
    if (this.indiceSeleccionado < this.usuariosFiltrados.length - 1) {
      this.indiceSeleccionado++;
    }
  }

  seleccionarAnterior() {
    if (this.indiceSeleccionado > 0) {
      this.indiceSeleccionado--;
    }
  }

  irSeleccionado() {
    if (this.indiceSeleccionado >= 0) {
      this.irAlPerfil(this.usuariosFiltrados[this.indiceSeleccionado]);
    }
  }
 irAlPerfil(usuario: any): void {
  this.usuariosFiltrados = [];
  this.router.navigate(['/profile', usuario.username]);
}


  irADashboard() {
    this.router.navigate(['/dashboard']);
  }

  irAJugar() {
    this.router.navigate(['/seleccion-nivel']);
  }

  irARanking() {
    this.router.navigate(['/ranking']);
  }

  irAPerfil() {
    this.router.navigate(['/profile']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/inicio']);
  }
}
