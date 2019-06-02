import { SericetarefaService } from './../sericetarefa.service';
import { Component, OnInit } from '@angular/core';
import {Tarefa} from '../tarefa';

@Component({
  selector: 'app-exibir-listagem',
  templateUrl: './exibir-listagem.component.html',
  styleUrls: ['./exibir-listagem.component.css']
})
export class ExibirListagemComponent implements OnInit {

  tarefas: Tarefa[];
  selectedTarefa: Tarefa;

  constructor(private serviceTarefa: SericetarefaService) { }

  ngOnInit() {
    this.getTar();
  }


  getTar(): void{
    this.serviceTarefa.getTarefas().subscribe(tarefas => this.tarefas = tarefas);
  }

  onSelectTarefa(tarefa){
    return this.selectedTarefa= tarefa;
  }


}
