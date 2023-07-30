import styles from "../styles";
import bg from "../assets/gridcard/decameron.jpg";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TypingText } from "../components/CustomTexts";

const About = () => {
  return (
    <motion.section
      variants={staggerContainer}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.25 }}
      className={`relative bg-skin-succes flex flex-col lg:gap-10 
       gap-4 mx-auto rounded-sm h-[20rem]
       overflow-hidden text-white text-xl ${styles.paddings}`}
      data-scroll-section
    >
      <img
        src={bg}
        alt="bg"
        className="inset-0 absolute h-full w-full object-cover"
      />
      <div className="inset-0 absolute  bg-slate-600 bg-opacity-70" />
      <TypingText
        title="Embrace the Magic of the Caribbean's Hidden Gem!"
        textStyles="text-white text-[18px] z-10"
      />
      <h4 className="lg:text-[40px] font-bold z-10 leading-10 ">
        Create lasting memories as you explore the vibrant markets, and
        breathtaking natural wonders of Haiti
      </h4>
      <button className=" px-4 py-2 z-10 text-skin-accent border self-start hover:scale-110  transition-all">
        Learn more
      </button>
    </motion.section>
  );
};

export default About;
