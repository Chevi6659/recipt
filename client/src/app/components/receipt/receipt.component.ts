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


myForm: FormGroup
customers!:Customer[];
newCustomerForm:FormGroup;
receiptNum!:number;
customer!:Customer;
newCust=false
defaultCustName: string = '';
constructor(private dataService: DataService,private router: Router) {
  this.myForm = new FormGroup({
    receiptNum: new FormControl(''),
    customerName: new FormControl(''),
    customerNum: new FormControl(''),
    amountToPay: new FormControl(''),
    paymentType: new FormControl(''),
    date: new FormControl('', [Validators.required, dateValidation()]),
    description: new FormControl(''),
  })
  this.newCustomerForm=new FormGroup({
    customerName:new FormControl('',[Validators.required]),
    customerNum:new FormControl('',[Validators.required])
  })
  this.dataService.AllCustomers().subscribe((data:Customer[]) => {
    this.customers = data;
  });
  this.dataService.getAllReceipts().subscribe((data: Receipt[]) => {
    this.receiptNum = data.map(r => r.receiptNum).sort((x, y) => y - x)[0] + 1

  });
}
AddReceipt(){
  const { controls } = this.myForm
  this.dataService.getCustByName(controls['customerName'].value).subscribe((data: Customer) => {
    this.customer = data
    let receipt: Receipt = {
      receiptNum: this.receiptNum,
      customer: this.customer,
      amountToPay: controls['sum'].value,
      paymentType: controls['paymentMethods'].value,
      date: controls['date'].value,
      description: controls['description'].value
    }

    this.dataService.addReceipt(receipt).subscribe(data => {
      this.myForm.reset()
      this.router.navigate(['/receipt-list']);
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
  this.newCust = true
}
saveCustomer() {
  this.newCust = !this.newCust
  const { controls } = this.newCustomerForm
  this.defaultCustName = controls['nameCust'].value
  let newCustomer: Customer = {
    name: controls['nameCust'].value,
    number: controls['numberCust'].value
  }
  this.dataService.addCustomer(newCustomer).subscribe((data: Customer) => {
    this.newCustomerForm.reset()
  })

}
}
