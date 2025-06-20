import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../questions/question/progress.service';
import { AuthService } from '../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { NIVELES } from '../../config/niveles.config';
import { LIGAS } from '../../config/ligas.config';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProfileComponent implements OnInit {
  jugador = {
    username: '',
    totalPuntos: 0,
    posicion: 0,
    liga: 'Frontend',
    niveles: [] as {
      nombre: string;
      puntos: number;
      aciertos: number;
      desbloqueado: boolean;
    }[],
  };

  constructor(
    private progressService: ProgressService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const username = this.authService.getCurrentUsername();
    this.jugador.username = username;

    this.progressService.getProgress(username).subscribe((progreso) => {
      let total = 0;

      this.jugador.niveles = NIVELES.map(nivel => {
        const data = progreso[nivel.clave];
        const puntos = data?.points || 0;
        const aciertos = data?.hits || 0;
        const desbloqueado = aciertos >= 7;

        total += puntos;

        return {
          nombre: nivel.nombre,
          puntos,
          aciertos,
          desbloqueado
        };
      });

      this.jugador.totalPuntos = total;
      this.jugador.liga = this.calcularLiga(total);

      // TODO: Posición real si tienes ranking implementado
      this.jugador.posicion = 0;
    });
  }
 getIconoLiga(nombre: string): string {
  const liga = LIGAS.find(l => l.nombre === nombre);
  return liga ? `/assets/ligas/${liga.icono}` : '/assets/ligas/default.png';
  console.log('Ruta generada:', `/assets/ligas/${liga?.icono}`);

}

 
  calcularLiga(puntos: number): string {
    const ligas = ['Frontend', 'Junior', 'Mid', 'Senior', 'Architect', 'Legend'];
    const index = Math.min(Math.floor(puntos / 2000), ligas.length - 1);
    return ligas[index];
  }
}
