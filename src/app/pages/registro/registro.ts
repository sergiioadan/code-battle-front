import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.scss']
})
export class RegisterComponent {
  username = '';
  password = '';
  usernameError = '';
  passwordError = '';
  message: string | null = null;
  success = false;

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.success = false;
    this.usernameError = '';
    this.passwordError = '';
    this.message = null;

    if (!this.username.trim()) {
      this.usernameError = '⚠️ El nombre de usuario es obligatorio.';
      return;
    }

    if (this.password.length < 6) {
      this.passwordError = '⚠️ La contraseña debe tener al menos 6 caracteres.';
      return;
    }

    this.authService.register(this.username, this.password).subscribe({
      next: () => {
        this.success = true;
        this.message = '✅ ¡Te has registrado correctamente!';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        if (err.status === 409) {
          this.message = '⚠️ El nombre de usuario ya está en uso.';
        } else if (err.status === 500) {
          this.message = '❌ Error interno del servidor.';
        } else {
          this.message = '❌ No se pudo registrar el usuario.';
        }
      }
    });
  }
}
