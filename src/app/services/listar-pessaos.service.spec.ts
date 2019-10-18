import { TestBed } from '@angular/core/testing';

import { ListarPessoasRepositorioService } from './listar-pessaos.service';

describe('ListarPessaosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarPessoasRepositorioService = TestBed.get(ListarPessoasRepositorioService);
    expect(service).toBeTruthy();
  });
});
