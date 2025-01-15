import { TestBed } from '@angular/core/testing';

import { AutenticacaoSenhaService } from './autenticacao-senha.service';

describe('AutenticacaoSenhaService', () => {
  let service: AutenticacaoSenhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacaoSenhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
