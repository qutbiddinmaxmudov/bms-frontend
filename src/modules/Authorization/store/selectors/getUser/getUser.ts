import { StateSchema } from '../../../../../app/store/StoreProvider';

export const getUser = (state: StateSchema) => state.customer?.user;
