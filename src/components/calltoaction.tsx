import styles from "../styles";
import child from "../assets/child.png";
import {  slideIn, staggerContainer } from "../utils/motion";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";

const CallToAction = () => {
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
    <div className={`bg-white ${styles.xPaddings} `}>
     <p className=" w-[50%] py-20 mx-auto">
     Get ready to embark on the adventure of a lifetime! Let us take you to distant horizons, from idyllic beaches to majestic peaks, historic cities to mysterious deserts. Our team of travel experts is ready to turn your dreams into reality. Explore our selection of exotic destinations, discover our exclusive offers, and book your next getaway now. Adventure awaits, it's time to go! Click here to start your journey into the unknown.
     </p>
    <motion.div
      data-scroll-section
      variants={staggerContainer}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.25 }}
      className={`flex flex-col justify-end items-center  md:flex-row py-24`}
    >
          <motion.div variants={slideIn("left", "spring", 0.5, 1)} className=" ">
        <img
          src={child}
          alt="restaurent"
          className="object-contain h-full w-full"
        />
      </motion.div>
      <div ref={ref} className="uppercase text-2xl md:w-[30%]  m-10 ">
        <motion.span className="flex " animate={animation}>
          <h6 className="bg-skin-secondary text-skin-accent  px-3">haitian</h6>
          <h6 className="bg-skin-accent  px-2  text-secondary">culture</h6>
        </motion.span>

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
  );
};

export default CallToAction;
