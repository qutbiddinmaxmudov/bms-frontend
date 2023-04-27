import { object, string } from 'zod';

export const loginValidation = object({
  username: string({
    required_error: 'Username is required',
    coerce: true,
  }),

  password: string({ required_error: 'Password is required', coerce: true })
    .min(8, 'Password must be more than 8 characters')
    .max(100, 'Password must be less than 100 characters'),
});
