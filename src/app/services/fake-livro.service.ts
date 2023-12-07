import { Injectable } from '@angular/core';
import { Livro } from '../models/Livro';

@Injectable({
  providedIn: 'root',
})
export class FakeLivroService {
  constructor() {}

  createLivro(livro: Livro) {
    return 'Livro criado com sucesso!';
  }
}
