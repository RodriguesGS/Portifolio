import { ArrowUpRight, LucideIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { GitHubIcon } from "./ui/brand-icons";

export type Project = {
    slug: string;
    title: string;
    summary: { pt: string; en: string };
    status: "done" | "in-progress";
    year: number;
    stack: string[];
    icon: LucideIcon;
    repo: string;        
}

const STATUS_STYLES: Record<Project["status"], { pill: string; dot: string }> = {
    done: { 
        pill: "bg-success-bg text-success", 
        dot: "bg-success" 
    },
    "in-progress": { 
        pill: "bg-warning-bg text-warning", 
        dot: "bg-warning" 
    },
};

type Props = {
    project: Project
    index: number
}

const ProjectCard: React.FC<Props> = ({ project, index }) => {
    
    const t = useTranslations("projects")
    const locale = useLocale() as keyof Project["summary"]

    const Icon = project.icon
    const badge = STATUS_STYLES[project.status]
    const number = String(index + 1).padStart(2, "0");
    const repoPath = project.repo.replace(/^https?:\/\/(www\.)?github\.com\//, "");

    return (
        <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-full flex flex-col gap-4 overflow-hidden rounded-[14px] border border-line bg-linear-to-b from-[#1A1A1A] to-[#151515] p-6 pl-6.5 pb-4.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-[translate,border-color,box-shadow] duration-350 ease-[cubic-bezier(.2,.8,.2,1)] hover:border-[#2F3B52] hover:shadow-[0_18px_40px_-18px_rgba(37,99,235,0.55)] motion-safe:hover:-translate-y-1"
        >   

            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_circle_at_0%_0%,rgba(91,156,246,0.13),transparent_45%)] opacity-0 transition-opacity duration-450 group-hover:opacity-100" />

            <span className="absolute bottom-[28%] left-0 top-[28%] w-0.5 rounded-full bg-linear-to-b from-transparent via-accent to-transparent opacity-75 transition-all duration-450 group-hover:bottom-0 group-hover:top-0 group-hover:opacity-100" />

            <div className="relative flex items-start gap-3.5">
                <span 
                    className="flex size-11 shrink-0 items-center justify-center rounded-[11px] border border-[#2C2C2C] bg-[#1F1F1F] text-muted transition-colors duration-300 group-hover:border-accent/35 group-hover:bg-accent/15 group-hover:text-[#8AB8FF]"
                >
                    <Icon className="size-5" strokeWidth={1.6} />
                </span> 

                <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#8AB8FF]">
                        {project.title}
                    </h2>

                    <div className="mt-1.5 flex items-center gap-2.5 text-xs text-muted">
                        <span className={`inline-flex items-center gap-1.5 rounded-full py-0.5 pl-2 pr-2.5 text-[11px] font-medium ${badge.pill}`}>
                            <span className={`size-1.5 rounded-full ${badge.dot}`} />
                            {t(`status.${project.status}`)}
                        </span>
                        <span>{project.year}</span>
                    </div>
                </div>

                 <span className="font-mono text-xs text-line-strong transition-colors duration-300 group-hover:text-accent">
                    {number}
                </span>
            </div>

            <p className="relative text-[15px] leading-relaxed text-muted">
                {project.summary[locale]}
            </p>

            <ul className="relative flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                    <li
                        key={tech}
                        className="rounded-md border border-line bg-card-deep px-2 py-0.5 font-mono text-[11.5px] text-[#B5B5B5] transition-colors duration-300 group-hover:border-[#34343A] group-hover:text-[#D6D6D6]"
                    >
                        {tech}
                    </li>
                ))}
            </ul>

            <div className="relative mt-auto flex items-center justify-between gap-3 border-t border-[#232323] pt-3.5">
                <span className="flex min-w-0 items-center gap-2 font-mono text-xs text-muted">
                    <GitHubIcon className="size-4 shrink-0" />
                    <span className="truncate">{repoPath}</span>
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-muted transition-[translate,color] duration-300 group-hover:translate-x-0.75 group-hover:-translate-y-0.75 group-hover:text-[#8AB8FF]" />
            </div>
        </a>
    )

}

export default ProjectCard