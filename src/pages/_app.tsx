import {AppProps} from "next/app";
import Head from "next/head";
import {ChakraProvider, createSystem, defaultConfig, defineConfig} from "@chakra-ui/react";
import {ColorModeProvider} from "@/components/ui/color-mode";

const config = defineConfig({
  theme: {
    tokens: {
      colors:{
        primary: { value: "#0FEE0F" },
        secondary: { value: "#EE0F0F" },
      }
    },
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