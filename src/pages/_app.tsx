import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { NextIntlClientProvider } from "next-intl";
import { Poppins, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/nav";
import LangSwitch from "@/components/lang-switch";
import "@/styles/global.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    <NextIntlClientProvider
      locale={locale ?? "pt"}
      messages={pageProps.messages}
      timeZone="America/Sao_Paulo"
    >
      <div
        className={`${poppins.variable} ${jetbrains.variable} flex min-h-dvh flex-col font-sans`}
      >
        <Nav />
        <Component {...pageProps} />
        <LangSwitch />
      </div>
    </NextIntlClientProvider>
  );
}