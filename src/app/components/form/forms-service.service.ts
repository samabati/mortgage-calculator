import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormsServiceService {
  mortgageFormSubject: BehaviorSubject<FormGroup>;
  mortgageForm$: Observable<FormGroup>;

  private submittedSubject = new BehaviorSubject<boolean>(false);
  submitted$ = this.submittedSubject.asObservable();

  private validFormSubject = new BehaviorSubject<boolean>(false);
  validForm$ = this.validFormSubject.asObservable();

  private displayMonthlySubject = new BehaviorSubject<string>('');
  displayMonthly$ = this.displayMonthlySubject.asObservable();

  private displayTotalSubject = new BehaviorSubject<string>('');
  displayTotal$ = this.displayTotalSubject.asObservable();

  constructor(private fb: FormBuilder) {
    const InitialForm = this.fb.group({
      mortgageAmount: new FormControl('', [Validators.required]),
      mortgageTerm: new FormControl('', [
        Validators.required,
        Validators.min(1), // Minimum value for the term (e.g., 1 year)
        Validators.max(60), // Maximum value for the term (60 years)
      ]),
      mortgageInterest: new FormControl('', [
        Validators.required,
        Validators.min(1), // Minimum value for the term (e.g., 1 year)
        Validators.max(20), // Maximum value for the term (60 years)),
      ]),
      mortgageType: new FormControl('', Validators.required),
    });

    this.mortgageFormSubject = new BehaviorSubject<FormGroup>(InitialForm);
    this.mortgageForm$ = this.mortgageFormSubject.asObservable();

    const mortgageAmount = this.mortgageFormSubject.value.get('mortgageAmount');

    mortgageAmount?.valueChanges.subscribe((value) => {
      if (value === null) return;
      const numericValue = value.replace(/,/g, '');
      const formattedValue = this.formatNumber(numericValue);
      if (formattedValue !== value) {
        mortgageAmount.setValue(formattedValue, { emitEvent: false });
      }
    });
  }

  formatNumber(value: string): string {
    if (!value) return '';
    // Remove non-digit characters
    value = value.replace(/\D/g, '');
    // Format number with commas
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  setSubmitted(value: boolean) {
    this.submittedSubject.next(value);
  }

  updateForm(value: any) {
    const form = this.mortgageFormSubject.value;
    form.patchValue(value);
    this.mortgageFormSubject.next(form);
  }

  // function executes when user submits form
  formSubmit() {
    this.submittedSubject.next(true);
    if (this.mortgageFormSubject.value.valid) {
      this.validFormSubject.next(true);
      this.calculateForm();
    }
  }
  // function calculates mortgage payment if valid form is submitted by user
  calculateForm() {
    // get values
    const principal = Number(
      this.removeCommas(
        this.mortgageFormSubject.value.get('mortgageAmount')?.value
      )
    );
    const total_term = Number(
      this.mortgageFormSubject.value.get('mortgageTerm')?.value
    );
    const annual_interest = Number(
      this.mortgageFormSubject.value.get('mortgageInterest')?.value
    );
    //calculations
    const monthly_interest = (annual_interest * 0.01) / 12;
    const total_payments = total_term * 12;

    const monthly_payment =
      (principal *
        monthly_interest *
        Math.pow(1 + monthly_interest, total_payments)) /
      (Math.pow(1 + monthly_interest, total_payments) - 1);
    const total_value_over_term = monthly_payment * total_payments;

    // remove trailing decimal and assign to property value
    this.displayMonthlySubject.next(monthly_payment.toFixed(2));
    this.displayTotalSubject.next(total_value_over_term.toFixed(2));
  }

  // Remove commas from total amount for calculation

  removeCommas(value: string): string {
    return value.replace(/,/g, '');
  }

  // function resets form when user clicks clear all
  clearAll() {
    this.validFormSubject.next(false);
    this.submittedSubject.next(false);
    this.mortgageFormSubject.value.reset();
  }
}
