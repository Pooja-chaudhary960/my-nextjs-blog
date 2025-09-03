
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import Layout from "../components/Layout/Layout.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
