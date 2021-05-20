import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFilmesModule } from './filmes/cadastro-filmes/cadastro-filmes.module';
import { FilmesModule } from './filmes/filmes.module';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import { DemoMaterialModule } from './material.module';
import { CamposModule } from './shared/components/campos/campos.module';
import { TopoComponent } from './topo/topo.component';

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
