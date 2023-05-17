import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { Button } from '@mui/material';
import React, { ReactElement } from 'react';

interface ButtonProps {
  onClick?: () => void;
  isLoading?: boolean
  isDisabled?: boolean
  loadingText?: string
  styles?: CSSProperties
  children: ReactElement
}

const SubmitButton: React.FC<ButtonProps> = ({
  isLoading, loadingText, isDisabled, children, styles, onClick,
}) => (
  <Button
    onClick={onClick}
    disabled={isDisabled || isLoading}
    variant="contained"
    type="submit"
    sx={{
      ...(isLoading && {
        '&.Mui-disabled': {
          background: '#1976d2',
          color: '#fff',
        },
      }),
      py: '6px',
      px: '16px',
      height: '39px',
      ...styles,
    }}
  >
    {isLoading ? loadingText : children}
  </Button>
);

SubmitButton.defaultProps = {
  loadingText: '...',
};

export { SubmitButton };
