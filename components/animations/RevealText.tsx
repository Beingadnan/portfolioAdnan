import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface RevealTextProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
}

const RevealText = ({ children, width = "fit-content", className = "" }: RevealTextProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000], // Using a valid cubic-bezier curve
      },
    },
  };

  return (
    <div ref={ref} style={{ width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={slideUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealText;