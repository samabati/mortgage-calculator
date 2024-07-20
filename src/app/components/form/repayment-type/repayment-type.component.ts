import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from '../forms-service.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-repayment-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './repayment-type.component.html',
  styleUrl: './repayment-type.component.css',
})
export class RepaymentTypeComponent implements OnInit {
  mortgageForm!: FormGroup;

  constructor(private formService: FormsServiceService) {}

  ngOnInit(): void {
    this.formService.mortgageForm$.subscribe((value) => {
      this.mortgageForm = value;
    });
  }

  updateFormField(fieldName: string, value: any): void {
    this.formService.updateForm({ [fieldName]: value.value });
  }
}
