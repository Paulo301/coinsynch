import { createTheme } from '@mui/material/styles';
import { textBase, white } from './colors';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    label: React.CSSProperties;
    smLabel: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    label?: React.CSSProperties;
    smLabel?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    label: true;
    smLabel: true;
  }
}

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: white,
          color: textBase,
        }
      }
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '3rem',
      lineHeight: '3.5rem',
      letterSpacing: '-0.063rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      lineHeight: '3rem',
      letterSpacing: '-0.063rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2rem',
      lineHeight: '2.5rem',
      letterSpacing: '0',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      letterSpacing: '0',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
      letterSpacing: '0',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
      letterSpacing: '0',
      fontWeight: 400,
    },
    label: {
      fontSize: '0.875rem',
      lineHeight: '1rem',
      letterSpacing: '0',
      fontWeight: 400,
    },
    smLabel: {
      fontSize: '0.75rem',
      lineHeight: '0.875rem',
      letterSpacing: '0',
      fontWeight: 400,
    },
  },
});