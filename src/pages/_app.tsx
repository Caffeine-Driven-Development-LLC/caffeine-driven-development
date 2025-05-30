import {AppProps} from "next/app";
import {NextPage} from "next";
import Head from "next/head";
import {ConfigProvider} from "antd";

import 'antd/dist/reset.css';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout ) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ConfigProvider theme={{
        token: {
          colorBgBase: "#c5c1c1",
          colorTextBase: '#000000',

          borderRadius: 6,
          borderRadiusLG: 8,
          borderRadiusSM: 4,

          marginXS: 8,
          marginSM: 12,
          margin: 16,
          marginMD: 20,
          marginLG: 24,
          marginXL: 32,
        },
      }}>
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  )
}