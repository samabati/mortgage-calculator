import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormsServiceService } from './components/form/forms-service.service';
import { MortgAmountComponent } from './components/form/mortg-amount/mortg-amount.component';
import { MortgTermComponent } from './components/form/mortg-term/mortg-term.component';
import { InterestTermComponent } from './components/form/interest-term/interest-term.component';
import { RepaymentTypeComponent } from './components/form/repayment-type/repayment-type.component';
import { InterestTypeComponent } from './components/form/interest-type/interest-type.component';
import { SubmitFormComponent } from './components/form/submit-form/submit-form.component';
import { ResultsComponent } from './components/form/results/results.component';
import { ClearAllComponent } from './components/form/clear-all/clear-all.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MortgAmountComponent,
    MortgTermComponent,
    InterestTermComponent,
    RepaymentTypeComponent,
    InterestTypeComponent,
    SubmitFormComponent,
    ResultsComponent,
    ClearAllComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  // Subscriptions
  private subscription: Subscription[] = [];
  submitted!: boolean;
  mortgageForm!: FormGroup;

  constructor(private formService: FormsServiceService) {}

  ngOnInit(): void {
    const sub1 = this.formService.mortgageForm$.subscribe((value) => {
      this.mortgageForm = value;
    });
    const sub2 = this.formService.submitted$.subscribe((value) => {
      this.submitted = value;
    });
    this.subscription.push(sub1, sub2);
  }
  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
