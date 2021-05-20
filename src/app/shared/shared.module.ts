import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { DemoMaterialModule } from '../material.module';
import { InputNumberComponent } from './components/campos/input-number/input-number.component';
import { InputDateComponent } from './components/campos/input-date/input-date.component';
import { InputSelectComponent } from './components/campos/input-select/input-select.component';
import { InputTextComponent } from './components/campos/input-text/input-text.component';
import { InputTextareaComponent } from './components/campos/input-textarea/input-textarea.component';





@NgModule({
  declarations: [
    InputNumberComponent,
    InputDateComponent,
    InputTextareaComponent,
    InputSelectComponent,
    InputTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    DemoMaterialModule
  ],
  exports: [
    InputNumberComponent,
    InputDateComponent,
    InputTextareaComponent,
    InputSelectComponent,
    InputTextComponent
  ]
})
export class SharedModule { }
