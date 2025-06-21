import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './pages/topbar/topbar';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [CommonModule, TopbarComponent,RouterOutlet], 

  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'juego-interactivo';
  mostrarTopbar = true;

  
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const rutasSinTopbar = ['/inicio', '/login', '/register'];
        const rutasConFondo = ['/login', '/register'];

        this.mostrarTopbar = !rutasSinTopbar.includes(event.urlAfterRedirects);

        if (rutasConFondo.includes(event.urlAfterRedirects)) {
          document.body.classList.add('fondo-logo');
        } else {
          document.body.classList.remove('fondo-logo');
        }

        console.log('URL después de redirección:', event.urlAfterRedirects);
      }
    });


}
}
