import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const slide = [
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/29/5b/ad/dan-s-creek-hotel.jpg?w=1000&h=-1&s=1",
    id: 1,
    title: "Port margan beach",
  },
  {
    url: "https://images.unsplash.com/photo-1574465636391-3d2f98aee2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    id: 2,
    title: "children",
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/00/ae/00/hotel-florita.jpg?w=1200&h=-1&s=1",
    id: 3,
    title: "jacmel",
  },
  {
    url: "https://i.pinimg.com/originals/cf/94/5e/cf945e9a83c718fbd1b82957af81cb9e.jpg",
    id: 4,
    title: "jacmel beach",
  },
  {
    url: "https://i.pinimg.com/originals/fe/60/ca/fe60ca87359ec783ad4f250ea53f7d1d.jpg",
    id: 5,
    title: "haiti street",
  },

  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/25/a1/84/cathedrale-du-cap-haitien.jpg?w=700&h=500&s=1",
    id: 6,
    title: "cap haitien cathedral",
  },

  {
    url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/7e/e3/9b.jpg",
    id: 7,
    title: "cap-haitien palais sans soucis",
  },
  {
    url: "https://images.unsplash.com/photo-1574465636377-7781c5117a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    id: 8,
    title: "haiti school",
  },
  {
    url: "https://i.pinimg.com/originals/64/d9/84/64d98433610092ea2f4505be861354f0.jpg",
    id: 9,
    title: "citadel laferiere",
  },

  {
    url: "https://i.pinimg.com/originals/d2/91/7b/d2917b1708e6fd6e452be1a5c0540489.jpg",
    id: 10,
    title: "citadele cap-haitien",
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/0f/43/e2/les-gonaivs.jpg?w=1200&h=-1&s=1",
    id: 11,
    title: "les cayes",
  },
  {
    url: "https://i.pinimg.com/originals/07/82/5a/07825af7e3f315c12474f3c6809df9d6.jpg",
    id: 12,
    title: "hati beach",
  },
  {
    url: "https://i.pinimg.com/originals/72/bc/c7/72bcc7fcd58402ada755ba93cd1dc1e2.jpg",
    id: 13,
    title: "haitian beach",
  },
  {
    url: "https://i.pinimg.com/originals/9c/b0/05/9cb005addadda60d404a45283a762051.jpg",
    id: 14,
    title: "Ile-a-vache beach",
  },

  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/d3/e2/f8/inside-main-gallery-of.jpg?w=1200&h=-1&s=1",
    id: 15,
    title: "Jacmel exposition",
  },
  {
    url: "https://i.pinimg.com/originals/2e/53/a6/2e53a61789e90bf41afa6926d98f5a74.jpg",
    id: 15,
    title: "Jacmel carnival",
  },
];
const nextBtn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);
const prevBtn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const Souvenir = () => {
  const [index, setIndex] = useState(1);

  const previewSlide = () => {
    const isPrev = index === 1;
    const newIndex = isPrev ? slide.length - 1 : index - 1;
    setIndex(newIndex);
  };
  const nextSlide = () => {
    const isLast = index === slide.length - 1;
    const newIndex = isLast ? 0 : index + 1;
    setIndex(newIndex);
  };
  return (
    <section className=" my-20   w-full rounded" data-scroll-section>
        <h6 className="my-4 font-semibold text-lg">A Journey Down Memory Lane: Timeless Reminiscences</h6>
        <div className="flexflex-col md:flex-row justify-center items-center  ">
      <div
      
       className="md:text-end  md:mr-4 w-full justify-center flex overflow-x-scroll container-snap md:text-lg ">
    
     
        <motion.p
          whileHover={{
            scaleX: 1.1,
            marginRight: 10,
            textShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          className="my-2 px-2 h-8 border-solid mx-2 rounded-full border-2 border-secondary "
        >
          Humanitarianism
        </motion.p>
        <motion.p
          whileHover={{
            scaleX: 1.1,
            marginRight: 10,
            textShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          className="my-2 px-2  h-8 border-solid mx-2 rounded-full border-2 border-secondary "
        >
          hotel 
        </motion.p>
        <motion.p
          whileHover={{ scaleX: 1.1, marginRight: 10 }}
          className="my-2 px-2 mx-2 border-solid h-8 rounded-full border-2 border-secondary "
        >
          event 
        </motion.p>
        <motion.p
          whileHover={{ scaleX: 1.1, marginRight: 10 }}
          className="my-2 px-2 mx-2 h-8 border-solid rounded-full border-2 border-secondary "
        >
          Discovery
        </motion.p>
      </div>
      <div 
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="1"
      className="relative md:mx-auto md:h-[400px] md:w-[700px] md:p-2 md:my-8 shadow-md shadow-secondary overflow-hidden after:clear-both after:block after:content-[''] group">
        <div
          key={slide[0].id}
          className=" float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <div
            onClick={previewSlide}
            className="hidden  absolute top-[50%] bg-gray-400 opacity-70 rounded-full  group-hover:block -translate-x-0 -translate-y-[-50%] left-5 "
          >
            {prevBtn}
          </div>
          <div
            onClick={nextSlide}
            className="hidden absolute top-[50%]  bg-gray-400 opacity-70 rounded-full  group-hover:block -translate-x-0 -translate-y-[-50%] right-5 "
          >
            {nextBtn}
          </div>
          <img
            src={`${slide[index].url}`}
            className="block"
            alt={`${slide[index].title}`}
          />
        </div>
      </div>
    </div>
    </section>
   
  );
};

export default Souvenir;

