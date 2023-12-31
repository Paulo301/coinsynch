import { theme } from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

import 'swiper/css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
