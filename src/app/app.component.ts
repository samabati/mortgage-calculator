import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Hover style state variables
  euroFocused = false;
  mortFocused = false;
  interestFocused = false;
  radio1Focused = false;
  radio2Focused = false;

  // form states
  submitted = false;
  validForm = false;

  // calculation used for display calculation
  displayMonthly?: string;
  displayTotal?: string;

  // form used for 2 way data binding
  mortgageForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mortgageForm = this.fb.group({
      mortgageAmount: new FormControl('', Validators.required),
      mortgageTerm: new FormControl('', Validators.required),
      mortgageInterest: new FormControl('', Validators.required),
      mortgageType: new FormControl('', Validators.required),
    });
  }

  // function for applying styles on focus
  onFocus(event: Event) {
    const input = event.target as HTMLInputElement;

    switch (input.id) {
      case 'euro':
        this.euroFocused = true;
        break;
      case 'mortgage':
        this.mortFocused = true;
        break;
      case 'interest':
        this.interestFocused = true;
        break;
      case 'radio1':
        this.radio1Focused = true;
        break;
      case 'radio2':
        this.radio2Focused = true;
        break;
      default:
        // Optionally handle unexpected cases if needed
        break;
    }
  }

  //function for disabling styles on blue
  onBlur(event: Event) {
    const input = event.target as HTMLInputElement;

    switch (input.id) {
      case 'euro':
        this.euroFocused = false;
        break;
      case 'mortgage':
        this.mortFocused = false;
        break;
      case 'interest':
        this.interestFocused = false;
        break;
      case 'radio1':
        this.radio1Focused = false;
        break;
      case 'radio2':
        this.radio2Focused = false;
        break;
      default:
        // Optionally handle unexpected cases
        break;
    }
  }

  // function executes when user submits form
  formSubmit() {
    this.submitted = true;
    if (this.mortgageForm.valid) {
      this.validForm = true;
      this.calculateForm();
    }
  }

  // function resets form when user clicks clear all
  clearAll() {
    this.validForm = false;
    this.submitted = false;
    this.mortgageForm.reset();
  }

  // function calculates mortgage payment if valid form is submitted by user
  calculateForm() {
    // get values
    const principal = Number(this.mortgageForm.get('mortgageAmount')?.value);
    const total_term = Number(this.mortgageForm.get('mortgageTerm')?.value);
    const annual_interest = Number(
      this.mortgageForm.get('mortgageInterest')?.value
    );

    //calculations
    const monthly_interest = (annual_interest * 0.01) / 12;
    const total_payments = total_term * 12;

    console.log(monthly_interest, total_payments);

    const monthly_payment =
      (principal *
        monthly_interest *
        Math.pow(1 + monthly_interest, total_payments)) /
      (Math.pow(1 + monthly_interest, total_payments) - 1);
    const total_value_over_term = monthly_payment * total_payments;

    this.displayMonthly = monthly_payment.toFixed(2);
    this.displayTotal = total_value_over_term.toFixed(2);
  }
}
