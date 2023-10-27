import { UserInterface } from 'interfaces/user';
import { InvoiceInterface } from 'interfaces/invoice';
import { GetQueryInterface } from 'interfaces';

export interface PaymentInterface {
  id?: string;
  payment_date: any;
  amount: number;
  payment_method: string;
  user_id: string;
  invoice_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  invoice?: InvoiceInterface;
  _count?: {};
}

export interface PaymentGetQueryInterface extends GetQueryInterface {
  id?: string;
  payment_method?: string;
  user_id?: string;
  invoice_id?: string;
}
