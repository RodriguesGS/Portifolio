import type { GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { loadMessages } from "@/lib/messages";

const NotFoundPage: React.FC = () => {
    const t = useTranslations("notFound");
    const { asPath } = useRouter();
    const [path, setPath] = useState("");

    useEffect(() => {
        setPath(asPath.split(/[?#]/)[0]);
    }, [asPath]);

    return (
        <>
            <Head>
                <title>{t("metaTitle")}</title>
                <meta name="robots" content="noindex" />
            </Head>

            <main className="relative isolate flex flex-1 items-center justify-center overflow-hidden px-4 pb-24 pt-13">
                <div className="w-full max-w-140 text-center">
                    <p className="font-mono text-sm text-accent">404</p>
                    <h1 className="mt-2 text-[38px] font-semibold tracking-tight">{t("title")}</h1>
                    <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-linear-to-r from-transparent via-accent to-transparent" />
                    <p className="mt-4 text-muted">{t("subtitle")}</p>

                    <section className="mt-8 overflow-hidden rounded-[14px] border border-line bg-card-deep text-left">
                        <div className="flex items-center gap-2 border-b border-line px-4 py-3 font-mono text-[13px] text-muted">
                            <span className="size-2.75 rounded-full bg-[#FF5F57]" />
                            <span className="size-2.75 rounded-full bg-[#FEBC2E]" />
                            <span className="size-2.75 rounded-full bg-[#28C840]" />
                            <span className="ml-2">psql — portfolio</span>
                        </div>

                        <div className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-[1.9] text-[#939AB7]">
                            <p>
                                <span className="text-[#C6A0F6]">SELECT</span> * <span className="text-[#C6A0F6]">FROM</span>{" "}
                                <span className="text-[#CAD3F5]">pages</span>
                            </p>
                            <p className="break-all">
                                <span className="text-[#C6A0F6]">WHERE</span> <span className="text-[#CAD3F5]">path</span>{" "}
                                <span className="text-[#91D7E3]">=</span> <span className="text-[#A6DA95]">'{path}'</span>;
                            </p>
                            <p className="mt-2 text-[#ED8796]">(0 rows)</p>
                        </div>
                    </section>

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

export default NotFoundPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return { props: { messages: await loadMessages(locale) } };
}