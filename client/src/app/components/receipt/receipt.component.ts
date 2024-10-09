import { Component, Input } from '@angular/core';
import { Customer } from '../../models/Customer.model';
import { CommonModule } from '@angular/common';
import { Receipt } from '../../models/Receipt.model';
import { CustomerComponent } from '../customer/customer.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { dateValidation } from '../../validations/validationDate';
import { Router } from '@angular/router';

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
customer!:Customer;
receiptNumber!: number;
show=false;

constructor(private dataService: DataService,private router:Router) {
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
  this.dataService.getAllCustomers().subscribe((data:Customer[]) => {
    console.log('customers',{data});
    this.customers = data;
  });
  this.dataService.getAllInvoices().subscribe((data: Receipt[]) => {
    this.receiptNumber = data.map(r => r.receiptNum).sort((a, b) => b - a)[0] + 1
  });
}

AddReceipt(){
    const { controls } = this.myForm
    this.dataService.getCustByName(controls['customerName'].value).subscribe((data: Customer) => {
      this.customer = data
      let receipt: Receipt = {
        receiptNum: this.receiptNumber,
        customer: this.customer,
        amountToPay: controls['amountToPay'].value,
        paymentType: controls['paymentType'].value,
        date: controls['date'].value,
        description: controls['description'].value
      }
      this.dataService.addReceipt(receipt).subscribe(data => {
        this.myForm.reset()
        // this.router.navigate(['/data-segmentation']);
      })
    });
  }
  getControlErrorsString(controlName: string) {
    return JSON.stringify(this.myForm.controls[controlName].errors)
}
getStartDateErrorString() {
  const error = this.myForm.controls['date'].errors?.['date']
  if (error) {
    const message = 'hey,the date need to be before today'
    return message;
  }
  return ''
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
