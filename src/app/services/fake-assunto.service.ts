import { Injectable } from '@angular/core';
import { Livro } from '../models/Livro';

@Injectable({
  providedIn: 'root',
})
export class FakeAssuntoService {
  constructor() {}

  createAssunto(livro: Livro) {
    return 'Assunto criado com sucesso!';
  }

  getAssuntos() {
    return [
      { id: 1, descricao: 'Filmes' },
      { id: 2, descricao: 'Futebol' },
      { id: 3, descricao: 'Cidades' },
    ];
  }
}
