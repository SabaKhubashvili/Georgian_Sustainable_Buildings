import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";

import localFont from "next/font/local";

import "./globals.css";
import { ClientOnly } from "./components/ClientOnly";
import { Navbar } from "./components/Navbar/Navbar";
import { NavbarContextProvider } from "./providers/NavbarContextProvider";
import { Footer } from "./components/Footer/Footer";
import { LoginModal } from "./components/Modals/LoginModal";
import { RegisterModal } from "./components/Modals/RegisterModal";
import { Toaster } from "react-hot-toast";

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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }

  const t = useTranslations("Navbar");
  const footert = useTranslations("Footer");
  const modalt = useTranslations("Modal")

  const navbarJson = {
    Links: {
      home: t("Links.Home"),
      about: t("Links.About_us"),
      calculator: t("Links.Calculator"),
    },
    Auth: {
      sign_in: t("Auth.Sign_In"),
      try: t("Auth.Try"),
    },
    languages: {
      ge: t("Languages.ge"),
      en: t("Languages.en"),
    },
  };

  const footerKeys = [
    {
      title: "title1",
      comp1: "sec1title1",
      comp2: "sec1title2",
      comp3: "sec1title3",
    },

    {
      title: "title2",
      comp1: "sec2title1",
      comp2: "sec2title2",
      comp3: "sec2title3",
      comp4: "sec2title4",
    },
    {
      title: "title3",
      comp1: "sec3title1",
      comp2: "sec3title2",
      comp3: "sec3title3",
    },
  ];

  const footerContent =  footerKeys.map(key => ({
    title: footert(key.title),
    comp1:  footert(key.comp1),
    comp2:  footert(key.comp2),
    comp3:  footert(key.comp3),
    comp4: key.comp4 && footert(key.comp4)
}))

  return (
    <html lang={locale}>
      <body className={Sf_Pro.className}>
        <ClientOnly>
          <Toaster/>
          <LoginModal 
            title={modalt('loginTitle')}
            subTitle={modalt('loginSubTitle')} 
            actionLabel={modalt('loginActionLabel')} 
            footerContent={modalt('loginFooter')}  
            mailLabel={modalt('mailLabel')}
            passwordLabel={modalt('passwordLabel')}
           />
          <RegisterModal
            title={modalt('registerTitle')}
            subTitle={modalt('registerSubTitle')} 
            actionLabel={modalt('registerActionLabel')} 
            footerContent={modalt('registerFooter')}  
            usernameLabel={modalt('nameLabel')}
            mailLabel={modalt('mailLabel')}
            passwordLabel={modalt('passwordLabel')}
          />
          
          <div className="bg-1" />
          <div className="bg-2" />
          <NavbarContextProvider data={navbarJson}>
            <Navbar />
          </NavbarContextProvider>
          <div>{children}</div>
          <Footer newsLetterTitle={footert("newsLetterTitle")} content={footerContent} />
        </ClientOnly>
      </body>
    </html>
  );
}
