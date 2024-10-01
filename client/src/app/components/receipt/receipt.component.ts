import { Component, Input } from '@angular/core';
import { Customer } from '../../models/Customer.model';
import { CommonModule } from '@angular/common';
import { Receipt } from '../../models/Receipt.model';
import { CustomerComponent } from '../customer/customer.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { dateValidation } from '../../validations/validationDate';

@Component({
  selector: 'app-receipt',
  standalone: true,
  imports: [CommonModule,CustomerComponent,ReactiveFormsModule],
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.scss'
})
export class ReceiptComponent {
 
@Input() receipt:{
  customer: Customer,
  date:Date,
  amountToPay: number,
  paymentType:string,
  description:string,
  receiptNum: number,
  
} | undefined
CustomerName: string = 'Select Customer';
custForm: FormGroup
myForm: FormGroup
customers!:Customer[];
show=false;
constructor(private dataService: DataService) {
  this.myForm = new FormGroup({
    receiptNum: new FormControl(''),
    customerName: new FormControl(''),
    customerNum: new FormControl(''),
    amountToPay: new FormControl(''),
    paymentType: new FormControl(''),
    date: new FormControl('', [Validators.required, dateValidation()]),
    description: new FormControl(''),
  })
  this.custForm = new FormGroup({
    nameCust: new FormControl('', [Validators.required]),
    numberCust: new FormControl('', [Validators.required])
  })
  this.dataService.AllCustomers().subscribe((data:Customer[]) => {
    this.customers = data;
  });
}
AddReceipt(){

}
add() {
  this.show = true
}

saveCustomer() {
  this.show = !this.show
  const { controls } = this.custForm
  this.CustomerName = controls['nameCust'].value
  let newCustomer: Customer = {
    name: controls['nameCust'].value,
    number: controls['numberCust'].value
  }
  this.dataService.addCustomer(newCustomer).subscribe((data: Customer) => {
    this.custForm.reset()
  })
  
}

}
