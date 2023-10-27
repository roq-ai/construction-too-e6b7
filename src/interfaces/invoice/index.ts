import { PaymentInterface } from 'interfaces/payment';
import { UserInterface } from 'interfaces/user';
import { RentalInterface } from 'interfaces/rental';
import { GetQueryInterface } from 'interfaces';

export interface InvoiceInterface {
  id?: string;
  invoice_number: string;
  invoice_date: any;
  due_date: any;
  total_amount: number;
  user_id: string;
  rental_id: string;
  created_at?: any;
  updated_at?: any;
  payment?: PaymentInterface[];
  user?: UserInterface;
  rental?: RentalInterface;
  _count?: {
    payment?: number;
  };
}

export interface InvoiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  invoice_number?: string;
  user_id?: string;
  rental_id?: string;
}
