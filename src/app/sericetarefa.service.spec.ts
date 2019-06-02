import { TestBed, inject } from '@angular/core/testing';

import { SericetarefaService } from './sericetarefa.service';

describe('SericetarefaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SericetarefaService]
    });
  });

  it('should be created', inject([SericetarefaService], (service: SericetarefaService) => {
    expect(service).toBeTruthy();
  }));
});
