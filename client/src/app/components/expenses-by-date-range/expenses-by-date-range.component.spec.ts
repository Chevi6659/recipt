import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesByDateRangeComponent } from './expenses-by-date-range.component';

describe('ExpensesByDateRangeComponent', () => {
  let component: ExpensesByDateRangeComponent;
  let fixture: ComponentFixture<ExpensesByDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesByDateRangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesByDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
