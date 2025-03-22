import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginContextProvider from "@/utils/contexts/LoginContext";
import CartContextProvider from "@/utils/contexts/CartContext";
import Head from "next/head";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>ZaraHome</title>
        </Head>
        <body className="flex flex-col justify-between min-h-screen">
        <LoginContextProvider value={{ user: null }}>
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
