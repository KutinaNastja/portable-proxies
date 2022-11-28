import type { AppProps } from "next/app";

import "../../styles/globals.css";

import { wrapper } from "../store/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
