import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticacao-senha',
  templateUrl: './autenticacao-senha.component.html',
  styleUrls: ['./autenticacao-senha.component.scss'],
})
export class AutenticacaoSenhaComponent {
  password: string[] = [];

  constructor(private router: Router) {}

  avancarParaSenha() {
    this.router.navigate(['/dashboard']);
  }

  addDigit(digit: number) {
    if (this.password.length < 4) {
      this.password.push(digit.toString());
      if (this.password.length === 4) {
        setTimeout(() => this.avancarParaSenha(), 500); // Pequeno atraso para o usuário ver o último dígito
      }
    }
  }

  clearPassword() {
    this.password = [];
  }
}
