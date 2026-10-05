import type { GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { loadMessages } from "@/lib/messages";

const ServerErrorPage: React.FC = () => {
    const t = useTranslations("serverError");

    return (
        <>
            <Head>
                <title>{t("metaTitle")}</title>
                <meta name="robots" content="noindex" />
            </Head>

            <main className="relative isolate flex flex-1 items-center justify-center overflow-hidden px-4 pb-24 pt-13">
                <div className="w-full max-w-140 text-center">
                    <p className="font-mono text-sm text-accent">500</p>
                    <h1 className="mt-2 text-[38px] font-semibold tracking-tight">{t("title")}</h1>
                    <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-linear-to-r from-transparent via-accent to-transparent" />
                    <p className="mt-4 text-muted">{t("subtitle")}</p>

                    <Link
                        href="/"
                        scroll={false}
                        className="mt-8 inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-2.75 transition-colors hover:border-accent hover:text-accent"
                    >
                        <ArrowLeft className="size-4" />
                        {t("back")}
                    </Link>
                </div>
            </main>
        </>
    );
};

export default ServerErrorPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return { props: { messages: await loadMessages(locale) } };
}