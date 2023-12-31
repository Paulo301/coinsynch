import { createTheme } from "@mui/material/styles";
import { primary, secondary, textBase, white } from "./colors";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    label: React.CSSProperties;
    smLabel: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    label?: React.CSSProperties;
    smLabel?: React.CSSProperties;
  }

  interface ButtonVariants {
    textLabel: React.CSSProperties;
    textBody: React.CSSProperties;
  }

  interface ButtonVariantsOptions {
    textLabel: React.CSSProperties;
    textBody: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    label: true;
    smLabel: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    textLabel: true;
    textBody: true;
  }
}

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: white,
          color: textBase,
        },
      },
    },
    MuiTableCell: {
      variants: [
        {
          props: { variant: "head" },
          style: {
            fontSize: "0.875rem",
            lineHeight: "1rem",
            letterSpacing: "0",
            fontWeight: 400,
            color: textBase,
            border: 0,
            padding: "0.5rem 1.5rem",
          },
        },
        {
          props: { variant: "body" },
          style: {
            color: textBase,
            border: 0,
            padding: "1rem 1.5rem",
          },
        },
      ],
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          border: 0,
          "&:nth-of-type(even)": {
            backgroundColor: secondary[100],
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
      lineHeight: "3.5rem",
      letterSpacing: "-0.063rem",
      fontWeight: 700,
      color: primary[500],
    },
    h2: {
      fontSize: "2.5rem",
      lineHeight: "3rem",
      letterSpacing: "-0.063rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "2rem",
      lineHeight: "2.5rem",
      letterSpacing: "0",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      letterSpacing: "0",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
      letterSpacing: "0",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      letterSpacing: "0",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "1.5rem",
      letterSpacing: "0",
      fontWeight: 400,
    },
    label: {
      fontSize: "0.875rem",
      lineHeight: "1rem",
      letterSpacing: "0",
      fontWeight: 400,
    },
    smLabel: {
      fontSize: "0.75rem",
      lineHeight: "0.875rem",
      letterSpacing: "0",
      fontWeight: 400,
    },
  },
});
