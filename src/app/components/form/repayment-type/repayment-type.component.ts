import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
  @Input() mortgageForm!: FormGroup;

  constructor(private formService: FormsServiceService) {}

  ngOnInit(): void {}

  updateFormField(fieldName: string, value: any): void {
    this.formService.updateForm({ [fieldName]: value.value });
  }
}
