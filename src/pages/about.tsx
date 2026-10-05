import type { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { BriefcaseBusiness, Download, GraduationCap, Hammer, Target, type LucideIcon } from "lucide-react";
import Skills from "@/components/skills";
import Reveal from "@/components/ui/reveal";
import { loadMessages } from "@/lib/messages";

const HIGHLIGHTS: { key: string; icon: LucideIcon }[] = [
    { key: "focus", icon: Target },
    { key: "building", icon: Hammer },
    { key: "experience", icon: BriefcaseBusiness },
    { key: "education", icon: GraduationCap },
];

const README_STACK = ["Python", "Airflow", "PostgreSQL", "AWS"];

const AboutPage: React.FC = () => {
    const t = useTranslations("about");
    const locale = useLocale();

    const readme: { key: string; value: string | string[] }[] = [
        { key: "name", value: "Gabriel Rodrigues" },
        { key: "focus", value: t("readme.focus") },
        { key: "stack", value: README_STACK },
        { key: "learning", value: t("readme.learning") },
        { key: "goal", value: t("readme.goal") },
    ];

    return (
        <>
            <Head>
                <title>{t("metaTitle")}</title>
                <meta name="description" content={t("metaDescription")} />
            </Head>

            <main className="relative isolate flex-1 overflow-hidden px-4 pb-24 pt-13">
                <div className="mx-auto max-w-180">
                    <Reveal>
                        <h1 className="text-center text-[38px] font-semibold tracking-tight">{t("title")}</h1>
                    </Reveal>
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-linear-to-r from-transparent via-accent to-transparent"
                    />

                    <Reveal delay={0.1}>
                        <section className="mt-10 overflow-hidden rounded-[14px] border border-line bg-card-deep">
                            <div className="flex items-center gap-2 border-b border-line px-4 py-3 font-mono text-[13px] text-muted">
                                <span className="size-2.75 rounded-full bg-[#FF5F57]" />
                                <span className="size-2.75 rounded-full bg-[#FEBC2E]" />
                                <span className="size-2.75 rounded-full bg-[#28C840]" />
                                <span className="ml-2">README.md — Gabriel Rodrigues</span>
                            </div>

                            <div className="overflow-x-auto px-6 py-5.5 font-mono text-sm leading-[1.9] text-[#939AB7]">
                                <motion.p
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                >
                                    # Gabriel Rodrigues - Data Engineer
                                </motion.p>
                                {readme.map((line, i) => (
                                    <motion.p
                                        key={line.key}
                                        className="whitespace-pre"
                                        initial={{ opacity: 0, x: -6 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.38 + i * 0.08 }}
                                    >
                                        <span className="text-[#8AADF4]">{line.key.padEnd(8)}</span>
                                        <span className="text-[#91D7E3]"> = </span>
                                        {Array.isArray(line.value) ? (
                                            <>
                                                [
                                                {line.value.map((item, j) => (
                                                    <span key={item}>
                                                        {j > 0 && ", "}
                                                        <span className="text-[#A6DA95]">"{item}"</span>
                                                    </span>
                                                ))}
                                                ]
                                            </>
                                        ) : (
                                            <span className="text-[#A6DA95]">"{line.value}"</span>
                                        )}
                                    </motion.p>
                                ))}
                            </div>
                        </section>
                    </Reveal>

                    <div className="mt-7 grid gap-3.5 sm:grid-cols-2">
                        {HIGHLIGHTS.map(({ key, icon: Icon }, i) => (
                            <Reveal key={key} delay={0.2 + i * 0.06} className="h-full">
                                <div className="flex h-full gap-3.5 rounded-xl border border-line bg-card p-5">
                                    <Icon className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.7} />
                                    <div>
                                        <p className="font-mono text-xs text-accent">{t(`highlights.${key}.label`)}</p>
                                        <p className="mt-1.5 text-sm leading-relaxed text-[#C4C4C4]">
                                            {t.rich(`highlights.${key}.text`, {
                                                b: (chunks) => <strong className="font-semibold text-foreground">{chunks}</strong>,
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Skills />

                    <Reveal className="mt-12 flex justify-center">
                        <a
                            href={`/cv/cv-${locale}.pdf`}
                            download
                            className="inline-flex items-center gap-2.5 rounded-lg border border-line-strong px-5 py-2.75 transition-colors hover:border-accent hover:text-accent"
                        >
                            {t("downloadCv")}
                            <Download className="size-4" />
                        </a>
                    </Reveal>
                </div>
            </main>
        </>
    );
};

export default AboutPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return { props: { messages: await loadMessages(locale) } };
}