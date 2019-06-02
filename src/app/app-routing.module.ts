import { DetailTarefaComponent } from './detail-tarefa/detail-tarefa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExibirListagemComponent } from './exibir-listagem/exibir-listagem.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: ExibirListagemComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'detail/:id', component: DetailTarefaComponent},
];

@NgModule({
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
