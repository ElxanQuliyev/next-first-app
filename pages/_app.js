import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router';
import { IntlProvider } from "react-intl";
import Layout from '../components/layout/layout'
import '../styles/globals.css'
import tr from "../lang/tr.json";
import az from "../lang/az.json";


function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const messages={
    tr,az
  }
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout><Component {...pageProps} /></Layout>
    </IntlProvider>
  
  )
}

export default MyApp
