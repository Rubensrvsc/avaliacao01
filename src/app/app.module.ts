import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExibirTarefaComponent } from './exibir-tarefa/exibir-tarefa.component';
import { ExibirListagemComponent } from './exibir-listagem/exibir-listagem.component';
import { ExibirDetailComponent } from './exibir-detail/exibir-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ExibirTarefaComponent,
    ExibirListagemComponent,
    ExibirDetailComponent,
    DashboardComponent
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
