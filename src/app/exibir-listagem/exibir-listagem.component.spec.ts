import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirListagemComponent } from './exibir-listagem.component';

describe('ExibirListagemComponent', () => {
  let component: ExibirListagemComponent;
  let fixture: ComponentFixture<ExibirListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
