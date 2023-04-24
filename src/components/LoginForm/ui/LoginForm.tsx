import React from 'react';
import {
  Box,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  TextField,
  Typography,
  Checkbox,
  Button,
  Alert,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginValidation } from '../assets/loginValidation/loginValidation';

interface ILoginFormProps {
  onSubmit: (p: any) => void;
  isLoading: boolean;
  errorText: string | undefined;
}

export function LoginForm(props: ILoginFormProps) {
  const { onSubmit, isLoading, errorText } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: zodResolver(loginValidation),
  });

  return (
    <Box
      sx={{
        maxWidth: '400px',
        mx: 'auto',
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ textAlign: 'center' }}
      >
        Login
      </Typography>
      <Box
        sx={{
          height: '50px',
          mb: 2,
        }}
      >
        <Alert
          severity="error"
          sx={{
            ...(!errorText && { display: 'none' }),
          }}
        >
          {errorText}
        </Alert>
      </Box>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        noValidate
        autoComplete="off"
      >
        <FormGroup>
          <TextField
            sx={{ mb: '20px' }}
            label="Username"
            fullWidth
            required
            error={!!errors.username}
            helperText={`${errors?.username?.message ? errors?.username?.message : ''}`}
            {...register('username')}
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
          <Controller
            control={control}
            defaultValue={false}
            {...register('terms')}
            render={({ field: { value, onChange } }) => (
              <FormControlLabel
                control={
                  <Checkbox checked={value} onChange={onChange} />
            }
                label={(
                  <Typography color={errors.terms ? 'error' : 'black'}>
                    Accept Terms and Conditions
                  </Typography>
            )}
              />
            )}
          />

          <FormHelperText error={!!errors.terms}>
            {errors.terms ? 'Accept Terms is required' : ''}
          </FormHelperText>
        </FormGroup>

        <Button
          disabled={isLoading}
          variant="contained"
          fullWidth
          type="submit"
          sx={{ py: '10px', mt: '20px' }}
        >
          {isLoading ? 'Login.....' : 'Login'}

        </Button>
      </Box>
    </Box>
  );
}
