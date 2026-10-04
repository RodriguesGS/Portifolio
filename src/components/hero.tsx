import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand-icons";
import { ArrowRight, Download, Icon, Mail } from "lucide-react";
import Link from "next/link";

const SOCIALS = [
    { site: "https://github.com/RodriguesGS", label: "Github", icon: GitHubIcon, external: true },
    { site: "https://www.linkedin.com/in/gabriel-soares1402", label: "LinkedIn", icon: LinkedInIcon, external: true },
    { site: "mailto:rodriguesgasoares@gmail.com", label: "Email", icon: Mail, external: true },
]

const Hero: React.FC = ({}) => {

    const t = useTranslations("home")
    const locale = useLocale()
    const cvHref = locale === "en" ? "/cv/cv-en.pdf" : "/cv/cv-pt.pdf"
    
    return (
        <section className="relative isolate px-4 pb-24 pt-20 text-center">
            <div className="mx-auto max-w-2xl">
                <div className={'group relative mx-auto size-28'}>
                    <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-225 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(91,156,246,0.14)_0%,rgba(255,255,255,0.05)_28%,transparent_60%)] motion-safe:animate-glow-in motion-safe:group-hover:animate-glow-pull"/>

                    <Image
                        src={"/images/foto.jpeg"}
                        alt={t("photoAlt")}
                        width={150}
                        height={150}
                        className="size-28 rounded-full object-cover transition-[box-shadow,scale] duration-300 ease-out group-hover:scale-[1.04] group-hover:shadow-[0_0_28px_6px_rgba(91,156,246,0.45)] group-hover:duration-500 group-hover:delay-450"
                    />
                </div>

                <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Gabriel Rodrigues
                </h1>
                <p className="mt-2 text-lg font-medium tracking-[.12rem] text-accent">
                    {t("role")}
                </p>
                <p className="mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-muted">
                    {t("tagline")}
                    
                </p>
            </div>

            <ul className="mt-7 flex justify-center gap-3">
                {SOCIALS.map(({site, label, icon: Icon, external}) => (
                    <li key={label}>
                        <a 
                            href={site}
                            title={label}
                            {...(external ? {target: "_blank", rel: "noopener noreferrer"} : {})}
                            className="flex size-12 items-center justify-center rounded-xl text-muted transition-[color,translate] hover:-translate-y-0.5 hover:text-foreground"
                        >
                            <Icon className="size-7" strokeWidth={1.6}/>
                        </a>
                    </li>
                ))}
            </ul>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
                <a href={cvHref} download className="group/btn inline-flex items-center gap-2.5 rounded-lg border border-line-strong px-5 py-2.5 transition-colors hover:border-foreground">
                    {t("downloadCv")}
                    <Download
                        className="size-4 transition-transform group-hover/btn:translate-y-0.5"
                    />
                </a>

                <Link href="/projects" className="group/btn inline-flex items-center gap-2.5 rounded-lg bg-accent-strong px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90">
                    {t("seeProjects")}
                    <ArrowRight
                        className="size-4 transition-transform group-hover/btn:translate-x-0.5"
                    />
                </Link>
            </div>
        </section>
    )
}

export default Hero