import { Routes } from '@angular/router';
import { InicioComponent } from './features/inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: '**', redirectTo: '' }
];
