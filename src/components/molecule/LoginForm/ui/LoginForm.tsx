import React from 'react';
import {
  Box,
  FormGroup,
  FormHelperText,
  TextField,
  Alert,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitButton } from 'components/atom/SubmitButton';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { loginValidation } from '../assets/loginValidation/loginValidation';

interface ILoginFormProps {
  onSubmit: (p: any) => void;
  isLoading: boolean;
  errorText: string | undefined;
  styles?: CSSProperties
}

const LoginForm: React.FC<ILoginFormProps> = ({
  onSubmit, isLoading, errorText, styles,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginValidation),
  });

  return (
    <Box
      sx={{
        ...styles,
      }}
    >
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
          <FormHelperText error={!!errors.terms}>
            {errors.terms ? 'Accept Terms is required' : ''}
          </FormHelperText>
        </FormGroup>

        <SubmitButton
          isLoading={isLoading}
          loadingText="Loading..."
        >
          Login
        </SubmitButton>
      </Box>
    </Box>
  );
};

export { LoginForm };
