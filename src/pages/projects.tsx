import ProjectCard, { Project } from "@/components/project-card"
import { GitHubIcon } from "@/components/ui/brand-icons"
import { loadMessages } from "@/lib/messages"
import { Activity, ArrowUpRight, Cloud, Database, Flag, HeartPulse, ShieldCheck } from "lucide-react"
import { GetStaticPropsContext } from "next"
import { useTranslations } from "next-intl"
import Head from "next/head"

const PROJECTS: Project[] = [
    {
        slug: "weather-etl",
        title: "WeatherETL",
        summary: {
            pt: "ETL com dados meteorológicos de Maringá, orquestrado com Airflow e rodando em Docker.",
            en: "Weather data ETL for Maringá, Brazil, orchestrated with Airflow and running on Docker.",
        },
        status: "done",
        year: 2026,
        stack: ["Python", "Airflow", "Docker", "PostgreSQL"],
        icon: Cloud,
        repo: "https://github.com/RodriguesGS/WeatherETL",
        
    },
    {
        slug: "aipredict",
        title: "AIPredict",
        summary: {
            pt: "Modelo que prevê e classifica o status dos backups de empresas.",
            en: "Model that predicts and classifies the status of company backups.",
        },
        status: "done",
        year: 2026,
        stack: ["Python", "Scikit-learn", "Pandas"],
        icon: Activity,
        repo: "https://github.com/RodriguesGS/AIPredict",
    },
    {
        slug: "cardioml",
        title: "CardioML",
        summary: {
            pt: "Modelo que identifica a presença de doenças cardíacas em pacientes.",
            en: "Model that identifies the presence of heart disease in patients.",
        },
        status: "done",
        year: 2026,
        stack: ["Python", "MLP", "Random Forest"],
        icon: HeartPulse,
        repo: "https://github.com/RodriguesGS/CardioML",
        
    },
    {
        slug: "barometro",
        title: "Barometro",
        summary: {
            pt: "Pipeline dos dados abertos do CNPJ da Receita Federal.",
            en: "Pipeline for Brazil's open company registry (CNPJ) data.",
        },
        status: "in-progress",
        year: 2026,
        stack: ["Python", "Pandas", "Requests"],
        icon: Database,
        repo: "https://github.com/RodriguesGS/Barometro",
        
    },
]

const ProjectsPage: React.FC = ({}) => {

    const t = useTranslations("projects")

    return (
        <div>
            <Head>
                <title>{t("metaTitle")}</title>
            </Head>

            <main className="relative isolate flex-1 overflow-hidden px-4 pb-24 pt-13">
                <div
                    className="pointer-events-none absolute left-1/2 top-8 -z-10 h-125 w-225 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.10),transparent_65%)]"
                />

                <div className="mx-auto max-w-215">
                    <h1 className="text-center text-[38px] font-semibold tracking-tight">
                        {t("title")}
                    </h1>
                    <div
                        className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-linear-to-r from-transparent via-accent to-transparent"
                    />
                    <p className="mt-4.5 text-center text-muted">
                        {t("subtitle")}
                    </p>

                    <div className="mt-10 grid gap-5.5 md:grid-cols-2 ">
                        {PROJECTS.map((project, i) => (
                            <ProjectCard key={project.slug} project={project} index={i} />
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <a
                        href="https://github.com/RodriguesGS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                    >
                        <GitHubIcon className="size-4" />
                        {t("seeAll")}
                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </div>
            </main>
        </div>
    )
}

export default ProjectsPage

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return { props: { messages: await loadMessages(locale) } };
}
