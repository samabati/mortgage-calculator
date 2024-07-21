import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsServiceService } from '../forms-service.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-interest-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './interest-type.component.html',
  styleUrl: './interest-type.component.css',
})
export class InterestTypeComponent {
  @Input() mortgageForm!: FormGroup;

  @Input() submitted!: boolean;

  constructor(private formService: FormsServiceService) {}

  updateFormField(fieldName: string, value: any): void {
    this.formService.updateForm({ [fieldName]: value.value });
  }
}
