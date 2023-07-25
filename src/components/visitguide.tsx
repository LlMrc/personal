import { NavLink } from "react-router-dom";
import styles from "../styles";

const VisitGuide = () => {
  return (
    <section data-scroll-section>
      <div className={`bg-gradient-to-br from-succes  to-[#e6f7fc] mx-auto  py-24 lg:px-36 lg:pt-12`}>
        <div className="text-lg text-center md:pt-20 md:pb-10">
          <h2 className="uppercase">Exploring Haiti's Rich Biodiversity</h2>
          <p>
            Nestled in the Caribbean, this small island nation boasts a diverse
            range of ecosystems, from lush rainforests and pristine mountain
            ranges to coastal mangroves and vibrant coral reefs.
          </p>
        </div>

        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            {/* +++++++++++++++++++++++  palce +++++++++++++++++++++++ */}
            <div className=" group relative text-skin-fill w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={
                  "https://i.pinimg.com/564x/0e/27/d9/0e27d92b24279a52684b85dd8b85df13.jpg"
                }
              />
              <div className="hidden md:block absolute  inset-0 bg-gradient-to-b from-transparent overflow-hidden via-transparent to-transparent m-2 rounded-lg duration-500 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div className="absolute flex items-center flex-col p-1 justify-center translate-y-[80%] group-hover:translate-y-0 duration-500 w-full h-full  transition-all">
                  <h2 className="text-lg uppercase">public squares</h2>
                  <p className="italic line-clamp-6 opacity-0 duration-300 group-hover:opacity-100 transition-opacity">
                    Haiti's public squares and plazas hold significant cultural,
                    historical, and social importance within the country. These
                    public spaces serve as gathering points for communities,
                    venues for events, and sites of civic engagement.
                  </p>
                  <div className="btn">more</div>
                </div>
              </div>
            </div>

            {/* +++++++++++++++   escalier  ++++++++++++++++++++++++++ */}
            <div className=" group relative text-skin-fill  w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={
                  "https://i.pinimg.com/564x/29/74/12/297412f235b70bdf6acc7bc61b882478.jpg"
                }
              />
              <div className="hidden md:block absolute  inset-0 bg-gradient-to-b from-transparent overflow-hidden via-transparent to-transparent m-2 rounded-lg duration-500 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div className="absolute flex items-center flex-col p-1 justify-center translate-y-[80%] group-hover:translate-y-0 duration-500 w-full h-full  transition-all">
                  <h2 className="text-lg uppercase">street art</h2>
                  <p className="italic line-clamp-6 opacity-0 duration-300 group-hover:opacity-100 transition-opacity">
                    The arts and colors of Haiti are deeply rooted in the
                    country's history, culture, and identity. Haitian art is
                    internationally recognized for its uniqueness, vibrancy, and
                    lively expression.
                  </p>
                  <div className="btn">more</div>
                </div>
              </div>
            </div>

            {/* ******************citadel ********************** */}
            <div className=" group relative w-full text-skin-fill p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center   group-hover:translate-y-0 transition-transform"
                src={
                  "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/7e/e3/99.jpg"
                }
              />
              <div className="hidden md:block absolute  inset-0 bg-gradient-to-b from-transparent overflow-hidden via-transparent to-transparent m-2 rounded-lg duration-500 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div className="absolute flex items-center flex-col p-4 md:p-8 justify-center translate-y-[60%] group-hover:translate-y-0 duration-500 w-full h-full  transition-all">
                  <h2 className="text-lg uppercase">citadel laferier</h2>
                  <p className="italic line-clamp-6 text-ellipsis opacity-0 duration-300 group-hover:opacity-100 transition-opacity">
                    The Citadelle Laferrière, also known as the Citadel Henri
                    Christophe, is an impressive historic monument located in
                    Haiti. Built in the early 19th century, this massive
                    fortress stands proudly atop a mountain, providing a
                    panoramic view of the surroundings. It was erected by
                    Haitian King Henri Christophe to protect the country from
                    foreign invasions and serve as a symbol of Haitian
                    resistance against colonial oppression.
                  </p>
                  <div className="btn">
                    <NavLink target="_blank" to={'https://fr.wikipedia.org/wiki/Citadelle_La_Ferri%C3%A8re'}>more</NavLink>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* +++++++++++++++++++++++ */}
          <div className="flex w-1/2 flex-wrap">
            {/* ************************  */}
            <div className="   relative group text-skin-fill w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full  rounded-lg object-cover object-center"
                src={
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/5f/f5/22/grounds--v13124919.jpg?w=1200&h=-1&s=1"
                }
              />
              <div className="hidden md:block absolute  inset-0 bg-gradient-to-b from-transparent overflow-hidden via-transparent to-transparent m-2 rounded-lg duration-500 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div className="absolute flex items-center flex-col p-4 md:p-8 justify-center translate-y-[60%] group-hover:translate-y-0 duration-500 w-full h-full  transition-all">
                  <h2 className="text-lg uppercase">port morgan</h2>
                  <p className="italic line-clamp-6 opacity-0 duration-300 group-hover:opacity-100 transition-opacity">
                    Port Morgan is a renowned resort located on the beautiful
                    Île-à-Vache in Haiti. Situated on the southern coast of the
                    island, Port Morgan offers visitors a luxurious and secluded
                    retreat amidst stunning natural surroundings. The resort is
                    named after the famous Welsh pirate Henry Morgan, adding a
                    touch of historical charm to its ambiance.
                  </p>
                  <div className="btn">
                    <NavLink target="_blank" to={'https://www.bing.com/search?q=port+morgan&form=ANNTH1&refig=d3d401cc63624c9aa9b235c340145232'}>more</NavLink>
                    </div>
                </div>
              </div>
            </div>

            {/* ********************************************* */}
            <div className=" group relative text-skin-fill w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/aa/57/51/suites-la-colline.jpg?w=1200&h=-1&s=1"
                }
              />
              <div className="hidden md:block absolute  inset-0 bg-gradient-to-b from-transparent overflow-hidden via-transparent to-transparent m-2 rounded-lg duration-500 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div className="absolute  flex items-center flex-col p-1 justify-center translate-y-[85%] group-hover:translate-y-0 duration-500 w-full h-full  transition-all">
                  <h2 className="text-lg uppercase">Ile-a-vache</h2>
                  <p className="italic line-clamp-6 opacity-0 duration-300 group-hover:opacity-100 transition-opacity">
                    Île-à-Vache, also known as "Cow Island," is a picturesque
                    and idyllic island located off the southwestern coast of
                    Haiti. This tropical paradise boasts pristine beaches,
                    crystal-clear turquoise waters, and lush vegetation, making
                    it a popular destination for tourists seeking relaxation and
                    natural beauty. The island offers a serene and tranquil
                    atmosphere, with charming fishing villages and small-scale
                    tourism infrastructure.
                  </p>
                  <div className="btn"><NavLink target="_blamk" to={'https://www.tripadvisor.com/SmartDeals-g1025359-Ile_a_Vache_Sud_Department_Haiti-Hotel-Deals.html'}>more</NavLink></div>
                </div>
              </div>
            </div>

            {/* ***************************************** */}
            <div className=" group relative text-skin-fill w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={
                  "https://i.pinimg.com/564x/3d/5f/7a/3d5f7a5c3db20a3d3b311993271df735.jpg"
                }
              />
              <div className="hidden md:block absolute  inset-0 bg-gradient-to-b from-transparent overflow-hidden via-transparent to-transparent m-2 rounded-lg duration-500 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div className="absolute flex items-center flex-col justify-center translate-y-[85%] group-hover:translate-y-0 duration-500 w-full h-full  transition-all">
                  <h2 className="text-lg uppercase">architecture</h2>
                  <p className="italic line-clamp-6 opacity-0 duration-300 group-hover:opacity-100 transition-opacity">
                    The architecture of houses in Haiti is influenced by a
                    combination of French colonial, African, and Creole styles,
                    with local adaptations to suit the country's climatic and
                    geographical conditions. Traditional Haitian houses are
                    often constructed using local materials such as wood, stone,
                    and wattle-and-daub.
                  </p>
                  <div className="btn">more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center  md:text-xl text-base text-skin-base   text-center ">
          <p>Book Now and Embark on Your </p>
          <p className="text-skin-button pl-2"> Dream Adventure!</p>
        </div>
      </div>


    </section>
  );
};

export default VisitGuide;
