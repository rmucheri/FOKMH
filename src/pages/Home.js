import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HeroBottom from "../components/HeroBottom";
import Partner from "../components/Partner";
import KarandaVid from "../components/KarandaVid";
import Feature from "../components/Feature";
import Payment from "../components/Payment";
import ZoomBanner from "../components/ZoomBanner";

function Home() {
  return (
    <div>
      {/* <ZoomBanner /> */}
      <Hero />
      <Feature />
      <Features />
      <Payment />
      <HeroBottom />
      <KarandaVid />
      <Partner />
    </div>
  );
}

export default Home;
