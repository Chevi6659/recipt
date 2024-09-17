import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReceiptComponent } from '../receipt/receipt.component';
import { ExpensesComponent } from '../expenses/expenses.component';
import { DataService } from '../../services/data.service';
import { Expenses } from '../../models/Expenses.model';
import { Receipt } from '../../models/Receipt.model';

@Component({
  selector: 'app-expenses-by-month',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule,
    ReceiptComponent,
    ExpensesComponent],
  templateUrl: './expenses-by-month.component.html',
  styleUrl: './expenses-by-month.component.scss'
})
export class ExpensesByMonthComponent {

  myForm: FormGroup;
  expenses: Array<Expenses> = [];
  incomes: Array<Receipt> = [];
  constructor(private dataService: DataService) {
    this.myForm = new FormGroup({
      month: new FormControl(''),
      options: new FormControl(''),
    });
  }
 
  getExpensesByMonth() {
    const { controls } = this.myForm;
      
      if (controls['options'].value === 'incomes') {
        this.dataService.getReceiptsByMonth(controls['month'].value).subscribe((data: Array<Receipt>) => {
          console.log(data);
          this.incomes = data;
        });
      }
      if (controls['options'].value === 'expenses') {
        this.dataService.getExpensesByMonth(controls['month'].value).subscribe((data: Array<Expenses>) => {
          console.log(data);
          this.expenses = data;
        });
      }
  }
}
