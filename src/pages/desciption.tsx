
import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, staggerContainer } from '../utils/motion'


export default function Desciption() {

  return (
    <section data-scroll-section className={`${styles.paddings}  pt-24`}>
      
          < motion.div
          variants={staggerContainer}
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.25 }}
          className={`relative w-full flex  mx-auto justify-center   md:py-10 px-6 md:px-0 ${styles.interWidth} ${styles.yPaddings} `}>
             <div className='absolute mix-blend-multiply animate-blob  animation-delay-400 filter blur-xl opacity-60 lg:h-60 lg:w-60 w-52 h-52  left-0 bg-purple-300 rounded-full'/>      
             <div className='absolute mix-blend-multiply animate-blob filter blur-xl opacity-60 lg:h-60 lg:w-60 w-52 h-52   -left-44 bg-yellow-300 rounded-full'/>       
             <div className='absolute mix-blend-multiply filter animate-blob animation-delay-200 blur-xl opacity-60 lg:h-60 lg:w-60 w-52 h-52  -bottom-4 -left-20  bg-cyan-300 rounded-full'/>        
          <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
      
         <h2 className=" uppercase text-3xl text-center  border-b-4  border-accent p-2 mb-4  text-skin-secondary font-semibold">
        Safety and Peace of Mind
      </h2>
      <p
        
        className="mt-[8px]  font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Meet talented local artisans and indulge in the exquisite flavors of
        spicy Haitian cuisine. From majestic mountains to tropical
        waterfalls and picturesque coffee plantations, Haiti boasts
        breathtaking natural diversity. Experience the warm hospitality of
        its people and embark on unforgettable adventures that will leave a
        lasting impression.
      </p>
    </motion.div>
  </motion.div>
    </section>
   
  )
}
