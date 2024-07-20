import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from '../forms-service.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-interest-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './interest-type.component.html',
  styleUrl: './interest-type.component.css',
})
export class InterestTypeComponent implements OnInit {
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

  updateFormField(fieldName: string, value: any): void {
    this.formService.updateForm({ [fieldName]: value.value });
  }
}
