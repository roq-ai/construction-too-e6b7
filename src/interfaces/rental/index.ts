import { InvoiceInterface } from 'interfaces/invoice';
import { UserInterface } from 'interfaces/user';
import { EquipmentInterface } from 'interfaces/equipment';
import { GetQueryInterface } from 'interfaces';

export interface RentalInterface {
  id?: string;
  start_date: any;
  end_date: any;
  total_price: number;
  user_id: string;
  equipment_id: string;
  created_at?: any;
  updated_at?: any;
  invoice?: InvoiceInterface[];
  user?: UserInterface;
  equipment?: EquipmentInterface;
  _count?: {
    invoice?: number;
  };
}

export interface RentalGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  equipment_id?: string;
}
