import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LoginContextProvider } from "@/utils/contexts/LoginContext";
import { CartContextProvider } from "@/utils/contexts/CartContext";
import Head from "next/head";

export const metadata = {
    title: "ZaraHome",
    description: "Магазин домашнего декора",
  };

  
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="flex flex-col justify-between min-h-screen">
        <LoginContextProvider>
            <CartContextProvider>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </CartContextProvider>
        </LoginContextProvider>
        </body>
        </html>
    );
}
