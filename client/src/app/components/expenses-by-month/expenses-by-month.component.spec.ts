import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesByMonthComponent } from './expenses-by-month.component';

describe('ExpensesByMonthComponent', () => {
  let component: ExpensesByMonthComponent;
  let fixture: ComponentFixture<ExpensesByMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesByMonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
