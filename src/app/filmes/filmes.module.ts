  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { CamposModule } from '../shared/components/campos/campos.module';
import { DemoMaterialModule } from '../material.module';
import { ListagemFilmesComponent } from '../listagem-filmes/listagem-filmes.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CadastroFilmesRoutingModule } from './cadastro-filmes/cadastro-filmes-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    CadastroFilmesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    DemoMaterialModule,
    CamposModule,
    InfiniteScrollModule
  ],
  declarations: [CadastroFilmesComponent, ListagemFilmesComponent]
})
export class FilmesModule { }