import { motion } from "framer-motion";
import styles from "../styles";
import { popup, staggerContainer } from "../utils/motion";

import { explorImg } from "../costant/grid";

export default function WhatNew() {
  return (
    <section className={`${styles.innerWidth} pb-24 bg-gradient-to-br to-succes  from-[#e6f7fc] `} data-scroll-section>
      <div
        className={`p-20 ${styles.flexCenter} `}
      >
        <div
          className={` h-[45px] md:w-[55%] w-[100%] relative  ${styles.flexCenter}
      after:absolute  md:after:w-[38%]  after:w-[28%] after:right-0 after:top-[45%]
      after:m-auto after:h-[2px] after:bg-primary 
      
    before:absolute md:before:w-[38%] before:w-[28%] before:top-[45%] 
    before:m-auto before:h-[2px] before:bg-primary before:left-0 `}
        >
          <span className="uppercase m-auto inset-0">
            <h6> Top 10 best place  </h6>
          </span>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        whileInView="show"
        initial="hidden"
        viewport={{ once: false, amount: 0.2 }}
        className={`grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-2 mx-auto  ${styles.interWidth}`}
      >
        {explorImg.map((item, index) => (
          <motion.div
          variants={popup('spring', index * 0.3, )}
          className="mx-auto"
           key={item.id} >
            <img src={item.imgUrl} alt={item.title} className="h-44 md:w-60 w-[300px] rounded-lg" />
            <span>{item.title}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
