import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExibirListagemComponent } from './exibir-listagem/exibir-listagem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { DetailTarefaComponent } from './detail-tarefa/detail-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    ExibirListagemComponent,
    DashboardComponent,
    DetailTarefaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
