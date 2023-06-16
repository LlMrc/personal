import "../App.css";
import { useRef } from "react";
import AboutPage from "./about";
import ContactPage from "./contact";
import FooterPage from "./footer";
import HeroPage from "./hero";
import LandingPage from "./landing";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";





const HomePage = () => {
    const ref = useRef(null);
    const options = {
      smooth: true,
    }
  return (
    <>
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container className="bg-skin-fill">
        <LandingPage />

        <div className=" lg:px-32">
          <HeroPage />
          <AboutPage />
          <ContactPage />
        </div>
        <FooterPage />
      </main>
    </LocomotiveScrollProvider>
  </>
  )
}

export default HomePage