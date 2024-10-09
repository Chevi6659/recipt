import { Component, Input } from '@angular/core';
import { Customer } from '../../models/Customer.model';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

  @Input() customer: {
    name: string,
    number: string
  } | undefined

}
