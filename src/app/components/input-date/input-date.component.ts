import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/validators/validar-campos.service';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})
export class InputDateComponent {


  @Input() titulo: string
  @Input() formGroup: FormGroup
  @Input() controlName: string

  constructor(public fieldValidService: ValidarCamposService) {
  }

  get control(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
