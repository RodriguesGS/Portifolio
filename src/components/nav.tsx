import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { Briefcase, House, MessageCircle, User } from "lucide-react";

const SECTIONS = [
  { href: "/", key: "home", icon: House },
  { href: "/projects", key: "projects", icon: Briefcase },
  { href: "/about", key: "about", icon: User },
  { href: "/contact", key: "contact", icon: MessageCircle },
] as const;

function isSectionActive(pathname: string, href: string) {
  return pathname === href ||
    (href !== "/" && pathname.startsWith(`${href}/`));
}

const Nav: React.FC = ({}) => {
  const t = useTranslations("nav");
  const { pathname } = useRouter();

  return (
    <header className="px-4 pt-10">
      <nav aria-label={t("label")} className="mx-auto max-w-120">
        <ul className="flex items-center justify-between rounded-2xl border border-line bg-card px-[clamp(12px,5vw,44px)] py-3">
          {SECTIONS.map(({ href, key, icon: Icon }) => {
            const active = isSectionActive(pathname, href);
            const label = t(key);

            return (
              <li key={href} className="group relative">
                <a
                  href={href}
                  aria-label={label}
                  aria-current={active ? "page" : undefined}
                  className={`flex size-12 items-center justify-center rounded-xl transition-colors ${
                    active
                      ? "bg-accent-strong text-white"
                      : "text-muted hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  <Icon className="size-5.5" strokeWidth={1.5} aria-hidden="true" />
                </a>

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-line bg-card-deep px-2 py-1 text-xs text-foreground opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100"
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Nav