import { motion } from "framer-motion";

import indigo from "../assets/gridcard/port.jpg";
import trapical from "../assets/gridcard/royal.jpg";
import logo from "../assets/logo.png";


const LandingPage = () => {
  return (
    <section className="bg-fixed h-[100vh]  bg-no-repeat bg-[url('./assets/bg.jpg')] bg-center bg-cover">
      <section className=" text-skin-fill font-bold h-[100vh]   bg-transparent -z-40 ">
        <div className="bg-gradient-to-r relative p-8 from-black h-full w-full">
          <div className="flex md:h-[34rem] lg:justify-between sm:justify-center md:w-4/5 py-20 mx-auto lg:flex-row flex-col lg:gap-4 gap-2 items-center   relative">
            <div className="lg:w-2/6 flex flex-col gap-2 justify-center items-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                animate={{ y: 0, opacity: 1 }}
                className="md:text-4xl text-xl"
              >
                Experience the Ultimate Escape with MASHPA
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 1, duration: 3 }}
                animate={{ opacity: 1 }}
                className="text-lg font-thin"
              >
                Unforgettable Adventures, Dream Destinations, and Tailor-Made
                Experiences for Extraordinary Journeys"
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 1.5, duration: 3 }}
                animate={{ opacity: 1 }}
                className="md:py-4 my-2 py-2 uppercase md:m-10  w-3/6 md:ml-24 text-center rounded-md bg-gradient-to-r from-pink-600 to-red-400 max-w-sm"
              >
                Get Started
              </motion.div>
            </div>

            <div className="sm:hidden lg:block self-start relative lg:w-5/12 h-[20rem]">
              <div className="rounded-full absolute lg:bottom-24 lg:left-10 md:bottom-64 md:left-40 bottom-40 left-2   p-1 h-20 w-20 md:h-32 md:w-32 bg-slate-200 z-0">
                <div
                  className=" bg-slate-800 rounded-full h-full w-full bg-cover bg-center "
                  style={{ backgroundImage: `url("${trapical}")` }}
                />
              </div>

              <div className="rounded-full flex items-center justify-center p-1 h-32 w-32 md:h-40 md:w-40 bg-slate-200  absolute lg:bottom-20 lg:left-32  md:bottom-56 md:left-[250px] bottom-36 left-52  z-20">
                <div
                  className=" bg-slate-800 rounded-full bg-center bg-cover h-full w-full"
                  style={{ backgroundImage: `url("${indigo}")` }}
                />
              </div>
              <div className="rounded-full flex items-center justify-center  p-1 h-40 w-40 md:h-64 md:w-64 bg-slate-200  absolute lg:bottom-6 lg:left-60  md:bottom-44 md:left-[360px] bottom-32 left-20 z-10">
                <div className=" bg-slate-800  rounded-full h-full w-full flex justify-center items-center text-center relative">
                  <div className="grid grid-cols-1 m-4 items-center container-snap  justify-center overflow-scroll">
                    <img
                      src={logo}
                      alt="logo"
                      className="h-8 w-8 bg-slate-400 items-center mx-auto"
                    />
                    mashpa group
                    <div className="md:text-2xl text-xl uppercase font-thin">
                      Your dream vacation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* curve  */}
          <div className="custom-shape-divider-bottom-1686527798">
            <div className="h-[2rem]  relative">
              <div className="absolute text-slate-400 left-[662px] -bottom-10 h-10 w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
