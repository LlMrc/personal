import { motion } from "framer-motion";
import bg from "../assets/bg-image.jpg";
import indigo from "../assets/port.jpg";
import trapical from "../assets/royal.jpg";
import logo from "../assets/logo.png";
import NavBar from "../components/navbar";
const bgStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const LandingPage = () => {
  return (
    <div
    id="stick"
      className=" w-full bg-fixed h-[100vh] bg-no-repeat"
      style={bgStyle}
      data-scroll-section
    >
       
      <section className="overflow-hidden text-skin-fill font-bold h-[100vh] md:h-full bg-transparent -z-40 ">
       
  
        <div className="bg-gradient-to-r relative from-black h-full w-full">
         <NavBar />

       
          <div className="grid md:w-full lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-2   text-center  relative">
         
            <div
              className=" grid md:gap-4 m-2 gap-2 px-2 lg:pt-52 pt-14  text-start z-0 md:px-10 w-4/5"
          
            >
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
                className="text-lg font-thin w-3/4"
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
                button
              </motion.div>
            </div>

            <section className="  relative lg:h-4/5 block lg:flex ">
              <div className="relative h-[400px] w-full ">
                <div
                  data-scroll-section
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="-1"
                  className="rounded-full absolute lg:bottom-20 lg:left-10 md:bottom-64 md:left-40 bottom-40 left-2   p-1  h-32 w-32 bg-slate-200 z-10"
                >
                  <div
                    className=" bg-slate-800 rounded-full h-full w-full bg-cover bg-center "
                    style={{ backgroundImage: `url("${trapical}")` }}
                  />
                </div>
                <div
                  data-scroll-section
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="1.5"
                  className="rounded-full flex items-center justify-center p-1 h-40 w-40 bg-slate-200  absolute lg:bottom-14 lg:left-32  md:bottom-56 md:left-[250px] bottom-36 left-52  z-20"
                >
                  <div
                    className=" bg-slate-800 rounded-full bg-center bg-cover h-full w-full"
                    style={{ backgroundImage: `url("${indigo}")` }}
                  />
                </div>
                <div
                  data-scroll-section
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="-1"
                  className="rounded-full flex items-center justify-center  p-1 h-52 w-52 md:h-64 md:w-64 bg-slate-200  absolute lg:bottom-6 lg:left-60  md:bottom-44 md:left-[360px] bottom-32 left-20 z-10"
                >
                  <div className=" bg-slate-800  rounded-full h-full w-full flex justify-center items-center text-center relative">
                    <div className="grid grid-cols-1 m-4 items-center container-snap  justify-center overflow-scroll">
                      <img
                        src={logo}
                        alt="logo"
                        className="h-8 w-8 bg-slate-400 items-center mx-auto"
                      />
                      mashpa group
                      <div className="text-2xl uppercase font-thin">
                        Your dream vacation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* curve  */}
          <div className="custom-shape-divider-bottom-1686527798">
            <div className="h-[2rem]  relative">
              <div className="absolute text-slate-400 left-[655px] -bottom-14 h-10 w-10">
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
            {/* <div className="h-[2rem] w-full bg-skin-fill"/> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
