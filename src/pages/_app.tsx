import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 my-14 lg:px-20 px-5">
      <div className="col-span-12 lg:col-span-3 bg-white rounded-lg">SideBar</div>
      <div className="col-span-12 lg:col-span-9 bg-white rounded-lg">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
