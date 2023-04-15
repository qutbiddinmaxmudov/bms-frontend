import { AuthSchema } from './authSchema';
import { UserSchema } from './userShema';

export interface CustomerSchema {
  auth: AuthSchema,
  user?: UserSchema,
}
