import "../App.css";

import LandingPage from "./landing";

import Explorer from "../components/explorer";
import WhatNew from "./whatnew";
import Card from "../components/card";
import Culture from "../components/culture";
import VisitMediaCard from "../components/visitguide";
import Desciption from "./desciption";
import About from "./about";
import Sevices from "./sevices";
import Testimonial from "./testimonial";
import CallToAction from "../components/calltoaction";

const HomePage = () => {

 
  return (
    <>
    
        <main  className="bg-skin-fill block overflow-x-hidden w-full">
          <LandingPage />
          <Card />
          <VisitMediaCard />
          <Desciption />
          <Culture />
          <Explorer />
          <About />
          <CallToAction />
          <WhatNew />
          <Sevices />
          <Testimonial /> 
       
        </main>

    </>
  );
};

export default HomePage;
