import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.scss'
})
export class SupplierComponent {
  @Input() supplier: {
    name: string,
    number: string
  } | undefined
}
