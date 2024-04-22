import "@/styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import type { AppProps } from "next/app";
import MyApp from "./index"; //verificar isso

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
