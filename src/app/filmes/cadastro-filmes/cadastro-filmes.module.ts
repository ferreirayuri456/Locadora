import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroFilmesRoutingModule } from './cadastro-filmes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DemoMaterialModule } from 'src/app/material.module';
import { CamposModule } from 'src/app/shared/components/campos/campos.module';
import { FilmesService } from 'src/app/core/filmes.service';



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
    CamposModule
  ],
  providers: [FilmesService],
})
export class CadastroFilmesModule { }
