import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from '../forms-service.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mortg-term',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mortg-term.component.html',
  styleUrl: './mortg-term.component.css',
})
export class MortgTermComponent implements OnInit {
  mortFocused = false;

  mortgageForm!: FormGroup;

  submitted!: boolean;

  constructor(private formService: FormsServiceService) {}

  ngOnInit(): void {
    this.formService.mortgageForm$.subscribe((value) => {
      this.mortgageForm = value;
    });

    this.formService.submitted$.subscribe((value) => {
      this.submitted = value;
    });
  }

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
