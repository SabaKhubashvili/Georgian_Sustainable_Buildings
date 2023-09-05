import { NextIntlClientProvider, useLocale, useTranslations } from "next-intl";
import { notFound, redirect } from "next/navigation";

import localFont from "next/font/local";

import "./globals.css";
import { ClientOnly } from "./components/ClientOnly";
import { Navbar } from "./components/Navbar/Navbar";
import { NavbarContextProvider } from "./providers/NavbarContextProvider";
import { Footer } from "./components/Footer/Footer";
import { LoginModal } from "./components/Modals/LoginModal";
import { RegisterModal } from "./components/Modals/RegisterModal";
import { Toaster } from "react-hot-toast";


export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ge'}];
}
 

const Sf_Pro = localFont({
  src: [
    {
      path: "../../public/fonts/Sf_Pro/SF-Pro-Display-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Sf_Pro/sf-pro-text-semibold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Sf_Pro/sf-pro-text-medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Sf_Pro/sf-pro-text-regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Sf_Pro/sf-pro-text-light.ttf",
      weight: "300",
    },
  ],
  variable: "--font-Sf_Pro",
});

export const metadata = {
  title: "Georgian Sustainable Buildings",
  description: "Generated by create next app",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  // const locale = useLocale();
  // if (params.locale !== locale) {
  //   redirect('/404')
  // }


  let messages;
  try {
    messages = (await import(`../../languages/${params.locale}.json`)).default;
  } catch (error) {
    redirect('/404')
  }

  return (
    <html lang={params.locale}>
      <body className={Sf_Pro.className}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <ClientOnly>
            <Toaster />
            <LoginModal/>
            <RegisterModal/>
            <div className="bg-1" />
            <div className="bg-2" />
              <Navbar />
            <main>{children}</main>
            <Footer/>
          </ClientOnly>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
