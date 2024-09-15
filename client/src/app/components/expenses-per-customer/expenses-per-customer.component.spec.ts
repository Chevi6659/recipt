import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesPerCustomerComponent } from './expenses-per-customer.component';

describe('ExpensesPerCustomerComponent', () => {
  let component: ExpensesPerCustomerComponent;
  let fixture: ComponentFixture<ExpensesPerCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesPerCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesPerCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
