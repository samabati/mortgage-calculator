import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsServiceService } from '../forms-service.service';

@Component({
  selector: 'app-mortg-amount',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './mortg-amount.component.html',
  styleUrl: './mortg-amount.component.css',
})
export class MortgAmountComponent {
  @Input() mortgageForm!: FormGroup;
  @Input() submitted!: boolean;
  euroFocused = false;

  constructor(private formService: FormsServiceService) {}

  onFocus(event: Event) {
    this.euroFocused = true;
  }

  onBlur(event: Event) {
    this.euroFocused = false;
  }

  updateFormField(fieldName: string, value: any): void {
    this.formService.updateForm({ [fieldName]: value.value });
  }
}
