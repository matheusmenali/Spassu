import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AutorComponent } from './components/autor/autor.component';
import { LivroComponent } from './components/livro/livro.component';
import { AssuntoComponent } from './components/assunto/assunto.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AutorComponent,
    LivroComponent,
    AssuntoComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
