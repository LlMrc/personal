import styles from "../styles";
import restaurent from "../assets/gridcard/restaurant.jpg";
import carnival from "../assets/carnival.jpeg";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "../utils/motion";

export default function Explorer() {
  return (
    <>
      <div className=" m-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.interWidth} ${styles.yPaddings} my-44 gap-4 mx-auto flex items-center  flex-col md:flex-row`}
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-xl md:w-[90%] pr-8 flex flex-col items-center gap-4 md:mx-2 "
          >
            <h4 className="font-bold text-center uppercase ">

              Cuisine
            </h4>
            <p className="text-sm">
              Haitian cuisine is a rich and flavorful culinary tradition that
              reflects the country's cultural diversity and history. It is a
              fusion of African, indigenous Taíno, French, and Spanish
              influences, resulting in a unique blend of flavors and cooking
              techniques. Haitian cuisine primarily utilizes locally available
              ingredients such as rice, beans, tropical fruits, root vegetables,
              and various meats and seafood.
            </p>
            <button className="rounded-full px-4 py-2 bg-skin-secondary hover:bg-skin-primary text-skin-accent  text-sm md:self-start">
              Learn more
            </button>
          </motion.div>
          <div>
            <img
              src={restaurent}
              alt="restaurent"
              className="object-contain h-full w-full  rounded-md"
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.interWidth} ${styles.yPaddings} py-44 gap-4 mx-auto flex items-center  flex-col-reverse md:flex-row`}
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
            className="text-xl pl-8 md:w-[90%] flex flex-col items-start gap-4 md:mx-2"
          >
            <h4 className="font-bold  uppercase "> Culture </h4>
            <p className="text-sm ">
              Haitian culture is rich and diverse, with a unique blend of
              African, European, and indigenous influences. It has been shaped
              by its history of colonization, slavery, and struggles for
              independence. Despite facing various challenges throughout its
              history, Haitian culture remains resilient and continues to
              evolve, carrying on its unique traditions and customs from one
              generation to the next.
            </p>
            <button className="rounded-full px-4 py-2 bg-skin-secondary hover:bg-skin-primary text-skin-accent  text-sm ">
              Learn more
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
