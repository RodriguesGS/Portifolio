import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Globe } from "lucide-react";

type Lang = "pt" | "en";

const LangSwitch: React.FC = () => {
  const t = useTranslations("langSwitch");
  const router = useRouter();
  const { locale, locales = [], pathname, query, asPath } = router;

  function changeLocale(next: string) {
    if (next === locale) return;

    router.push({ pathname, query }, asPath, { locale: next, scroll: false });
  }

  return (
    <div
      role="group"
      className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-6 z-50 flex items-center gap-1 rounded-full border border-line-strong/60 bg-card py-1 pl-3.5 pr-1 shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
    >
      <Globe className="mr-1.5 size-4.5 text-muted" strokeWidth={1.6} aria-hidden="true" />

      {locales.map((language) => {
        const active = language === locale;

        return (
          <button
            key={language}
            type="button"
            onClick={() => changeLocale(language)}
            aria-pressed={active}
            aria-label={t(language as Lang)}
            lang={language === "pt" ? "pt-BR" : "en"}
            className={`relative isolate h-10 w-11 cursor-pointer rounded-full text-[13px] font-semibold uppercase transition-colors duration-300 ${
              active ? "text-white" : "text-muted hover:text-foreground"
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-active"
                className="absolute inset-0 -z-10 rounded-full bg-accent-strong shadow-[0_6px_18px_-6px_rgba(37,99,235,0.7)]"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            {language}
          </button>
        );
      })}
    </div>
  );
};

export default LangSwitch;