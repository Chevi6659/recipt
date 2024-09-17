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
      year: new FormControl(''),
      options: new FormControl(''),
    });
  }
 
  getExpensesByTear() {
    const { controls } = this.myForm;
    
      if (controls['options'].value === 'incomes') {
        this.dataService.getReceiptsByYear(controls['year'].value).subscribe((data: Array<Receipt>) => {
          console.log(data);
          this.incomes = data;
        });
      }
      if (controls['options'].value === 'expenses') {
        this.dataService.getExpensesByYear(controls['year'].value).subscribe((data: Array<Expenses>) => {
          console.log(data);
          this.expenses = data;
        });
      }
      
    }

}
