import {Directive, OnInit} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
  selector: '[appOperandValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: OperandValidatorDirective, multi: true}]
})
export class OperandValidatorDirective implements Validator, OnInit {

  private valFn = Validators.nullValidator;
  private control: AbstractControl;

  constructor() {}

  ngOnInit(): void {
      this.valFn = this.appOperandInputValidator();
  }

  validate(control: AbstractControl): {[key: string]: any} {
      this.control = control;
      return this.valFn(control);
  }

  appOperandInputValidator(): ValidatorFn {
      return (control: AbstractControl): {[key: string]: any} => {
          const value  = control.value;
          if (!value) {
            return null;
          }

          const operandIntPattern = /^[0-9]+$/;
          const operandDoublePattern = /^[0-9]+[.][0-9]*$/;
          if (!operandIntPattern.test(value) && !operandDoublePattern.test(value)) {
            return {'invalidOperand': 'Enter positive integer or double value'};
          }
          return null;
      };
  }

}
