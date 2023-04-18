import { literal, object, string } from 'zod';

export const loginValidation = object({
  username: string().nonempty('Username is required'),
  password: string()
    .nonempty('Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(100, 'Password must be less than 100 characters'),
  terms: literal(true, {
    invalid_type_error: 'Accept Terms is required',
  }),
});
