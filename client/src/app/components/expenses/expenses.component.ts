import { Component, Input } from '@angular/core';
import { Supplier } from '../../models/Supplier.model';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from '../supplier/supplier.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Expenses } from '../../models/Expenses.model';
import { DataService } from '../../services/data.service';
import { dateValidation } from '../../validations/validationDate';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule, SupplierComponent, ReactiveFormsModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})

export class ExpensesComponent {
  @Input() expenses: {
    date: Date,
    amount: number,
    supplier: Supplier,
    paymentType: string,
    description: string
  } | undefined

  addExpense: boolean = false
  myForm: FormGroup
  suppliers: Array<Supplier> = []

  constructor(private dataService: DataService, private router: Router) {
    this.myForm = new FormGroup({
      date: new FormControl('', [Validators.required, dateValidation()]),
      amount: new FormControl(''),
      supplierName: new FormControl(''),
      supplierNum: new FormControl(''),
      paymentType: new FormControl(''),
      description: new FormControl('')
    })
    this.dataService.getAllSuppliers().subscribe((sup: Array<Supplier>) => {
      this.suppliers = sup;
    });
  }
  addExpens() {
    const { controls } = this.myForm
    let sup = this.suppliers.find(supplier => supplier.name === controls['supplierName'].value);
    let expenses: Expenses = {
      date: controls['date'].value,
      amount: controls['amount'].value,
      supplier: sup ? sup : { name: 'null', number: 'null' },
      paymentType: controls['paymentType'].value,
      description: controls['description'].value
    }
    console.log({ expenses });

    this.dataService.addExpenses(expenses).subscribe(data => {
      console.log({ data });
      this.myForm.reset()
      this.router.navigate(['']);

    })
  }
  getControlErrorsString(controlName: string) {
    return JSON.stringify(this.myForm.controls[controlName].errors)
  }
  getStartDateErrorString() {
    const error = this.myForm.controls['date'].errors?.['date']
    if (error) {
      const message = 'pleas put a date before today'
      return message;
    }
    else {
      return ''
    }
  }
  addExp() {
    this.addExpense = true
  }
}
