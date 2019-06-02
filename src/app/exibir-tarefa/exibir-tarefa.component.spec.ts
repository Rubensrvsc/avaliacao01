import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirTarefaComponent } from './exibir-tarefa.component';

describe('ExibirTarefaComponent', () => {
  let component: ExibirTarefaComponent;
  let fixture: ComponentFixture<ExibirTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
