import type { Metadata } from "next";
import { Inter, Khand, Koulen } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const khand = Khand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

export const metadata: Metadata = {
  title: "PDF-BANAO",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body
        className={`${inter.className} ${khand.className} ${koulen.className} w-full h-full bg-bgColor text-darker`}
      >
        <div className="font-koulen min-h-screen w-full ">{children}</div>
      </body>
    </html>
  );
}
