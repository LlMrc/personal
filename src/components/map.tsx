import styles from "../styles";
import office from "../assets/office.jpg"


function MapLocation() {
  return (
    <section 
      className={`bg-slate-50 h-[100vh] flex items-center gap-4 flex-col ${styles.yPaddings}`}
    >
      <h2 className=" uppercase text-3xl font-bold pb-10"> venue Location</h2>

      <iframe
        className="relative flex sm:flex-col md:flex-row items-end justify-end gap-4 w-full px-4"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.032003282401!2d-72.2740892259001!3d18.52745586896607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb9e628019f029b%3A0x2721afa912074990!2sRte%20de%20Freres%2C%20Port-au-Prince!5e0!3m2!1sfr!2sht!4v1695831973709!5m2!1sfr!2sht"
        height="470"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div
        className={`absolute h-[24rem] w-[26rem] rounded-md bg-opacity-50 bg-slate-500 bottom-20 right-16 ${styles.flexCenter}`}
      >
        <img
          className="h-[22rem] w-5/6 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          src={office}
          alt="office"
        />
      </div>
    </section>
  );
}

export default MapLocation