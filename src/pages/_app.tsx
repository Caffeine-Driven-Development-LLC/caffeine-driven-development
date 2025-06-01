import {AppProps} from "next/app";
import Head from "next/head";
import {ChakraProvider, createSystem, defaultConfig, defineConfig} from "@chakra-ui/react";
import {ColorModeProvider} from "@/components/ui/color-mode";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
      }
    },
  },
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: "Roboto",
      backgroundColor: "#cdc9c9",
    }
  }
})

const system = createSystem(defaultConfig, config)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <ChakraProvider value={system}>
        <ColorModeProvider>
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </>
  )
}