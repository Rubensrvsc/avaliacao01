import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SericetarefaService } from '../sericetarefa.service';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-detail-tarefa',
  templateUrl: './detail-tarefa.component.html',
  styleUrls: ['./detail-tarefa.component.css']
})
export class DetailTarefaComponent implements OnInit {


  tarefa: Tarefa;

  constructor(private serviceTarefa: SericetarefaService,private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTarefa();
  }


  getTarefa(): void {
    const id = +this.route.snapshot.paramMap.get('perc');
    this.serviceTarefa.getTarefaDeatil(id)
      .subscribe(tarefa => this.tarefa = tarefa);
  }

  goBack(): void {
    this.location.back();
  }

}
