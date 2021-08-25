import LayoutApp from "../components/layout/LayoutApp";
import StoreContext from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StoreContext>
      <LayoutApp>
        <Component {...pageProps} />
      </LayoutApp>
    </StoreContext>
  );
}

export default MyApp;
