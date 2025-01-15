import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  navigateToDashboard() {
    throw new Error('Method not implemented.');
  }
  loginData = { agency: '', account: '' };

  constructor(private router: Router) {}

  onSubmit() {
    if (this.loginData.agency && this.loginData.account) {
      // Simular autenticação bem-sucedida e redirecionar
      this.router.navigate(['/autenticacao-senha']);
    } else {
      alert('Por favor, insira os dados de agência e conta.');
    }
  }
}
