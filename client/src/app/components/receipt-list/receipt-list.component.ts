import { Component, Input } from '@angular/core';
import { Receipt } from '../../models/Receipt.model';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { Customer } from '../../models/Customer.model';
import { ReceiptComponent } from '../receipt/receipt.component';

@Component({
  selector: 'app-receipt-list',
  standalone: true,
  imports: [CommonModule,ReceiptComponent],
  templateUrl: './receipt-list.component.html',
  styleUrl: './receipt-list.component.scss'
})
export class ReceiptListComponent {
  // אחרי שיש חיבור לשרת להשאיר את זה
  // @Input() allReceipts!: string
  // receipts!: Array<Receipt>
  // constructor(private dataService: DataService) {

  //   this.dataService.getAllReceipts().subscribe((data: Receipt[]) => {
  //     this.receipts = data
  //   })

  // }

  receipts: Array<Receipt>
   addReceipt:boolean=false
  
  constructor(){
   
    this.receipts = [{  
      customer: {name:'AAA',number:'15875'},
      date:new Date("12/05/2024"),
      amountToPay: 154,
      paymentType:'cash',
      description:'string1',
      receiptNum: 0},

      { customer: {name:'BBBB',number:'8588'},
      date:new Date(),
      amountToPay: 258,
      paymentType:'credit',
      description:'string2',
      receiptNum:1}]
       
  }
  addRec(){
    this.addReceipt=true
       }
}
  



