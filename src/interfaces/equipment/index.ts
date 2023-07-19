import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EquipmentInterface {
  id?: string;
  name: string;
  status: string;
  company_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface EquipmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  company_id?: string;
  user_id?: string;
}
