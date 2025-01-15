import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AutenticacaoSenhaComponent } from './components/autenticacao-senha/autenticacao-senha.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'autenticacao-senha', component: AutenticacaoSenhaComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
