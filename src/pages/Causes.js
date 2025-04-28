import React from "react";
import CauseHero from "../components/CauseHero";
import CauseHeroBottom from "../components/CauseHeroBottom";
import Testimonials from "../components/Testimonials";
import Adopt from "../components/Adopt";

function Causes() {
  return (
    <div className="">
      <Adopt />
      <CauseHero />
      <CauseHeroBottom />
      <Testimonials />
    </div>
  );
}

export default Causes;
