import { primary, white } from '@/styles/colors';
import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

interface ButtonProps extends MUIButtonProps {
  children: ReactNode;
}

const customTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === 'small'  && {
              fontSize: '0.875rem',
              lineHeight: '1rem',
              padding: '0.5rem 1rem',
              gap: '0.5rem',
            }),
          ...(ownerState.size === 'medium'  && {
            fontSize: '0.875rem',
            lineHeight: '1rem',
            padding: '0.75rem 1rem',
            gap: '0.5rem',
          }),
          ...(ownerState.size === 'large'  && {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            padding: '0.875rem 1.5rem',
            gap: '0.625rem',
          }),
          fontFamily: 'Roboto, sans-serif',
          borderRadius: '32px',
          backgroundColor: primary[500],
          color: white,
          textTransform: 'none',
          ':hover': {
            backgroundColor: primary[600],
          }
        }),
      },
    }
  }
});

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <MUIButton {...rest}>
        {children}
      </MUIButton>
    </ThemeProvider>
  );
}