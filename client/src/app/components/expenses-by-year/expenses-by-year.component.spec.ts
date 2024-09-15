import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesByYearComponent } from './expenses-by-year.component';

describe('ExpensesByYearComponent', () => {
  let component: ExpensesByYearComponent;
  let fixture: ComponentFixture<ExpensesByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesByYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
