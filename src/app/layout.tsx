import type { Metadata } from "next";
import "./globals.css";
import { Roboto} from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Index";

const roboto =Roboto({
  weight:["300", "400", "700", "900"],
  subsets:["latin"],
});

export const metadata: Metadata = {
  title: "Governor Initiative",
  description: "Governor Initiatve for Artifical Intelligence, Web 3.0 and Metaverse",
  icons:{
    icon: {url: "/goverlogo.jpg", type:"image/jpg"}
  }
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Header />
        <div >{children}</div>
        <Footer />
      </body>
    </html>
  );
}
