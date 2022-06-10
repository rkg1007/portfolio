import "../styles/globals.css";
import type { AppProps } from "next/app";
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen py-7 bg-gradient-to-r from-green to-blue-400 sm:px-20 md:px-20 lg:px-0">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-20">
        <div className="col-span-12 bg-white rounded-lg lg:col-span-3">
          <SideBar />
        </div>
        <div className="col-span-12 bg-white rounded-lg lg:col-span-9">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
