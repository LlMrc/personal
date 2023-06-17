import { Link, NavLink } from "react-router-dom";
import dress from "../assets/dress.png";
import Banner from "./banner";
import {delay, motion, useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";



const Culture = () => {
const {ref , inView}= useInView();
const animation = useAnimation();
const animation1  = useAnimation()



useEffect(() => {
  if(inView){
     animation.start({
      opacity:1,
      x:0,
      transition:{
        type: 'spring', delay: 0.5, duration:1.5
      }
     })
  } if(!inView){
      animation.start({x:'-100vw', opacity:0})
  }

}, [inView])

useEffect(() => {
  if(inView){
     animation1.start({
      opacity:1,
      x:0,
      transition:{
        type: 'spring', delay: 1, duration:1
      }
     })
  } if(!inView){
      animation1.start({x:'-100vw', opacity:0})
  }

}, [inView])



  return (
    <section>
      <section data-scroll-section className="md:w-4/5  mx-auto">
        <div ref={ref} className="uppercase text-2xl   my-10 ">
          <motion.span className="flex " animate={animation}>
            <h6 className="bg-skin-secondary text-skin-accent  px-3">
              haitian
            </h6>
            <h6 className="bg-skin-accent  px-2  text-secondary">culture</h6>
          </motion.span>
          {/* <Link to={""}><h6 className="underline decoration-accent text-xl py-2">learn more</h6></Link> */}
          <div className="block  md:w-36 text-center w-3/5 mx-auto md:mx-0 cursor-pointer  mt-6">
            <motion.h6 animate={animation1} className="bg-skin-secondary text-skin-accent m-2 px-2">
             <NavLink about="_black" to={"https://www.discogs.com/search/?format_exact=Album&country_exact=Haiti"}>music</NavLink> 
            </motion.h6>
            <motion.h6 animate={animation1} className="bg-skin-secondary text-skin-accent m-2 px-2">
            <NavLink about="_black" to={"https://www.alterpresse.org/spip.php?article15167"}>Fashion</NavLink> 
            </motion.h6>
            <motion.h6 animate={animation1} className="bg-skin-secondary text-skin-accent m-2 px-2">
            <NavLink about="_black" to={"https://visithaiti.com/festivals-events/carnival-haiti-guide/"}>Festivale</NavLink> 
            </motion.h6>
          </div>
        </div>

        <section className="grid grid-cols-3  mx-auto w-full   md:gap-4 h-full">
          <div data-scroll className=" clip-image-style col-span-1   self-end ">
            <h6>art</h6>

            <img
              className="h-64 w-60 bg-slate-400 "
              src="https://i.pinimg.com/736x/8e/de/90/8ede90d7a714d24daeaaa7dde240abc1.jpg"
              alt="haitian culture"
            />
          </div>
          <div className="flex col-span-2 w-full ">
            <div className="hidden md:flex text-end  items-end">
              <h6 className="transform uppercase pb-4 translate-x-full origin-bottom-left justify-self-end font-bold -rotate-90">
              <NavLink about="_black"  to={"https://www.bijouxcreoles.com/"}>creole collection</NavLink>  
              </h6>
            </div>

            <div className="flex justify-end bg-slate-200 rounded w-full ">
              <img className="md:h-[500px] " src={dress} />
            </div>
          </div>
        </section>
      </section>
      <Banner />
    </section>
  );
};

export default Culture;
