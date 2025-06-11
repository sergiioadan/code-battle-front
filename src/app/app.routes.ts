import { Routes } from '@angular/router';
import { InicioComponent } from './features/inicio/inicio.component';
import { QuestionComponent } from './questions/question/question';
import { RegisterComponent } from './pages/registro/registro';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/guards/authguard';



export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'juego', component: QuestionComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'juego', pathMatch: 'full' },
  { path: '**', redirectTo: 'juego' }
];
