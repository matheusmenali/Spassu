import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FakeAutorService } from 'src/app/services/fake-autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.less'],
})
export class AutorComponent implements OnInit {
  autorForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fakeAutorService: FakeAutorService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.autorForm = this.fb.group({
      id: [''],
      nome: [''],
    });
  }

  get f(): any {
    return this.autorForm.controls;
  }
}
