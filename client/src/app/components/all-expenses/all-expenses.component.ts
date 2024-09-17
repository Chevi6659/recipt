import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExpensesComponent } from '../expenses/expenses.component';
import { Expenses } from '../../models/Expenses.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-all-expenses',
  standalone: true,
  imports: [CommonModule,ExpensesComponent],
  templateUrl: './all-expenses.component.html',
  styleUrl: './all-expenses.component.scss'
})
export class AllExpensesComponent {
  @Input()allexpenses!:string
expenses!:Array<Expenses>
constructor(private dataService:DataService){

  this.dataService.getAllExpenses().subscribe((data: Array<Expenses>) => {
    this.expenses = data;
  })

}

}
