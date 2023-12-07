import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FakeAssuntoService } from 'src/app/services/fake-assunto.service';

@Component({
  selector: 'app-assunto',
  templateUrl: './assunto.component.html',
  styleUrls: ['./assunto.component.less'],
})
export class AssuntoComponent implements OnInit {
  assuntoForm!: FormGroup;

  autores: any = [];
  assuntos: any = [];

  constructor(
    private fb: FormBuilder,
    private fakeAssuntoService: FakeAssuntoService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.assuntoForm = this.fb.group({
      id: [''],
      descricao: [''],
    });
  }

  get f(): any {
    return this.assuntoForm.controls;
  }
}
