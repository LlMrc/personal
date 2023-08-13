
import TestimonialLeft from "../components/user";
import TestimonialRight from "../components/users";
import a1 from "../assets/doreen.jpg";
import a2 from "../assets/thomas.jpg";
import a3 from "../assets/45.jpg";

const Testimonial = () => {
  return (
    <section data-scroll-section>
      <div className="bg-[#ebedf5]  md:flex justify-center items-center flex-col py-20 mx-auto">
        <TestimonialLeft
          avatar={a3}
          message={
            <div className="md:line-clamp-5 line-clamp-2">
              I was captivated by the natural beauty that Haiti has to offer.
              But what truly amazed me was the resilience and spirit of the
              Haitian people😎😍
            </div>
          }
        />
        <TestimonialRight
          avatar={a2}
          message={
            <div className="md:line-clamp-5 line-clamp-2">
              Despite the challenges they face, their unwavering determination
              and zest for life were inspiring
            </div>
          }
        />
        <TestimonialLeft
          avatar={a1}
          message={
            <div className="md:line-clamp-5 line-clamp-2">
              The vibrant markets filled with colorful handicrafts, the rhythmic
              beats of kompa music, and the mouthwatering flavors of Haitian
              cuisine—all of these elements painted a vivid picture of a culture
              deeply rooted in history and tradition.. 👌
            </div>
          }
        />
      </div>
    </section>
  );
};

export default Testimonial;
