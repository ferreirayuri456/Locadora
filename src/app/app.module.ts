import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CamposModule } from './shared/components/campos/campos.module';
import { FilmesModule } from './filmes/filmes.module';
import { MatCardModule } from '@angular/material/card';
import { CadastroFilmesModule } from './filmes/cadastro-filmes/cadastro-filmes.module';


@NgModule({
  //a directive, a component, or a pipe.
  declarations: [
    AppComponent,
    TopoComponent,
    ListagemFilmesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CamposModule,
    CadastroFilmesModule,
    FilmesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
