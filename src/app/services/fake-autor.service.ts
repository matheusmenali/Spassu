import { Injectable } from '@angular/core';
import { Autor } from '../models/Autor';

@Injectable({
  providedIn: 'root',
})
export class FakeAutorService {
  constructor() {}

  createAutor(autor: Autor) {
    return 'Autor criado com sucesso!';
  }

  getAutores() {
    return [
      { id: 1, nome: 'Joao' },
      { id: 2, nome: 'Maria' },
    ];
  }
}
