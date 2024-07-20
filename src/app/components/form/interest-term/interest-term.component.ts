import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from '../forms-service.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-interest-term',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './interest-term.component.html',
  styleUrl: './interest-term.component.css',
})
export class InterestTermComponent implements OnInit {
  interestFocused = false;
  mortgageForm!: FormGroup;
  submitted!: boolean;

  constructor(private formService: FormsServiceService) {}
  ngOnInit(): void {
    this.formService.submitted$.subscribe((value) => {
      this.submitted = value;
    });

    this.formService.mortgageForm$.subscribe((value) => {
      this.mortgageForm = value;
    });
  }

  onBlur() {
    this.interestFocused = false;
  }

  onFocus() {
    this.interestFocused = true;
  }

  updateFormField(fieldName: string, value: any): void {
    this.formService.updateForm({ [fieldName]: value.value });
  }
}
