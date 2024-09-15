import { Component } from '@angular/core';
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
  receipts: Array<Receipt>
   addReceipt:boolean=false
  // private searchTerms = new Subject<{ firstName: string, lastName: string}>();
  // currentPage = 1;
  // itemsPerPage = 10; 
  // displayedCustomers: Customer[] = [];
  // customers: Customer[] = [];

  constructor(){
  
  // ngOnInit(): void {
  //   this.setupSearch();
  //   this.loadCustomers();
  // }

  //   setupSearch() {
  //     this.searchTerms.pipe(
  //       debounceTime(1000),
  //       distinctUntilChanged(),
  //       switchMap(({ firstName, lastName }) => {
  //         return this.dataService.filterCustomers(firstName, lastName);
  //       })
  //     ).subscribe(data => {
  //       this.customers = data;
  //       this.currentPage = 1;
  //       this.updateDisplayedCustomers();
  //     });
  //   }

  //   filterBySearch(name: string): void {
  //     const nameParts = name.split(' ');
  //     const firstName = nameParts[0] || '';
  //     const lastName = nameParts.slice(1).join(' ') || ''; // handling middle names as well
  
  //     this.searchTerms.next({ firstName, lastName });
  // }

  //   loadCustomers(): void {
  //     this.dataService.getCustomertFromServer().subscribe(customers => {
  //       this.customers = customers;
  //       this.updateDisplayedCustomers();
  //     });
  //   }
   
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
  
  // updateDisplayedCustomers(): void {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   this.displayedCustomers = this.customers.slice(startIndex, endIndex);
  // }


