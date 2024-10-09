import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Customer } from '../../models/Customer.model';
import { CustomerComponent } from '../customer/customer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, CustomerComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})

export class CustomerListComponent {
  customers!: Array<Customer>;
  constructor(private dataService: DataService) {
    this.dataService.getAllCustomers().subscribe((data: Customer[]) => {
      console.log({data});
      
      this.customers = data
    })
  }
}