import { Injectable } from '@angular/core';
import {TAREFA} from './mock-tarefa';
import { Observable, of } from 'rxjs';
import {Tarefa} from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class SericetarefaService {

  constructor() { }


  getTarefas(): Observable<Tarefa[]>{
    return of(TAREFA)
  }

}
