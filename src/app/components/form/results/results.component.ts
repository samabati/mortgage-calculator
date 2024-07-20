import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from '../forms-service.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent implements OnInit {
  submitted!: boolean;
  validForm!: boolean;
  displayMonthly!: string;
  displayTotal!: string;

  constructor(private formsService: FormsServiceService) {}
  ngOnInit(): void {
    this.formsService.submitted$.subscribe((value) => {
      this.submitted = value;
    });
    this.formsService.validForm$.subscribe((value) => {
      this.validForm = value;
    });

    this.formsService.displayMonthly$.subscribe((value) => {
      this.displayMonthly = value;
    });

    this.formsService.displayTotal$.subscribe((value) => {
      this.displayTotal = value;
    });
  }
}
