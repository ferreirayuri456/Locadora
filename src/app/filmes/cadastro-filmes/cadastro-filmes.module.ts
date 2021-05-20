import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroFilmesRoutingModule } from './cadastro-filmes-routing.module';
import { CadastroFilmesComponent } from './cadastro-filmes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DemoMaterialModule } from 'src/app/material.module';
import { CamposModule } from 'src/app/shared/components/campos/campos.module';


@NgModule({
  declarations: [
    CadastroFilmesComponent,
  ],
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
  ]
})
export class CadastroFilmesModule { }
