type Props = React.SVGProps<SVGSVGElement>;

// Logo "G de pipeline". Usa currentColor no traço; o nó pode ter outra cor via dotClassName.
const Logo: React.FC<Props & { dotClassName?: string }> = ({ dotClassName = "fill-current", ...props }) => (
    <svg viewBox="14 14 72 72" fill="none" aria-hidden="true" {...props}>
        <path d="M72.98 30.72A30 30 0 1 0 80 50" stroke="currentColor" strokeWidth={9} strokeLinecap="round" />
        <circle cx="68" cy="50" r="3.6" className={dotClassName} />
        <circle cx="54" cy="50" r="7.5" className={dotClassName} />
    </svg>
);

export default Logo;
