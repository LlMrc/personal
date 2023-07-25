import "../App.css";
import { useRef } from "react";
import FooterPage from "./footer";
import LandingPage from "./landing";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Explorer from "./explorer";
import WhatNew from "./whatnew";
import Card from "../components/card";
import Culture from "../components/culture";
import MediaCard from "../components/visitguide";
import Desciption from "./desciption";
import About from "./about";
import Sevices from "./sevices";
import Testimonial from "./testimonial";

const HomePage = () => {
  const ref = useRef(null);
  const options = {
    smooth: true,
  };
  return (
    <>
      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <main data-scroll-container className="bg-skin-fill">
          <LandingPage />
          <Card />
          <MediaCard />
          <Desciption/>
          <Culture />       
          <Explorer />
          <WhatNew />
          <About/>
          <Sevices/>
          <Testimonial/>
          <FooterPage />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default HomePage;
