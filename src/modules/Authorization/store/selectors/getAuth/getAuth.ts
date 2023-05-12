import { StateSchema } from '../../../../../app/store/StoreProvider';

export const getAuth = (state: StateSchema) => state.customer?.auth;
