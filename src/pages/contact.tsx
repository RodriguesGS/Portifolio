import type { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, Check, Copy, Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand-icons";
import { loadMessages } from "@/lib/messages";

const CHANNELS: { key: string; href: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { key: "email", href: "mailto:contato@rodriguesgs.com", icon: Mail },
    { key: "linkedin", href: "https://www.linkedin.com/in/gabriel-soares1402", icon: LinkedInIcon },
    { key: "github", href: "https://github.com/RodriguesGS", icon: GitHubIcon },
];

const ContactPage: React.FC = () => {

    const t = useTranslations("contact");
    const locale = useLocale();
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        await navigator.clipboard.writeText("contato@rodriguesgs.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <Head>
                <title>{t("metaTitle")}</title>
                <meta name="description" content={t("metaDescription")} />
            </Head>

            <main className="relative isolate flex-1 overflow-hidden px-4 pb-24 pt-13">
                <div className="mx-auto max-w-180">
                    <h1 className="text-center text-[38px] font-semibold tracking-tight">{t("title")}</h1>
                    <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-linear-to-r from-transparent via-accent to-transparent" />

                    <p className="mx-auto mt-5 max-w-110 text-center leading-relaxed text-muted">
                        {t.rich("intro", {
                            hl: (chunks) => <span className="text-accent">{chunks}</span>,
                        })}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                        <span className="rounded-lg border border-line bg-card-deep px-4 py-2 font-mono text-sm">contato@rodriguesgs.com</span>
                        <button
                            type="button"
                            onClick={copyEmail}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-foreground cursor-pointer"
                        >
                            {copied ? <Check className="size-4 text-success" /> : <Copy className="size-4" />}
                            {copied ? t("copied") : t("copy")}
                        </button>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-3">
                        {CHANNELS.map(({ key, href, icon: Icon }) => {
                            const external = href.startsWith("http");

                            return (
                                <a
                                    key={key}
                                    href={href}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noopener noreferrer" : undefined}
                                    className="group relative flex flex-col overflow-hidden rounded-[14px] border border-line bg-linear-to-b from-[#1A1A1A] to-[#151515] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-[translate,border-color,box-shadow] duration-350 ease-[cubic-bezier(.2,.8,.2,1)] hover:border-[#2F3B52] hover:shadow-[0_18px_40px_-18px_rgba(37,99,235,0.55)] motion-safe:hover:-translate-y-1"
                                >
                                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(360px_circle_at_0%_0%,rgba(91,156,246,0.13),transparent_50%)] opacity-0 transition-opacity duration-450 group-hover:opacity-100" />

                                    <div className="relative flex items-start justify-between">
                                        <span className="flex size-11 items-center justify-center rounded-[11px] border border-[#2C2C2C] bg-[#1F1F1F] text-muted transition-colors duration-300 group-hover:border-accent/35 group-hover:bg-accent/15 group-hover:text-[#8AB8FF]">
                                            <Icon className="size-5" />
                                        </span>
                                        <ArrowUpRight className="size-4 text-muted transition-[translate,color] duration-300 group-hover:translate-x-0.75 group-hover:-translate-y-0.75 group-hover:text-[#8AB8FF]" />
                                    </div>

                                    <h2 className="relative mt-4 text-lg font-semibold transition-colors duration-300 group-hover:text-[#8AB8FF]">
                                        {t(`channels.${key}.title`)}
                                    </h2>
                                    <p className="relative mt-1.5 text-sm leading-relaxed text-muted">{t(`channels.${key}.text`)}</p>

                                    <span className="relative mt-5 h-px w-8 bg-line-strong transition-all duration-350 group-hover:w-16 group-hover:bg-accent" />
                                </a>
                            );
                        })}
                    </div>

                    <p className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted">
                        {t("cvPrompt")}
                        <a
                            href={`/cv/cv-${locale}.pdf`}
                            download
                            className="inline-flex items-center gap-1.5 text-foreground underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                        >
                            {t("downloadCv")}
                            <Download className="size-3.5" />
                        </a>
                    </p>
                </div>
            </main>
        </>
    );
};

export default ContactPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return { props: { messages: await loadMessages(locale) } };
}