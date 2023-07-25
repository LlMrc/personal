import styles from "../styles";
import restaurent from "../assets/gridcard/restaurant.jpg";
import carnival from "../assets/carnival.jpeg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fadeIn, staggerContainer } from "../utils/motion";

export default function Explorer() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation1 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          delay: 0.5,
          duration: 1.5,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "100vw", opacity: 0 });
    }
  }, [animation, inView]);

  useEffect(() => {
    if (inView) {
      animation1.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          delay: 1,
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation1.start({ x: "100vw", opacity: 0 });
    }
  }, [animation1, inView]);
  return (
    <>
      <div data-scroll-section className=" py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.interWidth} ${styles.yPaddings}  gap-4  mx-auto flex items-center  flex-col md:flex-row`}
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-xl md:w-[90%] flex flex-col items-center gap-2 m-10"
          >
            <h4 className="font-bold text-center uppercase "> About haitian cuisine </h4>
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

        <div className="sm:hidden md:block h-20" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.interWidth} ${styles.yPaddings} gap-4 p-2 mx-auto flex items-center  flex-col md:flex-row`}
        >
          <div className="">
            <img
              src={carnival}
              alt="carnival"
              className="object-contain h-full w-full rounded-md"
            />
          </div>
          <div ref={ref} className="uppercase text-2xl md:w-[70%]  m-10 ">
            <motion.span className="flex justify-start" animate={animation}>
              <h6 className="bg-skin-secondary text-skin-accent  px-3">
                haitian
              </h6>
              <h6 className="bg-skin-accent  px-2  text-secondary">culture</h6>
            </motion.span>
            {/* <Link to={""}><h6 className="underline decoration-accent text-xl py-2">learn more</h6></Link> */}
            <div className="flex flex-col items-start  md:mx-0 cursor-pointer   mt-6">
              <motion.h6
                animate={animation1}
                className="bg-skin-secondary text-skin-accent m-2 px-2 "
              >
                <NavLink
                  about="_blank"
                  to={
                    "https://www.tripadvisor.com/SmartDeals-g1025359-Ile_a_Vache_Sud_Department_Haiti-Hotel-Deals.html"
                  }
                >
                  beach
                </NavLink>
              </motion.h6>
              <motion.h6
                animate={animation1}
                className="bg-skin-secondary text-skin-accent  m-2 px-2"
              >
                <NavLink
                  about="_blank"
                  to={"https://www.alterpresse.org/spip.php?article15167"}
                >
                  Fashion
                </NavLink>
              </motion.h6>
              <motion.h6
                animate={animation1}
                className="bg-skin-secondary text-skin-accent m-2 px-2 flex"
              >
                <NavLink about="_blank" to={"https://nhhaitielrancho.com/"}>
                  Festivale
                </NavLink>
              </motion.h6>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
