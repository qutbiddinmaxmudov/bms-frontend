import React, { useEffect } from 'react';
import {
  Box,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  TextField,
  Typography,
  Checkbox,
  Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../common/validation';

export default function RegForm() {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler = (values) => {
    console.log(values);
  };
  console.log(errors);

  return (
    <Box sx={{
      maxWidth: '400px',
      mx: 'auto',
    }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          textAlign: 'center',
          color: 'black',
          m: '40px 0 20px',
        }}
      >
        Register
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <TextField
          sx={{ mb: '20px' }}
          label="Name"
          fullWidth
          autoFocus
          required
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ''}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('name')}
        />
        <TextField
          sx={{ mb: '20px' }}
          label="Email"
          fullWidth
          required
          type="email"
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('email')}
        />
        <TextField
          sx={{ mb: '20px' }}
          label="Password"
          fullWidth
          required
          type="password"
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password')}
        />
        <TextField
          sx={{ mb: '20px' }}
          label="Confirm Password"
          fullWidth
          required
          type="password"
          error={!!errors.passwordConfirm}
          helperText={
            errors.passwordConfirm ? errors.passwordConfirm.message : ''
          }
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('passwordConfirm')}
        />

        <FormGroup>
          <FormControlLabel
            control={<Checkbox required />}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('terms')}
            label={(
              <Typography color={errors.terms ? 'error' : 'black'}>
                Accept Terms and Conditions
              </Typography>
            )}
          />
          <FormHelperText error={!!errors.terms}>
            {errors.terms ? errors.terms.message : ''}
          </FormHelperText>
        </FormGroup>

        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{ py: '10px', mt: '20px' }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}
