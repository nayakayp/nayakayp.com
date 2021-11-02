import "../styles/global.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  id: "G-5L58DVE2GW",
};

export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return <Component {...pageProps} />;
}
