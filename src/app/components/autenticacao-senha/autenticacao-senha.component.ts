import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticacao-senha',
  templateUrl: './autenticacao-senha.component.html',
  styleUrl: './autenticacao-senha.component.scss',
})
export class AutenticacaoSenhaComponent {
  constructor(private router: Router) {}

  avancarParaSenha() {
    // Aqui você pode fazer validações, se necessário
    this.router.navigate(['/dashboard']); // Redireciona para a tela de autenticação de senha
  }
}
