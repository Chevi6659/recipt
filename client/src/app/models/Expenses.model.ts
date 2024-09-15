import { Supplier } from "./Supplier.model";

export interface Expenses{
    date:Date,
    amount: number,
    supplier: Supplier,
    paymentType:string,
    description:string
}