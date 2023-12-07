import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './components/autor/autor.component';
import { LivroComponent } from './components/livro/livro.component';
import { AssuntoComponent } from './components/assunto/assunto.component';

const routes: Routes = [
  {
    path: '',
    component: LivroComponent,
  },
  {
    path: 'autor',
    component: AutorComponent,
  },
  {
    path: 'livro',
    component: LivroComponent,
  },
  {
    path: 'assunto',
    component: AssuntoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
