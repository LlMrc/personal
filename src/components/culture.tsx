import { NavLink } from "react-router-dom";
import dress from "../assets/dress.png";
import Banner from "./banner";

import { TypingText } from "../components/CustomTexts";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";

const Culture = () => {
  return (
<>
      <section className="md:w-4/5 md:py-20 mx-auto"  data-scroll-section>
        <section className="grid md:grid-cols-3  mx-auto w-full   md:gap-4 h-full">
          <motion.div
            variants={staggerContainer}
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.25 }}
            className="col-span-1 uppercase cursor-pointer  self-end "
          >
            <TypingText title="Creole Arts" textStyles="text-center hover:text-skin-secondary" />

            <img
              className="md:h-64 md:w-60  object-contain bg-slate-400 rounded"
               src="https://i.pinimg.com/736x/8e/de/90/8ede90d7a714d24daeaaa7dde240abc1.jpg"
        
              alt="haitian culture"
            />
          </motion.div>
          <div className="flex col-span-2 w-full ">
            <div className="hidden md:flex text-end  items-end">
              <motion.h6
                variants={staggerContainer}
                whileInView="show"
                initial="hidden"
                viewport={{ once: false, amount: 0.25 }}
                className="transform uppercase  translate-x-full origin-bottom-left justify-self-end font-bold -rotate-90"
              >
                <NavLink about="_blanck" to={"https://www.bijouxcreoles.com/"}>
                  <TypingText
                    title="creole collection"
                    textStyles="text-center hover:text-skin-secondary"
                  />
                </NavLink>
              </motion.h6>
            </div>

            <div className="flex justify-end bg-slate-200 rounded w-full ">
              <img className="md:h-[500px] " alt="dress" src={dress} />
            </div>
          </div>
        </section>
   
 
    </section>
    <div className="md:py-24 w-full"  data-scroll-section>
    <Banner />
    </div>
    </>
  );
};

export default Culture;
