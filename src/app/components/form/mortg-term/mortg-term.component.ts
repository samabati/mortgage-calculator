import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsServiceService } from '../forms-service.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mortg-term',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mortg-term.component.html',
  styleUrl: './mortg-term.component.css',
})
export class MortgTermComponent {
  mortFocused = false;

  @Input() mortgageForm!: FormGroup;

  @Input() submitted!: boolean;

  constructor(private formService: FormsServiceService) {}

  onFocus(event: Event) {
    this.mortFocused = true;
  }

  onBlur(event: Event) {
    this.mortFocused = false;
  }

  updateFormField(fieldName: string, value: any): void {
    this.formService.updateForm({ [fieldName]: value.value });
  }
}
