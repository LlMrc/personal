
import styles from "./styles";
import illustrator from "./assets/about.png"

function About() {
  return (
    <>
      <section className="relative bg-gradient-to-l from-green-300 to-blue-300 via-purple-200 h-[85vh] p-4">
        <div
          className={` flex flex-col md:flex-row justify-center items-center after:content-[''] after:absolute after:w-[100%] after:-bottom-20 after:overflow-hidden after:bg-[url('./assets/svg/wave.svg')] after:h-[275px]`}
        >
          <div className=" w-2/4 text-center text-6xl text-slate-100 font-bold">
            Discover how we started and what motivates us.
          </div>

          <img
            className="object-cover w-2/4 "
            src={illustrator}
            alt="about us illustration"
          />
        </div>
      </section>
      <div
        className={`flex flex-col  bg-white ${styles.flexCenter} ${styles.yPaddings}`}
      >
        <h2 className="text-4xl md:w-2/3 text-center">
          Our Mission: Learn about our purpose and commitment to our customers
        </h2>
        <h5 className=" md:w-2/3 p-10">
          Meet the people working hard to provide you with the best products and
          services. Our team is made up of experienced and dedicated
          professionals who are passionate about their work and dedicated to
          providing superior products and services. We look forward to helping
          you achieve your goals and providing you with an exceptional customer
          experience.
        </h5>
      </div>
    </>
  );
}

export default About;
