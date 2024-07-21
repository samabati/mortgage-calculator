import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from '../forms-service.service';

@Component({
  selector: 'app-submit-form',
  standalone: true,
  imports: [],
  templateUrl: './submit-form.component.html',
  styleUrl: './submit-form.component.css',
})
export class SubmitFormComponent {
  constructor(private formService: FormsServiceService) {}

  formSubmit() {
    this.formService.formSubmit();
  }
}
