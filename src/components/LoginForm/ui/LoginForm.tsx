import React from 'react';
import {
  Box,
  FormGroup,
  FormHelperText,
  TextField,
  Typography,
  Button,
  Alert,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginValidation } from '../assets/loginValidation/loginValidation';

interface ILoginFormProps {
  onSubmit: (p: any) => void;
  isLoading: boolean;
  errorText: string | undefined;
}

export const LoginForm = (props: ILoginFormProps) => {
  const { onSubmit, isLoading, errorText } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginValidation),
  });
  console.log(register('username'), errors);

  return (
    <Box
      sx={{
        maxWidth: '400px',
        mx: 'auto',
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
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
            helperText={`${
              errors?.username?.message ? errors?.username?.message : ''
            }`}
            {...register('username')}
            ref={null}
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
            ref={null}
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
};
