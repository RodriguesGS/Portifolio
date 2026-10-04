import { useTranslations } from "next-intl";


const Footer: React.FC = ({}) => {
    const t = useTranslations("footer");
    const year = new Date().getFullYear();

    
    return (
        <footer className="px-4 pb-28 pt-6">
            <div className="mx-auto max-w-2xl">
                <div
                    aria-hidden="true"
                    className="h-px bg-linear-to-r from-transparent via-accent to-transparent"
                />
                <p className="mt-8 text-center text-xs text-muted">
                    © <span suppressHydrationWarning>{year}</span> RodriguesGS — {t("rights")}
                </p>
            </div>
        </footer>
    );

}

export default Footer