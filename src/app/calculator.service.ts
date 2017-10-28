import { Injectable } from '@angular/core';
import {InputData} from './app.model';

@Injectable()
export class CalculatorService {

  operandIntPattern: RegExp = /^[0-9]+$/;
  operandDoublePattern: RegExp = /^[0-9]+[.][0-9]*$/;

  constructor() { }

  executeOperation(inputData: InputData): string {
      console.log('INPUT: ' + inputData.operand1 + ' ' + inputData.operation + ' ' + inputData.operand2);
      switch (inputData.operation) {
          case '+':
            return this.performAddition(inputData);
          case '-':
            return this.performSubtraction(inputData);
          case '*':
            return this.performMultiplication(inputData);
          case '/':
            return this.performDivision(inputData);
          default:
            // this will not happen
            return 'Invalid operation encountered';
      }
  }

  performAddition(inputData: InputData): string {
        if (this.operandIntPattern.test(inputData.operand1) && this.operandDoublePattern.test(inputData.operand2)) {
            return (parseInt(inputData.operand1, 10) + parseFloat(inputData.operand2)).toFixed(2);
        } else if (this.operandDoublePattern.test(inputData.operand1) && this.operandIntPattern.test(inputData.operand2)) {
            return (parseFloat(inputData.operand1) + parseInt(inputData.operand2, 10)).toFixed(2);
        } else if (this.operandDoublePattern.test(inputData.operand1) && this.operandDoublePattern.test(inputData.operand2)) {
            return (parseFloat(inputData.operand1) + parseFloat(inputData.operand2)).toFixed(2);
        } else if (this.operandIntPattern.test(inputData.operand1) && this.operandIntPattern.test(inputData.operand2)) {
            return (parseInt(inputData.operand1, 10) + parseInt(inputData.operand2, 10)).toString();
        } else {
            // invalid input data
            return 'Error: Invalid operands provided';
        }
  }

  performSubtraction(inputData: InputData): string {
        if (this.operandIntPattern.test(inputData.operand1) && this.operandDoublePattern.test(inputData.operand2)) {
            return (parseInt(inputData.operand1, 10) - parseFloat(inputData.operand2)).toFixed(2);
        } else if (this.operandDoublePattern.test(inputData.operand1) && this.operandIntPattern.test(inputData.operand2)) {
            return (parseFloat(inputData.operand1) - parseInt(inputData.operand2, 10)).toFixed(2);
        } else if (this.operandDoublePattern.test(inputData.operand1) && this.operandDoublePattern.test(inputData.operand2)) {
            return (parseFloat(inputData.operand1) - parseFloat(inputData.operand2)).toFixed(2);
        } else if (this.operandIntPattern.test(inputData.operand1) && this.operandIntPattern.test(inputData.operand2)) {
            return (parseInt(inputData.operand1, 10) - parseInt(inputData.operand2, 10)).toString();
        } else {
            // invalid input data
            return 'Error: Invalid operands provided';
        }
  }

  performMultiplication(inputData: InputData): string {
        if (this.operandIntPattern.test(inputData.operand1) && this.operandDoublePattern.test(inputData.operand2)) {
            return (parseInt(inputData.operand1, 10) * parseFloat(inputData.operand2)).toFixed(2);
        } else if (this.operandDoublePattern.test(inputData.operand1) && this.operandIntPattern.test(inputData.operand2)) {
            return (parseFloat(inputData.operand1) * parseInt(inputData.operand2, 10)).toFixed(2);
        } else if (this.operandDoublePattern.test(inputData.operand1) && this.operandDoublePattern.test(inputData.operand2)) {
            return (parseFloat(inputData.operand1) * parseFloat(inputData.operand2)).toFixed(2);
        } else if (this.operandIntPattern.test(inputData.operand1) && this.operandIntPattern.test(inputData.operand2)) {
            return (parseInt(inputData.operand1, 10) * parseInt(inputData.operand2, 10)).toString();
        } else {
            // invalid input data
            return 'Error: Invalid operands provided';
        }
  }

  performDivision(inputData: InputData): string {
        if (this.operandIntPattern.test(inputData.operand1) && this.operandDoublePattern.test(inputData.operand2)) {
            return (parseInt(inputData.operand1, 10) / parseFloat(inputData.operand2)).toFixed(2);
        } else if (this.operandDoublePattern.test(inputData.operand1) && this.operandIntPattern.test(inputData.operand2)) {
            return (parseFloat(inputData.operand1) / parseInt(inputData.operand2, 10)).toFixed(2);
        } else if (this.operandDoublePattern.test(inputData.operand1) && this.operandDoublePattern.test(inputData.operand2)) {
            return (parseFloat(inputData.operand1) / parseFloat(inputData.operand2)).toFixed(2);
        } else if (this.operandIntPattern.test(inputData.operand1) && this.operandIntPattern.test(inputData.operand2)) {
            return (parseInt(inputData.operand1, 10) / parseInt(inputData.operand2, 10)).toFixed(2);
        } else {
            // invalid input data
            return 'Error: Invalid operands provided';
        }
  }

}
