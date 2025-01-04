import React from "react";
import AboutUs from "../components/AboutUs";
import Team from "../components/Team";
import FAQs from "../components/FAQs";
import Vision from "../components/Vision";
import { Gallery } from "../components/Gallery";
import Teamleadership from "../components/Teamleadership";
import Values from "../components/Values";
import AboutStory from "../components/AboutStory";

function About() {
  return (
    <div className="">
      <AboutStory />

      <Teamleadership />

      <Team />
      <AboutUs />
      <Vision />
      <Values />
      <Gallery />
      <FAQs />
    </div>
  );
}

export default About;
