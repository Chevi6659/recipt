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
  @Input() whatTo!: string
  receipts!: Array<Receipt>
   addReceipt:boolean=false
  constructor(private dataService: DataService){
    this.dataService.getAllInvoices().subscribe((data: Receipt[]) => {
      console.log({data});
      this.receipts = data
    })
  }
  addRec(){
    this.addReceipt=true
       }
}


