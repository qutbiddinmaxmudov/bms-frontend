import { StateSchema } from '../../../../../app/providers/StoreProvider';

export const getAuth = (state: StateSchema) => state.customer?.auth;
