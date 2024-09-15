import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpensesComponent } from '../expenses/expenses.component';
import { ReceiptComponent } from '../receipt/receipt.component';
import { Receipt } from '../../models/Receipt.model';
import { Expenses } from '../../models/Expenses.model';
import { DataService } from '../../services/data.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-segmentation',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    ExpensesComponent,
    ReceiptComponent,
  RouterOutlet,
RouterLink,
RouterLinkActive],
  templateUrl: './data-segmentation.component.html',
  styleUrl: './data-segmentation.component.scss'
})
export class DataSegmentationComponent {
  cust:boolean=false
  date:boolean=false
  byMonth:boolean=false
byYear:boolean=false

show = false
myForm: FormGroup;
  receipts: Receipt[]=[]
  expenses: Expenses[]=[]



  constructor(private dateService: DataService) {
    this.myForm = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      options: new FormControl('', [Validators.required])
    })}
customer(){
this.cust=true
console.log(this.cust);

}
dates(){
  this.date=true
}
month(){
  this.byMonth=true
}
year(){
  this.byYear=true
}


// showByDates() {
//   const { controls } = this.myForm
//   let start = controls['startDate'].value
//   let end = controls['endDate'].value
//   let option = controls['options'].value
//   if (option === 'incomes')
//     this.dateService.getInvoiceBetweenDays(start, end).subscribe((data: Receipt[]) => {
//       this.receipts = data
//       this.show = true
//     })
//   else {
//     this.dateService.getExpenceBetweenDays(start, end).subscribe((data: Expenses[]) => {
//       this.expenses = data
//       this.show = true

//     })
//   }



// }
}
