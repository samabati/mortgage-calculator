import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsServiceService } from '../forms-service.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-interest-term',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './interest-term.component.html',
  styleUrl: './interest-term.component.css',
})
export class InterestTermComponent {
  interestFocused = false;
  @Input() mortgageForm!: FormGroup;
  @Input() submitted!: boolean;

  constructor(private formService: FormsServiceService) {}

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
