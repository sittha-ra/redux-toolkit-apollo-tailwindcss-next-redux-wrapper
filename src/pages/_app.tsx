import "../styles/globals.css";

import type { AppProps } from "next/app";
import { wrapper } from "@redux/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ApolloProvider client={client}>
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
    // </ApolloProvider>
  );
}

export default wrapper.withRedux(MyApp);
