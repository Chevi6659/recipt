import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Expenses } from '../../models/Expenses.model';
import { Receipt } from '../../models/Receipt.model';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { ReceiptComponent } from '../receipt/receipt.component';
import { ExpensesComponent } from '../expenses/expenses.component';

@Component({
  selector: 'app-expenses-by-month',
  standalone: true,
  imports: [CommonModule,
     ReactiveFormsModule, 
     ReceiptComponent,
     ExpensesComponent],
  templateUrl: './expenses-by-month.component.html',
  styleUrl: './expenses-by-month.component.scss'
})
export class ExpensesByMonthComponent {
  myForm: FormGroup;
  expenses: Array<Expenses> = [];
  incomes: Array<Receipt> = [];
  messege!: string ;

  constructor(private dataService: DataService) {
    this.myForm = new FormGroup({
      number: new FormControl(''),
      options: new FormControl(''),
      time: new FormControl('')
    });
  }
  updateLabel() {
    const { controls } = this.myForm;
    this.messege =  'Press month';
  }
  submit() {
    const { controls } = this.myForm;
    if (controls['options'].value === 'expenses') {
      this.dataService.getExpensesByMonth(controls['number'].value).subscribe((ex: Array<Expenses>) => {
        this.expenses = ex;
      });
    }
    if (controls['options'].value === 'incomes') {
      this.dataService.getIncomeByMonth(controls['number'].value).subscribe((inco: Array<Receipt>) => {
        this.incomes = inco;
      });
    }
  }
}
