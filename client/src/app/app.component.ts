import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { ReceiptListComponent } from './components/receipt-list/receipt-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    RouterLink,
    RouterLinkActive,
     CustomerComponent,
     ReceiptComponent,
     ReceiptListComponent,
     HttpClientModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}
