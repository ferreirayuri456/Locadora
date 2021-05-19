import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/validators/validar-campos.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {

  @Input() titulo: string
  @Input() formGroup: FormGroup
  @Input() controlName: string


  constructor(public fieldValidService: ValidarCamposService) {

  }

  get control(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
