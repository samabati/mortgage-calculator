import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestTypeComponent } from './interest-type.component';

describe('InterestTypeComponent', () => {
  let component: InterestTypeComponent;
  let fixture: ComponentFixture<InterestTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
