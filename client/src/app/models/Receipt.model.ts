import {Customer} from "./Customer.model"
export interface Receipt {
   
    customer: Customer,
    date:Date,
    amountToPay: number,
    paymentType:string,
    description:string
    receiptNum: number,

    
}