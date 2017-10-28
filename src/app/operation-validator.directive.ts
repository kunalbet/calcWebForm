import {Directive, OnInit} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
  selector: '[appOperationValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: OperationValidatorDirective, multi: true}]
})
export class OperationValidatorDirective implements Validator, OnInit {

  valFn = Validators.nullValidator;
  control: AbstractControl;

  constructor() {}

  ngOnInit(): void {
    this.valFn = this.appOperationInputValidator();
  }

  validate(control: AbstractControl): {[key: string]: any} {
    this.control = control;
    return this.valFn(control);
  }

  appOperationInputValidator(): ValidatorFn {
      return (control: AbstractControl): {[key: string]: any} => {
          const value  = control.value;
          if (!value) {
            return null;
          }
          const operationPattern = /^[+\-\*\/]$/;
          if (!operationPattern.test(value)) {
            return {'invalidOperation': 'Acceptable operations are (+, -, *, \/)'};
          }
          return null;
      };
  }

}
