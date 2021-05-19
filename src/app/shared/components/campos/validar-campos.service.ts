import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }

  hasErrorValidated(control: AbstractControl, errorName: string): boolean {
    if ((control.touched || control.dirty) && this.hasError(control, errorName)) {
      return true;
    }
    return false;

  }

  constructor() { }

}
