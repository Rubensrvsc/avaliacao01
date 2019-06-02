import { Component, OnInit } from '@angular/core';
import { SericetarefaService } from '../sericetarefa.service';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tarefas: Tarefa[];


  constructor(private serviceTarefa: SericetarefaService) { }

  ngOnInit() {
    this.getTarefas();
  }

  getTarefas(){
    this.serviceTarefa.getTarefas().subscribe(tarefas => this.tarefas = tarefas.slice(1,5));
  }

}
