import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../components/input-text/input-text.component';
import { InputTextareaComponent } from '../components/input-textarea/input-textarea.component';
import { InputSelectComponent } from '../components/input-select/input-select.component';
import { InputDateComponent } from '../components/input-date/input-date.component';
import { InputNumberComponent } from '../components/input-number/input-number.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { DemoMaterialModule } from '../material.module';





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
