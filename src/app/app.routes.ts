import { Routes } from '@angular/router';
import { InicioComponent } from './features/inicio/inicio.component';
import { QuestionComponent } from './questions/question/question';
import { RegisterComponent } from './pages/registro/registro';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/guards/authguard';
import { LevelSelectionComponent } from './pages/level/level-selection.component';
import { RankingComponent } from './pages/ranking/ranking';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { ProfileComponent } from './pages/profile/profile';



export const routes: Routes = [
  { path: 'seleccion-nivel', component: LevelSelectionComponent },
  { path: 'play/:nivel', loadComponent: () => import('./questions/question/question').then(m => m.QuestionComponent) },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'juego', component: QuestionComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'ranking', component: RankingComponent },
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:username', component: ProfileComponent},
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.DashboardComponent), canActivate: [AuthGuard] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'juego' }
];
