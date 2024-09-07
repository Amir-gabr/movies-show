//
//
//
"use client";


import { store } from "@/lib/redux/store";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from 'react-redux';

export default function ClientProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <Header />
      {children}
      <Footer />
    </Provider>
  );
}