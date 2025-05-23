import React, { useState } from "react";
import { docPaul } from "../assets";

function AboutUs() {




  return (
    <div className="animate-slide-and-fade-in  px-4 mx-auto max-w-screen-xl text-center py-8 lg:py-16">
      <div className="contentLeft">
        <div className="row">
          <div className="imgWrapper ">
            <img src={docPaul} alt="" />
          </div>
          <div className="imgWrapper shadow-orange-700 rounded-lg shadow-lg">
            <img
              src="https://alchetron.com/cdn/karanda-mission-hospital-fa4bcda5-f1f4-4431-a72f-0748867485b-resize-750.png"
              alt=""
            />
          </div>
          <div className="imgWrapper shadow-orange-700 rounded-lg shadow-lg">
            <img
              src="https://www.shutterstock.com/editorial/image-editorial/McT5Ad1aO6T0Q939MjU0MDE=/woman-enters-compound-karanda-mission-hospital-situated-440nw-10508648f.jpg"
              alt=""
            />
          </div>
          <div className="imgWrapper shadow-orange-700 rounded-lg shadow-lg">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/c8b16879-82fd-4197-bd36-6ae20b19422e/DSCF8600.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <div className="contentRight">
        <div className="content rounded-lg shadow p-4 ">
          <h4 style={{ fontSize: "2rem" }}>Welcome To</h4>
          <h2 style={{ color: "#3ea498", fontSize: "1.5rem" }}>
            Friends of Karanda Mission Hospital{" "}
          </h2>
          <h3 style={{ fontSize: "1.5rem", color: "#3ea498" }}>Our Story</h3>
          <p className="text-justify text-3xl no-scrollbar overflow-auto h-96 ">
            Friends of Karanda Mission Hospital (FOKMH) was born out of the
            personal experiences of individuals diagnosed with cancer, faced
            with enormous medical bills and procedures often beyond their
            financial reach. For many, especially the breadwinners of their
            families, the burden of these costs is overwhelming. Families often
            go to great lengths, sacrificing their resources to cover these
            expenses. Tragically, when the battle against cancer is lost,
            families are left not only with the irreplaceable loss of a loved
            one but also with drained financial resources. <br />
            <br />
            For economically disadvantaged and underprivileged patients, the
            situation is even more dire. Many struggle to access any form of
            treatment and, heartbreakingly, some pass away without ever
            receiving formal medical care. Friends of Karanda Mission Hospital
            is a volunteer-driven charitable organization founded with a
            singular purpose: to raise funds and secure resources for Karanda
            Mission Hospital. Our mission is to enable the hospital to provide
            essential treatment to poor and underprivileged cancer patients. We
            make a heartfelt appeal to people worldwide, to support our cause
            under the theme “Adopt a Patient.” Your small donation can make a
            significant difference, not just for individuals in Zimbabwe, but
            for the entire African continent. Karanda hospital has treated
            patients from other African countries like Mozambique, Zambia,
            Malawi, South Africa, Burundi, and Rwanda. Together, we can provide
            hope, health, and a fighting chance to those who need it most. Join
            us in this vital mission to transform lives and create a brighter,
            healthier future for all.
          </p>
          <a
            className="hover:scale-110"
            href="https://magetsi.co.zw/billers/pay/TVRnPQ/friends-of-karanda-mission-hospital"
          >
            Donate Now!
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default AboutUs;
