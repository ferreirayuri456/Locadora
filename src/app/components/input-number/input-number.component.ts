import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/validators/validar-campos.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent {


  @Input() titulo: string
  @Input() formGroup: FormGroup
  @Input() controlName: string
  @Input() minimo: number = 0;
  @Input() maximo: number = 10;
  @Input() step: number = 1;


  constructor(public fieldValidService: ValidarCamposService) {
  }

  get control(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
