import React from "react";
import { docTakPodium, karadoc, nursel, nursep } from "../assets";

function Feature() {
  return (
    <div>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div class="w-full items-center mx-auto max-w-screen-lg">
          <div class="group grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <div class="pr-12">
                <h3 className="text-2xl font-semibold leading-7 text-[#3ea498]">
                  Overview of our Campaign
                </h3>
                <p className="mt-2 text-left  font-bold tracking-tight text-gray-700 sm:text-2xl">
                  Let's Fight Against Cancer at Karanda Mission Hospital
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify mb-6">
                  Through the “Adopt a Patient” campaign, at Karanda Mission
                  Hospital, we are dedicated to providing life-saving cancer
                  treatments to patients in need. Our mission is to ensure that
                  no one faces cancer alone or without the necessary care.
                  Through the "Friends of Karanda" campaign, we aim to raise
                  funds to support our cancer program, enabling us to offer
                  advanced treatments, improve patient care, and provide
                  much-needed resources. Your support can make a significant
                  difference in the lives of countless individuals battling
                  cancer. Together, we can give hope and inspire healing.
                </p>
                {/* <h3 class="mb-4 font-semibold text-xl text-gray-400">Conditioning installation packages</h3>
          <ul role="list" class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">
            <li>5 cups chopped Porcini mushrooms</li>
            <li>1/2 cup of olive oil</li>
            <li>3lb of celery</li>
          </ul> */}
              </div>
            </div>
            <div class="pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              <div class="absolute top-0 left-0 opacity-85 bg-[#3ea498] mt-20 px-6 py-12 w-5/6 lg:w-4/6 lg:px-10 lg:py-16 flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all ">
                <h3 className="lg:text-3xl text-2xl font-semibold leading-7  mb-6 text-white">
                  Adopt a Patient
                </h3>
                <p class="text-white text-justify">
                  This initiative invites donors to contribute funds that
                  directly support the medical care and treatment of individual
                  patients who are in need. It emphasizes the personalized
                  impact of the donation, connecting donors to specific patients
                  and their healthcare journeys.
                </p>
              </div>
              <a
                class="font-bold text-sm flex mt-2 mb-8 items-center gap-2"
                href="/about"
              >
                <span className="text-[#3ea498]">MORE ABOUT US</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <div class="rounded-xl overflow-hidden">
                <img src={docTakPodium} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
