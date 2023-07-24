import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
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
    }
  },
});