import {AppProps} from "next/app";
import Head from "next/head";
import {Provider} from "@/components/ui/provider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Provider >
        <Component {...pageProps} />
      </Provider>
    </>
  )
}