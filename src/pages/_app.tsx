import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { NextIntlClientProvider } from "next-intl";
import { Poppins, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/nav";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import LangSwitch from "@/components/lang-switch";
import "@/styles/global.css";
import Footer from "@/components/footer";

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
  const { locale, pathname } = useRouter();

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

          <MotionConfig reducedMotion="user">
            <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo({ top: 0 })}>
                <motion.div
                    key={`${locale}${pathname}`}
                    className="flex flex-1 flex-col"
                    initial={{ opacity: 0, filter: "blur(6px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(6px)", transition: { duration: 0.2, ease: "easeIn" } }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
          </MotionConfig>

          <Footer />
          <LangSwitch />
      </div>
    </NextIntlClientProvider>
  );
}