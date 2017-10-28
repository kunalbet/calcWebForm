import { OperationValidatorDirective } from './operation-validator.directive';
import {inject} from '@angular/core/testing';
import {FormControl} from '@angular/forms';

describe('OperationValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new OperationValidatorDirective();
    expect(directive).toBeTruthy();
  });

  it('.appOperationInputValidator() validates correct operation', () => {
      const directive = new OperationValidatorDirective();
      const control = new FormControl();
      control.setValue('+');
      expect(directive.appOperationInputValidator().apply({}, [control])).toBeNull();
  });

  it('.appOperationInputValidator() returns error msg for invalid operation', () => {
    const directive = new OperationValidatorDirective();
    const control = new FormControl();
    control.setValue('#');
    expect(directive.appOperationInputValidator().apply({}, [control])).toBeDefined();
  });
});
