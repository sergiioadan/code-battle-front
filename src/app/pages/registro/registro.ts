import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.scss']
})
export class RegisterComponent {
  username = '';
  password = '';
  message: string | null = null;
  success = false;

  constructor(private authService: AuthService, private router: Router) {}

    register(): void {
      this.message = null;
      this.success = false;

    this.authService.register(this.username, this.password).subscribe({
      next: () => {
        this.success = true;
        this.message = '✅ ¡Te has registrado correctamente!';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        this.success = false;
        if (err.status === 409) {
          this.message = '⚠️ El nombre de usuario ya está en uso.';
        } else if (err.status === 500) {
          this.message = '❌ Error interno del servidor.';
        } else {
          this.message = '❌ No se pudo registrar el usuario.';
        }
        console.error('Error al registrar:', err);
      }
    });
  }
}
