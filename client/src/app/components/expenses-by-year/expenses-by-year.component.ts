import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReceiptComponent } from '../receipt/receipt.component';
import { ExpensesComponent } from '../expenses/expenses.component';
import { Expenses } from '../../models/Expenses.model';
import { Receipt } from '../../models/Receipt.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-expenses-by-year',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule,
    ReceiptComponent,
    ExpensesComponent
  ],
  templateUrl: './expenses-by-year.component.html',
  styleUrl: './expenses-by-year.component.scss'
})
export class ExpensesByYearComponent {
  myForm: FormGroup;
  expenses: Array<Expenses> = [];
  incomes: Array<Receipt> = [];

  constructor(private dataService: DataService) {
    this.myForm = new FormGroup({
      month: new FormControl(''),
      options: new FormControl(''),
      time: new FormControl('')
    });
  }
 
  getExpensesByTear() {
    const { controls } = this.myForm;
    if (controls['time'].value === 'month') {
      if (controls['options'].value === 'expenses') {
        this.dataService.getExpensesByMonth(controls['month'].value).subscribe((ex: Array<Expenses>) => {
          console.log(ex);
          this.expenses = ex;
        });
      }
      if (controls['options'].value === 'incomes') {
        this.dataService.getIncomeByMonth(controls['month'].value).subscribe((inco: Array<Receipt>) => {
          console.log(inco);
          this.incomes = inco;
        });
      }
    }
    if (controls['time'].value === 'year') {
      if (controls['options'].value === 'expenses') {
        this.dataService.getExpensesByYear(controls['month'].value).subscribe((ex: Array<Expenses>) => {
          console.log(ex);
          this.expenses = ex;
        });
      }
      if (controls['options'].value === 'incomes') {
        this.dataService.getIncomeByYear(controls['month'].value).subscribe((inco: Array<Receipt>) => {
          console.log(inco);
          this.incomes = inco;
        });
      }
    }
  }
}
