import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacaoSenhaComponent } from './autenticacao-senha.component';

describe('AutenticacaoSenhaComponent', () => {
  let component: AutenticacaoSenhaComponent;
  let fixture: ComponentFixture<AutenticacaoSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutenticacaoSenhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutenticacaoSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
