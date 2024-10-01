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
private apiUrl= 'http://127.0.0.1:3621'
  constructor(private http:HttpClient) { }


  get AllReceipts(): Observable<Array<Receipt>> {
    // ניתוב להבאת כל הקבלות
    return this.http.get<Array<Receipt>>(`${this.apiUrl}`);
  }

 AllCustomers(): Observable<Customer[]> { 
    return this.http.get<Customer[]>(`${this.apiUrl}/customrs/allCustomers`);
  }
  getCustByName(name: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/customrs/getCustomerByName/${name}`)
  }
  getAllSuppliers(): Observable<Supplier[]> {
    const url = `${this.apiUrl}/suppliers/getAllSuppliers`;
    return this.http.get<Supplier[]>(url);
  }

  getAllInvoices(): Observable<Receipt[]> {
    return this.http.get<Receipt[]>(`${this.apiUrl}/invoices/getAll`);
  }

  get lastNumber(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}`);
  }

  addReceipt(newReceipt: Receipt): Observable<Receipt> {
    
    return this.http.post<Receipt>(`${this.apiUrl}/invoices/addInvoice`,
      newReceipt,
      {
        headers: { 'content-type': 'application/json' }
      }
    )
  }
  addExpenses(newExpenses: Expenses): Observable<Expenses> {
    return this.http.post<Expenses>('http://127.0.0.1:3000/expenses/saveExpenses',
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
    return this.http.get<Array<Receipt>>(`${this.apiUrl}/invoices/getInvoicesByMonth/${month}`);
  }
  getIncomeByYear(year: number): Observable<Array<Receipt>> {
    return this.http.get<Array<Receipt>>(`${this.apiUrl}/invoices/getInvoicesByYear/${year}`);
  }
  getInvoiceBetweenDays(start:string,end:string):Observable<Receipt[]>{
    return this.http.get<Receipt[]>(`${this.apiUrl}/invoices/between/${start}/${end}`);
  }
  getExpenceBetweenDays(start:string,end:string):Observable<Expenses[]>{
    return this.http.get<Expenses[]>(`${this.apiUrl}/expenses/between/${start}/${end}`);
  }
  getInvoicesByCustName(name:string):Observable<Receipt[]>{
    return this.http.get<Receipt[]>(`${this.apiUrl}/invoices/byCustName/${name}`);
  }
}






// filterCustomers(firstName?: string, lastName?: string, number?: string): Observable<Customer[]> {
//   let params = new HttpParams();
//   if (firstName) params = params.set('firstName', firstName.trim());
//   if (lastName) params = params.set('lastName', lastName.trim());
//   if (number) params = params.set('email', number.trim());
//   return this.http.get<Customer[]>(`${this.apiUrl}/FilterCustomers`, { params });
// }
// getCustomertFromServer(): Observable<Customer[]> {
//   return this.http.get<Customer[]>(`${this.apiUrl}/GetAllCustomers`);
// }

