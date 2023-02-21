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
import { DateForm } from '../interface/dateForm';

export default function RegForm() {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  function onSubmit(date: DateForm) {
    return date;
  }

  return (
    <Box
      sx={{
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
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ mb: '20px' }}
          label="Name"
          fullWidth
          autoFocus
          required
          error={!!errors.name}
          helperText={`${errors?.name ? errors?.name?.message : ''}`}
          {...register('name')}
        />
        <TextField
          sx={{ mb: '20px' }}
          label="Email"
          fullWidth
          required
          type="email"
          error={!!errors.email}
          helperText={`${errors?.email?.message ? errors?.email?.message : ''}`}
          {...register('email')}
        />
        <TextField
          sx={{ mb: '20px' }}
          label="Password"
          fullWidth
          required
          type="password"
          error={!!errors.password}
          helperText={`${errors?.password ? errors?.password?.message : ''}`}
          {...register('password')}
        />
        <TextField
          sx={{ mb: '20px' }}
          label="Confirm Password"
          fullWidth
          required
          type="password"
          error={!!errors.passwordConfirm}
          helperText={`${
            errors.passwordConfirm ? errors.passwordConfirm.message : ''
          }`}
          {...register('passwordConfirm')}
        />

        <FormGroup>
          <FormControlLabel
            control={<Checkbox required />}
            {...register('terms')}
            label={(
              <Typography color={errors.terms ? 'error' : 'black'}>
                Accept Terms and Conditions
              </Typography>
            )}
          />
          <FormHelperText error={!!errors.terms}>
            {`${errors?.terms ? errors?.terms?.message : ''}`}
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
