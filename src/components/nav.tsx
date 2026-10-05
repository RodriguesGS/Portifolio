import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Briefcase, House, MessageCircle, User } from "lucide-react";

const SECTIONS = [
    { href: "/", key: "home", icon: House },
    { href: "/projects", key: "projects", icon: Briefcase },
    { href: "/about", key: "about", icon: User },
    { href: "/contact", key: "contact", icon: MessageCircle },
] as const;

function isSectionActive(pathname: string, href: string) {
    return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}

const Nav: React.FC = () => {
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
                                <Link
                                    href={href}
                                    scroll={false}
                                    aria-label={label}
                                    aria-current={active ? "page" : undefined}
                                    className={`relative isolate flex size-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                                        active ? "text-white" : "text-muted hover:bg-white/5 hover:text-foreground"
                                    }`}
                                >
                                    {active && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="absolute inset-0 -z-10 rounded-xl bg-accent-strong shadow-[0_8px_24px_-8px_rgba(37,99,235,0.7)]"
                                            transition={{ type: "spring", stiffness: 420, damping: 34 }}
                                        />
                                    )}
                                    <Icon className="size-5.5" strokeWidth={1.5} />
                                </Link>

                                <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-line bg-card-deep px-2 py-1 text-xs text-foreground opacity-0 transition-[opacity,translate] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-has-focus-visible:translate-y-0 group-has-focus-visible:opacity-100">
                                    {label}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;