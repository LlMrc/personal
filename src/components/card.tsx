import indigo from "../assets/indigo.jpg";




const Card = () => {
  return (
    <section

      className="flex flex-col md:flex-row-reverse md:p-6 relative  pt-14 md:pt-32 justify-end"
      data-scroll-section
    >
      <div className="  space-y-6 theme-primary relative   md:w-[800px]">
        <div className="relative bg-skin-primary  md:max-w-4xl md:h-[300px]  h-[300px] mx-auto overflow-hidden  md:rounded-xl">
          <img
            className="inset-0 h-full w-full  objecy-cover  opacity-30"
            src="https://i.pinimg.com/originals/bb/75/60/bb75607c4e519028c98d9747685aba58.jpg"
            alt="haiti jalouzi"
          />

          <div className=" w-full absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90">
            <div className="text-2xl font-extrabold text-skin-fill  text-center md:text-4xl">
              <h2 data-scroll className="block text-style">Unveiling the Hidden Beauty </h2>
              <h2 data-scroll className="block ">You need to know</h2>
            </div>

            <p className="m-3 md:m-4 md:pl-10  text-lg md:leading-6 text-skin-fill">
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
          className="flex  justify-center  items-center bg-skin-fill md:pr-2 h-full w-full md:py-2 md:absolute md:h-52 md:w-52 top-10 -right-10 shadow-gray-50"
          
        >
          <img className="h-full w-full" src={indigo} alt="club indigo"/>
          <div className="grid md:grid-cols-2 uppercase absolute md:-bottom-5 md:left-[350px] w-64 gap-4 opacity-80 md:opacity-100">
            <button className="px-4 uppercase font-semibold  rounded-sm bg-skin-secondary text-skin-accent md:bg-skin-primary py-2 shadow-md ">
              more
            </button>
            <button className="px-4 uppercase font-semibold rounded-sm bg-skin-fill text-skin-secondary py-2 shadow-md ">
              demo
            </button>
          </div>
      
        </div>
       
      </div>
    </section>
  );
};

export default Card;
