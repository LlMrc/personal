import indigo from "../assets/gridcard/indigo.jpg";
import styles from '../styles';
import { motion } from 'framer-motion';
import { staggerContainer, zoomIn,  } from '../utils/motion';




const Card = () => {
  return (
    <motion.section
    variants={staggerContainer}
    whileInView="show"
    initial="hidden"
    viewport={{ once: false, amount: 0.25 }}
      className={` ${styles.interWidth} flex  flex-col md:flex-row-reverse md:px-10 mt-10 relative mx-auto justify-between   md:py-24 `}
    
    >
      <div className="space-y-6  relative   md:w-[800px]">
        <div className="relative bg-skin-primary shadow-lg md:max-w-4xl md:h-[300px]  h-[300px] mx-auto overflow-hidden  md:rounded-xl">
          <img
            className="inset-0 h-full w-full  object-cover  opacity-30"
            src="https://i.pinimg.com/originals/bb/75/60/bb75607c4e519028c98d9747685aba58.jpg"
            alt="haiti jalouzi"
          />

          <div className=" w-full absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90">
            <div className="text-2xl font-extrabold text-skin-fill  text-center md:text-4xl">
           
              <motion.h2 
             variants={zoomIn( 0.3, 1)}
              className="block my-3 ">Did you know !</motion.h2>
            </div>

            <p className="m-3 md:m-8 md:pl-10 s md:p-4 text-xl md:leading-6 text-skin-fill">
              Beyond stereotypes and misconceptions, discover another side of
              Haiti that is brimming with hidden treasures and unrivaled
              cultural richness. Dare to discover the other side of Haiti and be
              amazed by its beauty, culture, and authenticity.
            </p>
          </div>
        </div>
      </div>
      <div className=" relative md:h-full bg-skin-fill  h-[300px] md:w-52">
     
      
        <div
          className="flex z-10  justify-center  items-center bg-skin-fill  h-full w-full md:absolute md:h-52 md:w-52 top-10 -right-10 shadow-gray-50">
            
          <img className="h-full w-full rounded overflow-hidden" src={indigo} alt="club indigo"/>
          <div className="grid md:grid-cols-2 uppercase absolute md:-bottom-5 md:left-[450px] w-64 gap-4 md:gap-6 opacity-80 md:opacity-100 ">
            <button type="submit" className="px-4 uppercase font-semibold  rounded-sm bg-skin-secondary text-skin-accent md:bg-skin-primary py-2  hover:shadow-xl">
              more
            </button>
            <button className="px-4 uppercase font-semibold rounded-sm bg-skin-fill text-skin-secondary py-2 hover:shadow-xl">
              demo
            </button>
          </div>
          <div className="sm:hidden md:block overflow-hidden absolute inset-0  border-2 border-primary h-[13.2rem] w-52 my-2  bg-skin-fill  left-[10px] -z-10"/>
        </div>
    
      </div>
    </motion.section>
  );
};

export default Card;
