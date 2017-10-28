import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { OperandValidatorDirective } from './operand-validator.directive';
import {FormsModule} from '@angular/forms';
import { OperationValidatorDirective } from './operation-validator.directive';
import {CalculatorService} from './calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    OperandValidatorDirective,
    OperationValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
