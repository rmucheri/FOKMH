import React from "react";

function AboutStory() {
  return (
    <section className=" animate-slide-and-fade-in  px-4 mx-auto max-w-screen-2xl text-center py-8 lg:py-8">
      <div className="">
        <div className="mx-auto  px-4">
          <div className="grid grid-cols-12 justify-center text-center mb-12">
            <div className=" col-span-12 md:col-span-8 md:col-start-3">
              <h4 className="text-[#d35400] text-4xl">Welcome To</h4>
              <h2 style={{ color: "#3ea498", fontSize: "1.5rem" }}>
                Friends of Karanda Mission Hospital{" "}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-12 justify-center items-center mt-12">
            <div className="col-span-12 md:col-span-5 md:col-start-2 order-2 md:order-1">
              <div className="flex flex-col justify-center lg:pr-14">
                <h2 className="text-3xl text-[#3ea498] leading-snug md:text-3xl md:leading-snug font-bold mb-6">
                  Our Story
                </h2>
                <p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
                  Friends of Karanda Mission Hospital (FOKMH) was born out of
                  the personal experiences of individuals diagnosed with cancer,
                  faced with enormous medical bills and procedures often beyond
                  their financial reach. For many, especially the breadwinners
                  of their families, the burden of these costs is overwhelming.
                  Families often go to great lengths, sacrificing their
                  resources to cover these expenses. Tragically, when the battle
                  against cancer is lost, families are left not only with the
                  irreplaceable loss of a loved one but also with drained
                  financial resources. For economically disadvantaged and
                  underprivileged patients, the situation is even more dire.
                  Many struggle to access any form of treatment and,
                  heartbreakingly, some pass away without ever receiving formal
                  medical care.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-7 order-1 md:order-2 mb-6 md:mb-0 mt-6 md:mt-0">
              <div>
                <img
                  src="https://images.squarespace-cdn.com/content/v1/62de875d83675b0dd4255d6b/cd7761b9-7c54-4bf1-b085-67c625a5fa53/25903809243_2733e9f415_o.jpg"
                  alt=""
                  className="max-w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="btndonate">
            <a
              className="hover:scale-110"
              href="https://magetsi.co.zw/billers/pay/TVRnPQ/friends-of-karanda-mission-hospital"
            >
              Donate Now!
            </a>
          </div>

          <div className="grid grid-cols-12 justify-center items-center mt-12">
            <div className="col-span-12 md:col-span-5 md:col-start-7 order-2">
              <div className="flex flex-col justify-center lg:pl-14">
                <h4 className="text-2xl text-[#3ea498] font-bold mb-4">
                  Cancer
                </h4>
                <p className="text-base leading-relaxed text-justify opacity-70 mb-0">
                  Friends of Karanda Mission Hospital is a volunteer-driven
                  charitable organization founded with a singular purpose: to
                  raise funds and secure resources for Karanda Mission Hospital.
                  Our mission is to enable the hospital to provide essential
                  treatment to poor and underprivileged cancer patients. We make
                  a heartfelt appeal to people worldwide, to support our cause
                  under the theme “Adopt a Patient.” Your small donation can
                  make a significant difference, not just for individuals in
                  Zimbabwe, but for the entire African continent. Karanda
                  hospital has treated patients from other African countries
                  like Mozambique, Zambia, Malawi, South Africa, Burundi, and
                  Rwanda. Together, we can provide hope, health, and a fighting
                  chance to those who need it most. Join us in this vital
                  mission to transform lives and create a brighter, healthier
                  future for all.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-2 order-1 mb-6 md:mb-0 mt-6 md:mt-0">
              <div>
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/c8b16879-82fd-4197-bd36-6ae20b19422e/DSCF8600.jpg"
                  alt=""
                  className="max-w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
