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
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
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
          ...(ownerState.variant?.includes("text")  && {
            color: 'inherit',
            padding: '0',
            gap: '0.5rem',
          }),
          ...(ownerState.variant === 'textLabel'  && {
            ...theme.typography.label
          }),
          ...(ownerState.variant === 'textBody'  && {
            ...theme.typography.body1
          }),
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
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