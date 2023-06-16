import bg from "../assets/restaurant.jpg";

import dish1 from "../assets/3.jpg";

import dish2 from "../assets/4.jpg";

import dish3 from "../assets/5.jpg";
import dish4 from "../assets/rice.png";
import dish5 from "../assets/1.png";

import dish6 from "../assets/2.png";

const Banner = () => {
  return (
    <div data-scroll-section  className="md:my-40 text-center py-4">
      <p className="px-4">
        Discover the Authenticity and Enchanting Spices of Haiti 😍😋
      </p>
      <div className=" m-2 flex flex-col bg-slate-200 rounded md:flex-row ">
        <section  className=" h-52 items-center flex gap-2 overflow-x-scroll container-snap md:w-3/4  p-2 justify-around">
     
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
          />     <img
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
          <img className="h-52 w-full" src={bg} alt="decameron beach" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
