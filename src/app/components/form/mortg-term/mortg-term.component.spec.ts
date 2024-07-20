import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgTermComponent } from './mortg-term.component';

describe('MortgTermComponent', () => {
  let component: MortgTermComponent;
  let fixture: ComponentFixture<MortgTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MortgTermComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MortgTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
