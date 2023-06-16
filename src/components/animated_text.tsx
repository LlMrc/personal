import { motion } from "framer-motion";

type Props = {
  text: string;
};

const AnimatedText = (text: Props) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  // const words = text.text.split("");
  const words = Array.from(text.text);

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      {words.map((item, index) => (
        <motion.span variants={child} key={index}>
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
