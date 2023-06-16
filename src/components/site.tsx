
const MediaCard = () => {
  return (
    <section data-scroll-section>
      <div className="container  mx-auto px-5 py-2 my-14 lg:px-32 lg:pt-12">
        <div className="text-lg text-center md:pt-20 md:pb-10">
          <h2 className="uppercase">title</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            similique quas quia mollitia nesciunt autem magni recusandae. Hic,
            architecto labore.
          </p>
        </div>

        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={'https://i.pinimg.com/564x/0e/27/d9/0e27d92b24279a52684b85dd8b85df13.jpg'}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={'https://i.pinimg.com/564x/29/74/12/297412f235b70bdf6acc7bc61b882478.jpg'}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/7e/e3/99.jpg'}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/5f/f5/22/grounds--v13124919.jpg?w=1200&h=-1&s=1'}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/aa/57/51/suites-la-colline.jpg?w=1200&h=-1&s=1'}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={'https://i.pinimg.com/564x/3d/5f/7a/3d5f7a5c3db20a3d3b311993271df735.jpg'}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center  md:text-xl text-base text-skin-base   text-center ">
          <p>Book Now and Embark on Your </p>
          <p className="text-skin-button pl-2"> Dream Adventure!</p>
        </div>
      
      </div>

      <div    className="w-full flex md:w-3/6 mx-auto justify-start   md:py-10 px-6 md:px-0  md:mt-14 ">
        <div   className="bg-shad-color p-4   rounded  md:shadow-lg shadow-primary md:w-3/4">
          <h2
         
            className="uppercase  border-b-4  border-accent p-2 mb-4  text-skin-secondary font-semibold"
          >
            Safety and Peace of Mind
          </h2>
          <p  className="m-1">
            Meet talented local artisans and indulge in the exquisite flavors of
            spicy Haitian cuisine. From majestic mountains to tropical
            waterfalls and picturesque coffee plantations, Haiti boasts
            breathtaking natural diversity. Experience the warm hospitality of
            its people and embark on unforgettable adventures that will leave a
            lasting impression.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MediaCard;
