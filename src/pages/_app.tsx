import {AppProps} from "next/app";
import {NextPage} from "next";
import Head from "next/head";
import {ConfigProvider} from "antd";

// Import Ant Design styles
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
          colorPrimary: '#1587b1',


          colorBgContainer: '#ba0b0b',
          colorBgLayout: '#e4d5ca',

          colorText: '#000000',
          colorTextSecondary: '#1587b1',
          colorTextPlaceholder: '#1587b1',
          colorTextDisabled: '#1587b1',
          colorTextDescription: '#1587b1',

          borderRadius: 6,
          borderRadiusLG: 8,
          borderRadiusSM: 4,
          colorBorder: '#1587b1',

          marginXS: 8,
          marginSM: 12,
          margin: 16,
          marginMD: 20,
          marginLG: 24,
          marginXL: 32,



        },
        components: {
          Layout: {
            headerBg: 'rgba(218,170,127,0.57)',
            footerBg: '#a67d55',
            headerHeight: 64,
            headerPadding: '0 50px',
            footerPadding: '24px 50px',

          }
        }
      }}>
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  )
}