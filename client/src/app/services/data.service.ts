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


  // get AllReceipts(): Observable<Array<Receipt>> {
  //   // ניתוב להבאת כל הקבלות
  //   return this.http.get<Array<Receipt>>(`${this.apiUrl}`);
  // }
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/customrs/createCustomer`,
      customer,
      {
        headers: { 'content-type': 'application/json' }
      }
    );
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

  getAllReceipts(): Observable<Receipt[]> {
    return this.http.get<Receipt[]>(`${this.apiUrl}/invoices/getAll`);
  }

  getAllExpenses(): Observable<Array<Expenses>> {
    return this.http.get<Array<Expenses>>(`${this.apiUrl}/expenses/getAllExpenses`);
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
    return this.http.post<Expenses>('http://127.0.0.1:3620/expenses/saveExpenses',
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
  getReceiptsByMonth(month: number): Observable<Array<Receipt>> {
    return this.http.get<Array<Receipt>>(`${this.apiUrl}/invoices/getInvoicesByMonth/${month}`);
  }
  getReceiptsByYear(year: number): Observable<Array<Receipt>> {
    return this.http.get<Array<Receipt>>(`${this.apiUrl}/invoices/getInvoicesByYear/${year}`);
  }
  getReceiptsBetweenDates(start:string,end:string):Observable<Receipt[]>{
    return this.http.get<Receipt[]>(`${this.apiUrl}/invoices/between/${start}/${end}`);
  }
  getExpenceBetweenDays(start:string,end:string):Observable<Expenses[]>{
    return this.http.get<Expenses[]>(`${this.apiUrl}/expenses/between/${start}/${end}`);
  }
  getReceiptByCustName(name:string):Observable<Receipt[]>{
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

