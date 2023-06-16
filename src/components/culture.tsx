import { Link } from "react-router-dom";
import dress from "../assets/dress.png";

import Banner from "./banner";

const Culture = () => {
  return (
    <section>
      <section data-scroll-section className="md:w-4/5  mx-auto">
        <div className="uppercase text-2xl   my-10 ">
          <span className="flex ">
            <h6 className="bg-skin-secondary text-skin-accent  px-3">
              haitian
            </h6>
            <h6 className="bg-skin-accent  px-2  text-secondary">culture</h6>
          </span>
          {/* <Link to={""}><h6 className="underline decoration-accent text-xl py-2">learn more</h6></Link> */}
          <div className="block  md:w-36 text-center w-3/5 mx-auto md:mx-0 cursor-pointer  mt-6">
            <h6 className="bg-skin-secondary text-skin-accent m-2 px-2">
              Music
            </h6>
            <h6 className="bg-skin-secondary text-skin-accent m-2 px-2">
              mode
            </h6>
            <h6 className="bg-skin-secondary text-skin-accent m-2 px-2">
              carnival
            </h6>
          </div>
        </div>

        <section className="grid grid-cols-3  mx-auto w-full   gap-4 h-full">
          <div data-scroll className=" clip-image-style col-span-1   self-end ">
            <h6>art</h6>

            <img
              className="h-64 w-60 bg-slate-400 "
              src="https://i.pinimg.com/736x/8e/de/90/8ede90d7a714d24daeaaa7dde240abc1.jpg"
              alt="haitian culture"
            />
          </div>
          <div className="flex col-span-2 w-full ">
            <div className="text-end flex items-end">
              <h6 className="transform uppercase pb-4 translate-x-full origin-bottom-left justify-self-end font-bold -rotate-90">
                creole collection
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
