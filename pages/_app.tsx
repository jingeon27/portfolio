import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import {useEffect} from "react";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
