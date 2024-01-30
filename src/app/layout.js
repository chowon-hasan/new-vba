import { Montserrat, Oswald, Ubuntu, Mulish } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalysitcs";

<link rel="icon" href="/favicon.ico" sizes="any" />;

const montserrat = Montserrat({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });
const ubuntu = Ubuntu({ weight: ["300"], subsets: ["latin"] });

export const metadata = {
  title: "La boîte automatique",
  description: "Vente de calculateur Renault",
  icon: "favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <GoogleAnalytics />
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PVVG6XNH"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
