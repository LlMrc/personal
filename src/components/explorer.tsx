import styles from "../styles";
import restaurent from "../assets/gridcard/restaurant.jpg";
import carnival from "../assets/carnival.jpeg";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "../utils/motion";

export default function Explorer() {
  return (
    <>
      <div data-scroll-section className=" py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.interWidth} ${styles.yPaddings}  gap-2 mx-auto flex items-center  flex-col md:flex-row`}
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-xl md:w-[90%] flex flex-col items-center gap-2 m-10"
          >
            <h4 className="font-bold text-center uppercase ">
              {" "}
              About cuisine{" "}
            </h4>
            <p className="">
              Haitian cuisine is a rich and flavorful culinary tradition that
              reflects the country's cultural diversity and history. It is a
              fusion of African, indigenous Taíno, French, and Spanish
              influences, resulting in a unique blend of flavors and cooking
              techniques. Haitian cuisine primarily utilizes locally available
              ingredients such as rice, beans, tropical fruits, root vegetables,
              and various meats and seafood.
            </p>
            <button className="rounded-full px-4 py-2 bg-skin-secondary hover:bg-skin-primary text-skin-accent  text-lg md:self-end">
              Learn more
            </button>
          </motion.div>
          <div>
            <img
              src={restaurent}
              alt="restaurent"
              className="object-contain h-full w-full rounded-md"
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.interWidth} ${styles.yPaddings} py-20 gap-2 mx-auto flex items-center  flex-col md:flex-row`}
        >
          <div>
            <img
              src={carnival}
              alt="restaurent"
              className="object-contain h-full w-full rounded-md"
            />
          </div>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-xl md:w-[90%] flex flex-col items-start gap-2 m-10"
          >
            <h4 className="font-bold  uppercase "> About Culture </h4>
            <p className="">
              Haitian culture is rich and diverse, with a unique blend of
              African, European, and indigenous influences. It has been shaped
              by its history of colonization, slavery, and struggles for
              independence. Despite facing various challenges throughout its
              history, Haitian culture remains resilient and continues to
              evolve, carrying on its unique traditions and customs from one
              generation to the next.
            </p>
            <button className="rounded-full px-4 py-2 bg-skin-secondary hover:bg-skin-primary text-skin-accent  text-lg ">
              Learn more
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
