import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestTermComponent } from './interest-term.component';

describe('InterestTermComponent', () => {
  let component: InterestTermComponent;
  let fixture: ComponentFixture<InterestTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestTermComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
