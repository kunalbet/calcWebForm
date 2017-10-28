import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, NgForm} from '@angular/forms';
import {CalculatorService} from './calculator.service';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule
      ],
      providers: [CalculatorService]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    TestBed.compileComponents();
  }));
  it('should create the app', async(() => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Calculator'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Calculator');
  }));
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Calculator');
  }));
  it('should be inject with CalculatorService', async(() => {
    const calculatorService = fixture.debugElement.injector.get(CalculatorService);
    expect(calculatorService).toBeTruthy();
  }));

  it('.resetModel() clears the inputData', () => {
    fixture.detectChanges(); // calls the ngOnInit()
    component.inputData = {
      operand1: '3',
      operation: '+',
      operand2: '3'
    };
    fixture.detectChanges();
    expect(component.inputData.operand1).toEqual('3');
    expect(component.inputData.operation).toEqual('+');
    expect(component.inputData.operand2).toEqual('3');
    component.resetModel();
    expect(component.inputData.operand1).toEqual('');
    expect(component.inputData.operation).toEqual('');
    expect(component.inputData.operand2).toEqual('');
  });

  it('.clear() resets inputData and sets submitted flag to FALSE', () => {
    fixture.detectChanges(); // calls the ngOnInit()
    component.inputData = {
      operand1: '3',
      operation: '+',
      operand2: '3'
    };
    component.submitted = true;
    fixture.detectChanges();
    expect(component.inputData.operand1).toEqual('3');
    expect(component.inputData.operation).toEqual('+');
    expect(component.inputData.operand2).toEqual('3');
    expect(component.submitted).toBeTruthy();
    component.clear();
    expect(component.inputData.operand1).toEqual('');
    expect(component.inputData.operation).toEqual('');
    expect(component.inputData.operand2).toEqual('');
    expect(component.submitted).toBeFalsy();
  });

  it('.calculate() invokes calculateService and assigns value to result variable', () => {
    fixture.detectChanges(); // calls the ngOnInit()
    component.inputData = {
      operand1: '3',
      operation: '+',
      operand2: '3'
    };
    fixture.detectChanges();
    const form: NgForm = new NgForm([], []);
    expect(component.result).toEqual(undefined);
    expect(component.submitted).toBeFalsy();
    component.calculate(form);
    expect(component.submitted).toBeTruthy();
    expect(component.result).toEqual('6');
  });
});
