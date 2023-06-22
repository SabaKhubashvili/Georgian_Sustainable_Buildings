import { ClientOnly } from "./components/ClientOnly";
import { Navbar } from "./components/Navbar/Navbar";
import "./globals.css";
import localFont from "next/font/local";

const Sf_Pro = localFont({
  src: [
    {
      path: "../public/fonts/Sf_Pro/SF-Pro-Display-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Sf_Pro/sf-pro-text-semibold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/Sf_Pro/sf-pro-text-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Sf_Pro/sf-pro-text-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Sf_Pro/sf-pro-text-Light.ttf",
      weight: "300",
    },
  ],
  variable: "--font-Sf_Pro",
});

export const metadata = {
  title: "Georgian Sustainable Buildings",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Sf_Pro.className}>
        <ClientOnly>
          <div className="bg-1"/>
          <div className="bg-2"/>
          <Navbar />
          <div>{children}</div>
        </ClientOnly>
      </body>
    </html>
  );
}
