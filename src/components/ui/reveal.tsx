import { motion } from "motion/react";

type Props = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
};

// Sobe e aparece quando entra na tela (só na primeira vez)
const Reveal: React.FC<Props> = ({ children, delay = 0, className }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

export default Reveal;