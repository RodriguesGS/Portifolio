import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { Globe } from "lucide-react";

type Lang = "pt" | "en";

const LangSwitch: React.FC = ({}) => {
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
      className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-6 z-50 flex items-center gap-1 rounded-full border border-line-strong/60 bg-card py-1 pl-3.5 pr-1 shadow-[0_8px_24px_rgba(0,0,0,0.45)] focus:outline-none focus-visible:outline-2"
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
            className={`h-10 w-11 cursor-pointer rounded-full text-[13px] font-semibold uppercase transition-colors ${
              active
                ? "bg-accent-strong text-white"
                : "text-muted hover:text-foreground"
            }`}
          >
            {language}
          </button>
        );
      })}
    </div>
  );
}


export default LangSwitch
