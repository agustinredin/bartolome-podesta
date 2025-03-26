// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const PageTransition = ({ children }) => {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.2
      }}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
}

export default PageTransition