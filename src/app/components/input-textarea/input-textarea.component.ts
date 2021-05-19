import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/validators/validar-campos.service';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.css']
})
export class InputTextareaComponent {

  @Input() titulo: string
  @Input() formGroup: FormGroup
  @Input() controlName: string

  constructor(public fieldValidService: ValidarCamposService) {
  }

  get control(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
