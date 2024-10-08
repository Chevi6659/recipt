import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { ReceiptListComponent } from './components/receipt-list/receipt-list.component';
import { NgModule } from '@angular/core';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { DataSegmentationComponent } from './components/data-segmentation/data-segmentation.component';
import { ExpensesPerCustomerComponent } from './components/expenses-per-customer/expenses-per-customer.component';
import { ExpensesByMonthComponent } from './components/expenses-by-month/expenses-by-month.component';
import { ExpensesByDateRangeComponent } from './components/expenses-by-date-range/expenses-by-date-range.component';
import { ExpensesByYearComponent } from './components/expenses-by-year/expenses-by-year.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

export const routes: Routes = [
    // {path:'',component:ReceiptListComponent},
{path:'customer',component:CustomerListComponent},
{path:'receipt',component:ReceiptComponent},
{path:'receipt-list',component:ReceiptListComponent},
{path:'expenses',component:ExpensesComponent},
{path:'data-segmentation',component:DataSegmentationComponent},
{path:'data-segmentation/customer',component:ExpensesPerCustomerComponent},
{path:'data-segmentation/dates',component:ExpensesByDateRangeComponent},
{path:'data-segmentation/month',component:ExpensesByMonthComponent},
{path:'data-segmentation/year',component:ExpensesByYearComponent}
];

