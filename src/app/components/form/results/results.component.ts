import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from '../forms-service.service';
import { Observable } from 'rxjs';

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
  displayMonthly!: Observable<string>;
  displayTotal!: Observable<string>;

  constructor(private formsService: FormsServiceService) {}
  ngOnInit(): void {
    this.formsService.submitted$.subscribe((value) => {
      this.submitted = value;
    });
    this.formsService.validForm$.subscribe((value) => {
      this.validForm = value;
    });

    this.displayMonthly = this.formsService.displayMonthly$;
    this.displayTotal = this.formsService.displayTotal$;
  }
}
