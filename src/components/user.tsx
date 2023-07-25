type Props = {
  avatar: string;
  message: React.ReactNode;
};

const TestimonialLeft = ({ avatar, message }: Props) => {
  const styles = {
    backgroundImage: `url(${avatar})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="relative md:w-2/5  md:h-64  h-36 ">
      <div className="relative  ">
        <div className="rounded-tr-3xl absolute md:h-36 left-28 h-20  w-64 rounded-tl-3xl shadow shadow-slate-400  p-4  md:left-0  rounded-br-3xl z-0  bg-white">
          {message}
          <div className="rounded-full absolute h-20 w-20 md:h-28 md:w-28  -left-24 md:-left-28 md:top-36 bg-slate-100"
            style={styles}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialLeft;
