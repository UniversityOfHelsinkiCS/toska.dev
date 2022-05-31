import { ChakraProvider, DarkMode } from "@chakra-ui/core";
import type { AppProps } from "next/app";
import "./styles.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <DarkMode>
        <Component {...pageProps} />
      </DarkMode>
    </ChakraProvider>
  );
}
