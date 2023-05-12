import { CustomerSchema } from '../../../../modules/Authorization/store/types/customerShema';
import { DateSchema } from '../../Date/store/types/dateSchema';

export interface StateSchema {
  customer: CustomerSchema;
  date: DateSchema;
}
