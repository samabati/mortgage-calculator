import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepaymentTypeComponent } from './repayment-type.component';

describe('RepaymentTypeComponent', () => {
  let component: RepaymentTypeComponent;
  let fixture: ComponentFixture<RepaymentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepaymentTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepaymentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
