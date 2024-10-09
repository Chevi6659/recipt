import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReceiptComponent } from '../receipt/receipt.component';
import { Receipt } from '../../models/Receipt.model';
import { Customer } from '../../models/Customer.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-expenses-per-customer',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule,
    ReceiptComponent],
  templateUrl: './expenses-per-customer.component.html',
  styleUrl: './expenses-per-customer.component.scss'
})
export class ExpensesPerCustomerComponent {
  myForm: FormGroup;
  receipts!:Receipt[]
  letExpensesPerCustomer=false
  customers!: Customer[]
  
  constructor(private dataService:DataService) {
    this.myForm = new FormGroup({
      customerName: new FormControl('', [Validators.required]),
    })
    this.dataService.getAllCustomers().subscribe(data => {
      this.customers = data
    })
  }


  getExpensesPerCustomer() {
    this.letExpensesPerCustomer=true
    const { controls } = this.myForm
    let name = controls['customerName'].value
    this.dataService.getInvoicesByCustName(name).subscribe((data:Receipt[])=>{
      this.receipts=data
    })

  }
}
