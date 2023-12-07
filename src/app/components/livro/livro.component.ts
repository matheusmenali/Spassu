import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Livro } from 'src/app/models/Livro';
import { FakeAssuntoService } from 'src/app/services/fake-assunto.service';
import { FakeAutorService } from 'src/app/services/fake-autor.service';
import { FakeLivroService } from 'src/app/services/fake-livro.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.less'],
})
export class LivroComponent implements OnInit {
  livroForm!: FormGroup;

  autores: any = [];
  assuntos: any = [];

  constructor(
    private fb: FormBuilder,
    private fakeLivroService: FakeLivroService,
    private fakeAssuntoService: FakeAssuntoService,
    private fakeAutorService: FakeAutorService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAutores();
    this.getAssuntos();
    this.createForm();
  }

  createForm(): void {
    this.livroForm = this.fb.group({
      autor: ['', Validators.required],
      assunto: ['', Validators.required],
      titulo: ['', Validators.required],
      editora: ['', Validators.required],
      edicao: ['', Validators.required],
      anoPublicacao: ['', Validators.required],
      preco: ['', Validators.required],
    });
  }

  get f(): any {
    return this.livroForm.controls;
  }

  getAutores() {
    this.autores = this.fakeAutorService.getAutores();
  }

  getAssuntos() {
    this.assuntos = this.fakeAssuntoService.getAssuntos();
  }

  resetField() {
    this.f.preco.reset();
  }

  onSubmit() {
    let objSerializer: Livro = {
      autorId: this.f.categoria.autor,
      assuntoId: this.f.categoria.assunto,
      titulo: this.f.categoria.titulo,
      editora: this.f.categoria.editora,
      edicao: this.f.categoria.edicao,
      anoPublicacao: this.f.categoria.anoPublicacao,
      preco: this.f.categoria.preco,
    };
    this.fakeLivroService.createLivro(objSerializer);
    // nao criei a chamada com retorno e sucesso por estar sumilando so a parte do front

    this.mensagemSucesso();
  }

  mensagemSucesso() {
    this.toastr.success('Usuario Criado com sucesso', 'FakeApi!');
  }
}
