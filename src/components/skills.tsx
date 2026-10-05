import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "@/components/ui/reveal";

type Tool = {
    name: string;
    icon: string;
    color: string;
};

const TOOLS: Tool[] = [
    { name: "Python", icon: "/icons/python.svg", color: "linear-gradient(90deg, #3776AB, #FFD43B)" },
    { name: "Pandas", icon: "/icons/pandas.svg", color: "linear-gradient(90deg, #E70488, #FFCA00)" },
    { name: "Airflow", icon: "/icons/airflow.svg", color: "linear-gradient(90deg, #017CEE, #00AD46)" },
    { name: "dbt", icon: "/icons/dbt.svg", color: "linear-gradient(90deg, #FF694B, #FF9A85)" },
    { name: "Databricks", icon: "/icons/databricks.svg", color: "linear-gradient(90deg, #FF3621, #FF7A5C)" },
    { name: "Linux", icon: "/icons/linux.svg", color: "linear-gradient(90deg, #FCC624, #FFE38A)" },
    { name: "Git", icon: "/icons/git.svg", color: "linear-gradient(90deg, #F05032, #F78C6C)" },
    { name: "Docker", icon: "/icons/docker.svg", color: "linear-gradient(90deg, #1D63ED, #2496ED)" },
    { name: "AWS", icon: "/icons/aws.svg", color: "linear-gradient(90deg, #FF9900, #FFC266)" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg", color: "linear-gradient(90deg, #4A86C5, #8DB6E3)" },
];

const SkillTile: React.FC<{ tool: Tool }> = ({ tool }) => (
    <div className="group relative flex size-22 items-center justify-center overflow-hidden rounded-[14px] border border-line bg-linear-to-b from-[#1A1A1A] to-[#151515] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-[border-color,box-shadow] duration-350 hover:border-[#2F3B52] hover:shadow-[0_18px_40px_-18px_rgba(37,99,235,0.45)]">
        <span
            className="absolute left-1/2 top-0 h-0.5 w-0 transition-all duration-400 group-hover:left-0 group-hover:w-full [@media(hover:none)]:left-0 [@media(hover:none)]:w-full"
            style={{ backgroundImage: tool.color }}
        />
        <Image
            src={tool.icon}
            alt={tool.name}
            width={36}
            height={36}
            className="size-9 transition-transform duration-350 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-2.5 [@media(hover:none)]:-translate-y-2.5"
        />
        <span
            className="absolute inset-x-0 bottom-2.5 translate-y-1.5 bg-clip-text text-center text-[11.5px] font-semibold text-transparent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100"
            style={{ backgroundImage: tool.color }}
        >
            {tool.name}
        </span>
    </div>
);

const Skills: React.FC = () => {
    const t = useTranslations("about.skills");

    return (
        <section id="skills" className="mt-14 scroll-mt-8">
            <Reveal>
                <h2 className="text-2xl font-semibold text-center">{t("title")}</h2>
                <p className="mt-1.5 text-sm text-muted text-center">{t("subtitle")}</p>
            </Reveal>

            <div className="relative mt-9 sm:mx-auto sm:w-fit">
                <div className="pointer-events-none absolute inset-0 hidden sm:block">
                    <div className="absolute inset-x-11 top-11 border-t border-dashed border-line-strong">
                        <span className="absolute -top-0.75 -ml-0.75 size-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(91,156,246,0.6)] motion-safe:animate-flow-1" />
                    </div>
                    <div className="absolute right-11 top-11 h-28 border-r border-dashed border-line-strong">
                        <span className="absolute -left-0.5 -mt-0.75 size-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(91,156,246,0.6)] motion-safe:animate-flow-2" />
                    </div>
                    <div className="absolute inset-x-11 top-39 border-t border-dashed border-line-strong">
                        <span className="absolute -top-0.75 -ml-0.75 size-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(91,156,246,0.6)] motion-safe:animate-flow-3" />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3 sm:grid sm:grid-cols-[repeat(5,5.5rem)] sm:gap-x-8 sm:gap-y-6">
                    {TOOLS.map((tool, i) => (
                        <Reveal key={tool.name} delay={0.05 + i * 0.04}>
                            <SkillTile tool={tool} />
                        </Reveal>
                    ))}
                </div>
            </div>

            <Reveal delay={0.3}>
                <p className="mt-8 text-center font-mono text-xs text-[#5A5A5A]">{t("builtWith")}</p>
            </Reveal>
        </section>
    );
};

export default Skills;