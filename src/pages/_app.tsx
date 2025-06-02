import {AppProps} from "next/app";
import Head from "next/head";
import {ChakraProvider, createSystem, defaultConfig, defineConfig} from "@chakra-ui/react";
import {ColorModeProvider} from "@/components/ui/color-mode";

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "0em",
      lg: "50em",
    },
    tokens: {
      colors: {
        text: {value: "#000000"}
      }
    },
  },
  globalCss: {
    "html, body": {
      margin: 0,
      marginLeft: {sm: 5, lg: 20},
      marginRight: {sm: 5, lg: 20},
      padding: 0,
      fontFamily: "Roboto",
      backgroundColor: "#cdc9c9",
      color: "var(--colors-text)",
    },
  }
})

const system = createSystem(defaultConfig, config)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}