import restaurant from "../assets/gridcard/restaurant.jpg";

import dish1 from "../assets/3.jpg";
import dish2 from "../assets/4.jpg"
import dish3 from "../assets/5.jpg";
import dish4 from "../assets/rice.png";
import dish5 from "../assets/1.png";
import styles from '../styles';
import dish6 from "../assets/2.png";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "../utils/motion";






const Banner = () => {
  return (
    <motion.div
    variants={staggerContainer}
    whileInView="show"
    initial="hidden"
    viewport={{ once: false, amount: 0.25 }}
   
     className={`${styles.innerWidth} md:mt-30 mt-10 text-center`}>
      <motion.h3
        variants={zoomIn(0.4, 1)}
        whileInView="show"
        initial="hidden"
        viewport={{ once: false, amount: 0.25 }}
       className="px-4">
            Discover the Authenticity and Enchanting Spices of Haiti 😍😋
      
      </motion.h3>
      <div className=" m-2 flex flex-col bg-slate-200 rounded md:flex-row ">
        <section  className=" h-52 items-center flex gap-2 overflow-x-scroll md:w-3/4  p-2 justify-around">
     
          <img
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="4"
            className="h-40 w-40 m-2 rounded-full bg-slate-400"
            src={dish4}
            alt="haitian food"
          />
          <img
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="4"
            className="h-40 w-40 m-2 rounded-full bg-slate-400"
            src={dish5}
            alt="haitian food"
          />   
            <img
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="4"
          className="h-40 w-40 m-2 rounded-full bg-slate-400"
          src={dish1}
          alt="haitian food"
        />
          
          <img
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="4"
            className="h-40 w-40 m-2 rounded-full bg-slate-400 "
            src={dish6}
            alt="haitian food"
          />
          <img
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="4"
            className="h-40 w-40 m-2 rounded-full bg-slate-400"
            src={dish2}
            alt="haitian food"
          />
            <img
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="4"
            className="h-40 w-40 m-2 rounded-full bg-slate-400"
            src={dish3}
            alt="haitian food"
          />
        </section>
        <div className="bg-green-200 md:w-3/12 h-52">
          <img className="h-52 w-full" src={restaurant} alt="decameron beach" />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
