import type { Metadata } from "next";
import { Inter, Khand, Koulen } from "next/font/google";
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${khand.className} ${koulen.className}`}
      >
        <div className="font-koulen bg-bgColor h-auto text-darker ">
          {children}
        </div>
      </body>
    </html>
  );
}
