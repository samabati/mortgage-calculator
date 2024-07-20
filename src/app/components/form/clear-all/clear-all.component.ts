import { Component } from '@angular/core';
import { FormsServiceService } from '../forms-service.service';

@Component({
  selector: 'app-clear-all',
  standalone: true,
  imports: [],
  templateUrl: './clear-all.component.html',
  styleUrl: './clear-all.component.css',
})
export class ClearAllComponent {
  constructor(private formsService: FormsServiceService) {}

  clearAll() {
    this.formsService.clearAll();
  }
}
