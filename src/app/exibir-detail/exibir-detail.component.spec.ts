import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirDetailComponent } from './exibir-detail.component';

describe('ExibirDetailComponent', () => {
  let component: ExibirDetailComponent;
  let fixture: ComponentFixture<ExibirDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
