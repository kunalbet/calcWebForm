import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import {InputData} from './app.model';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should be created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('.executeOperation() return result for valid inputData', inject([CalculatorService], (service: CalculatorService) => {
    const inputData: InputData = { operand1: '3', operation: '+', operand2: '3' };
    expect(service.executeOperation(inputData)).toEqual('6');
  }));

  it('.executeOperation() return ERROR msg for invalid operation', inject([CalculatorService], (service: CalculatorService) => {
    const inputData: InputData = { operand1: '3', operation: '%', operand2: '2' };
    expect(service.executeOperation(inputData)).toEqual('Invalid operation encountered');
  }));

  it('.performMultiplication() return integer result for valid integer * integer operands',
    inject([CalculatorService], (service: CalculatorService) => {
      const inputData: InputData = { operand1: '12', operation: '*', operand2: '3' };
      expect(service.executeOperation(inputData)).toEqual('36');
  }));

  it('.performMultiplication() return float result for valid integer * float operands',
    inject([CalculatorService], (service: CalculatorService) => {
      const inputData: InputData = { operand1: '12', operation: '*', operand2: '3.12' };
      expect(service.executeOperation(inputData)).toEqual('37.44');
    }));

  it('.performMultiplication() return float result for valid float * integer operands',
    inject([CalculatorService], (service: CalculatorService) => {
      const inputData: InputData = { operand1: '7.7', operation: '*', operand2: '9' };
      expect(service.executeOperation(inputData)).toEqual('69.30');
    }));

  it('.performMultiplication() return float result for valid float * float operands',
    inject([CalculatorService], (service: CalculatorService) => {
      const inputData: InputData = { operand1: '5.7', operation: '*', operand2: '3.12' };
      expect(service.executeOperation(inputData)).toEqual('17.78');
    }));

  it('.performDivision() return EXCEPTION for invalid operand values',
    inject([CalculatorService], (service: CalculatorService) => {
      const inputData: InputData = { operand1: 'fdd', operation: '/', operand2: '3.12' };
      expect(service.executeOperation(inputData)).toEqual('Error: Invalid operands provided');
    }));

  it('.performDivision() return EXCEPTION message if exception occurs while computing',
    inject([CalculatorService], (service: CalculatorService) => {
      const inputData: InputData = { operand1: '45', operation: '/', operand2: '0' };
      expect(service.executeOperation(inputData)).toEqual('Infinity');
    }));
});
