import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer.model';
import { Receipt } from '../models/Receipt.model';
import { Expenses } from '../models/Expenses.model';
import { Supplier } from '../models/Supplier.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
private apiUrl= 'http://127.0.0.1:3004'
  constructor(private http:HttpClient){}
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/customers/createCustomer`,
      customer,{headers: { 'content-type': 'application/json' } }
    );
  }
 getAllCustomers(): Observable<Customer[]> { 
    return this.http.get<Customer[]>(`${this.apiUrl}/customers/getAllCustomers`);
  }
  getCustByName(name: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/customers/getCustomerByName/${name}`)
  }
  getAllSuppliers(): Observable<Supplier[]> {
    const url = `${this.apiUrl}/provider/getAllProviders`;
    return this.http.get<Supplier[]>(url);
  }
  getAllInvoices(): Observable<Receipt[]> {
    return this.http.get<Receipt[]>(`${this.apiUrl}/invoices/getAllInvoice`);
  }
  get lastNumber(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}`);
  }
  addReceipt(newReceipt: Receipt): Observable<Receipt> {
    return this.http.post<Receipt>(`${this.apiUrl}/invoices/createNewInvoice`,
      newReceipt,
      {
        headers: { 'content-type': 'application/json' }
      }
    )
  }
  addExpenses(newExpenses: Expenses): Observable<Expenses> {
    return this.http.post<Expenses>('http://127.0.0.1:3004/expenses/createNewExpenses',
      newExpenses, {
      headers: { 'content-type': 'application/json' }
    })
  }
  getExpensesByMonth(month: number): Observable<Array<Expenses>> {
    return this.http.get<Array<Expenses>>(`${this.apiUrl}/expenses/getExpensesByMonth/${month}`);
  }
  getExpensesByYear(year: number): Observable<Array<Expenses>> {
    return this.http.get<Array<Expenses>>(`${this.apiUrl}/expenses/getExpensesByYear/${year}`);
  }
  getIncomeByMonth(month: number): Observable<Array<Receipt>> {
    return this.http.get<Array<Receipt>>(`${this.apiUrl}/invoices/getInvoiceByMonth/${month}`);
  }
  getIncomeByYear(year: number): Observable<Array<Receipt>> {
    return this.http.get<Array<Receipt>>(`${this.apiUrl}/invoices/getInvoiceByYear/${year}`);
  }
  getInvoiceBetweenDays(start:string,end:string):Observable<Receipt[]>{
    return this.http.get<Receipt[]>(`${this.apiUrl}/invoices/getInvoiceBetweenDays/${start}/${end}`);
  }
  getExpenceBetweenDays(start:string,end:string):Observable<Expenses[]>{
    return this.http.get<Expenses[]>(`${this.apiUrl}/expenses/between/${start}/${end}`);
  }
  getInvoicesByCustName(name:string):Observable<Receipt[]>{
    return this.http.get<Receipt[]>(`${this.apiUrl}/invoices/getInvoiceByCustName/${name}`);
  }
}
