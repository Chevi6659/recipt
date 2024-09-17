import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpensesComponent } from '../expenses/expenses.component';
import { ReceiptComponent } from '../receipt/receipt.component';
import { Receipt } from '../../models/Receipt.model';
import { Expenses } from '../../models/Expenses.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-expenses-by-date-range',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,ExpensesComponent,ReceiptComponent],
  templateUrl: './expenses-by-date-range.component.html',
  styleUrl: './expenses-by-date-range.component.scss'
})
export class ExpensesByDateRangeComponent {
  toShow = false
  myForm: FormGroup;
  receipts: Receipt[]=[]
  expenses: Expenses[]=[]
  constructor(private dateService: DataService) {
    this.myForm = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      incomeOrExpenses: new FormControl('', [Validators.required])
    })

  }

  getExpensesByDateRange() {
    const { controls } = this.myForm
    let start = controls['startDate'].value
    let end = controls['endDate'].value
    let choose = controls['incomeOrExpenses'].value
    if (choose === 'incomes')
      this.dateService.getReceiptsBetweenDates(start, end).subscribe((data: Receipt[]) => {
        this.receipts = data
        this.toShow = true
      })
    else {
      this.dateService.getExpenceBetweenDays(start, end).subscribe((data: Expenses[]) => {
        this.expenses = data
        this.toShow = true

      })
    }



  }
}
