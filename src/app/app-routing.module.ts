import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExibirDetailComponent } from './exibir-detail/exibir-detail.component';
import { ExibirListagemComponent } from './exibir-listagem/exibir-listagem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExibirTarefaComponent } from './exibir-tarefa/exibir-tarefa.component';

const routes: Routes = [
  { path: 'detail', component: ExibirDetailComponent },
  { path: '', component: ExibirListagemComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tarefa', component: ExibirTarefaComponent },
];

@NgModule({
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
