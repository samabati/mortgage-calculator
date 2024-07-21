import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgAmountComponent } from './mortg-amount.component';

describe('MortgAmountComponent', () => {
  let component: MortgAmountComponent;
  let fixture: ComponentFixture<MortgAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MortgAmountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MortgAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
