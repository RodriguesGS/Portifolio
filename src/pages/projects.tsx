import ProjectCard, { Project } from "@/components/project-card"
import { loadMessages } from "@/lib/messages"
import { Activity, Cloud, Database, Flag, ShieldCheck } from "lucide-react"
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
        repo: "", // cole a URL do repositório
        
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
        repo: "", // cole a URL do repositório
    },
    {
        slug: "bpsentry",
        title: "BPSentry",
        summary: {
            pt: "Monitoramento de backups com pipeline ETL e arquitetura Medallion.",
            en: "Backup monitoring with an ETL pipeline and Medallion architecture.",
        },
        status: "in-progress",
        year: 2026,
        stack: ["Python", "PostgreSQL", "Pandas"],
        icon: ShieldCheck,
        repo: "", // cole a URL do repositório
        
    },
    {
        slug: "panorama",
        title: "Panorama",
        summary: {
            pt: "Pipeline dos dados abertos do CNPJ da Receita Federal.",
            en: "Pipeline for Brazil's open company registry (CNPJ) data.",
        },
        status: "in-progress",
        year: 2026,
        stack: ["Python"],
        icon: Database,
        repo: "https://github.com/RodriguesGS/panorama-cnpj",
        
    },
    {
        slug: "f1lake",
        title: "F1Lake",
        summary: {
            pt: "Sistema para predição do campeão da Fórmula 1.",
            en: "System to predict the Formula 1 champion.",
        },
        status: "in-progress",
        year: 2026,
        stack: ["Python", "AWS", "Streamlit"],
        icon: Flag,
        repo: "https://github.com/RodriguesGS/F1Lake",
    },
]

const ProjectsPage: React.FC = ({}) => {

    const t = useTranslations("projects")

    return (
        <div>
            <Head>
                <title>{t("metaTitle")}</title>
                <meta name="description" content={t("subtitle")} />
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

                    <div className="mt-10 grid gap-5.5 md:grid-cols-2">
                        {PROJECTS.map((project, i) => (
                            <ProjectCard key={project.slug} project={project} index={i} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProjectsPage

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return { props: { messages: await loadMessages(locale) } };
}
