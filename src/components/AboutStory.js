import React, { useState } from "react";
import { docPaulNurses, doctakwhite } from "../assets";

function AboutStory() {

  const [showModal, setShowModal] = useState(false);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const handleDonateClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
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
                  src={docPaulNurses}
                  alt=""
                  className="max-w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <button
            href="#"
            onClick={handleDonateClick}
            className="inline-flex justify-center gap-4 items-center py-4 px-8 text-base font-medium text-center text-white rounded-lg bg-[#3ea498] hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 hover:scale-110"
          >
            Donate Now
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
       
        </div>



        

          <div className="grid grid-cols-12 justify-center items-center mt-12">
            <div className="col-span-12 md:col-span-5 md:col-start-7 order-2">
              <div className="flex flex-col justify-center lg:pl-14">
                <h4 className="text-2xl text-[#3ea498] font-bold mb-4">
                  Our story cont.
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
                  src={doctakwhite}
                  alt=""
                  className="max-w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
{showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4 relative">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Choose Donation Region
        </h2>
        <div className="flex flex-col space-y-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://give.team.org/give/672997/#!/donation/checkout"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
          >
            USA Donations
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://give.ca.team.org/give/673060/#!/donation/checkout"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
          >
            Canada Donations
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://magetsi.co.zw/billers/pay/TVRnPQ/friends-of-karanda-mission-hospital"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
          >
            International Donations
          </a>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-2"
        >
          ✕
        </button>
      </div>
    </div>
  </div>
)}
    </section>
  );
}

export default AboutStory;
