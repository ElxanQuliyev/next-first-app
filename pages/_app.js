import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import Layout from "../components/layout/layout";
import "../styles/globals.css";
import tr from "../lang/tr.json";
import az from "../lang/az.json";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
// import store from "../store";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const messages = {
    tr,
    az,
  };
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {/* <Provider store={store}> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* </Provider> */}
    </IntlProvider>
  );
}

export default MyApp;
