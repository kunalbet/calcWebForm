import {Component, OnInit} from '@angular/core';
import {InputData} from './app.model';
import {NgForm} from '@angular/forms';
import {CalculatorService} from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Calculator';
  inputData: InputData;
  submitted = false;
  result: string;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.resetModel();
  }

  calculate(form: NgForm) {
      this.submitted = true;
      if (form.valid) {
        this.result = this.calculatorService.executeOperation(this.inputData);
        console.log('RESULT: ' + form.value);
      }
  }

  clear() {
      this.submitted = false;
      this.resetModel();
      this.result = undefined;
  }

  resetModel() {
      this.inputData = {
        operand1: '',
        operation: '',
        operand2: ''
      };
  }
}
