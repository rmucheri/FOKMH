import React, { useState } from "react";
import { docPaul, docTakHalf, nurseCharge } from "../assets";

const Paul =
  "https://thenewshawks.com/wp-content/uploads/2022/07/Karanda-Hospital-Medical-Director-Dr-Paul-Thistle-scaled.jpg";

const Team = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className=" mx-auto flex flex-col items-center">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center">
            <span className="mb-2 block text-lg font-semibold text-primary"></span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-[#3ea498] dark:text-[#3ea498] sm:text-4xl md:text-[20]">
              Karanda Mission Hospital Team
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              Meet the Karanda leadership Dr Thistle and crew
            </p>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center">
          <TeamCard
            name="Paul Thistle"
            profession="Medical Director"
            imageSrc={docPaul}
            content=" has 29 years of full time medical missionary service in Zimbabwe, first
                            as a chief medical officer at the Salvation Army Howard Hospital (1995-2012), and
                            most recently as a Medical Director at Karanda Mission Hospital (2012-present).
                            He received his Medical Degree and Fellowship in Obstetrics and Gynecology from
                            the University of Toronto. He is honorary lecturer at the university of Zimbabwe
                            and full professor in Global Health at the University of Toronto.
                            In 2008, Paul received an Honorary Doctor of Laws from the University of Windsor,
                            a Paul Harris Fellowship from Rotary International and the inaugural Teasdale-Corti
                            Humanitarian Award from the Royal college of Physicians and Surgeons of Canada.
                            Paul is married to Pedrinah a Zimbabwean registered nurse, nurse educator and
                            midwife. They have three sons, James (23 years), Alexander (19years) at the
                            University of Toronto, and Andrew (9years) at school in Harare."
          />
          <TeamCard
            name="Dr Takudzwa Sasa MD"
            profession="Assistant Medical Director"
            imageSrc={docTakHalf}
            content=" has been serving God as a local missionary and employed as a medical doctor for
                            the past 7 years.
                            He is currently serving at Karanda Mission Hospital as the assistant Medical Director.
                            Over the past 7 years he has garnered a lot of medical experience, that’s clinical,
                            surgical and hospital management under guidance of our medical superintendent,
                            Dr Thistle.
                            Dr Sasa and his wife, Daisy both work at the mission and have been blessed with 3
                            beautiful children."
          />
          <TeamCard
            name="Emily Muchenje"
            profession="Senior Nursing officer lll"
            imageSrc={nurseCharge}
            content="Trained for registered general nursing at Karanda Mission Hospital
                            (May 2001-2004 April).

                            Finished school 04/05/2004.
                            Upgraded at Karanda Mission Hospital to a midwife (sept 2007 –Aug 2008).
                            May 2018 promoted to a senior in charge.
                            Aug 2022 promoted to the senior nursing officer position and also acting Hospital
                            administrator since then.
                            Blessed with 2 beautiful and handsome children."
          />
          {/* <TeamCard
                name="Coriss Ambady"
                profession="Web Developer"
                imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
                content = ""
              /> */}
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamCard = ({ imageSrc, name, profession, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const getContent = () => {
    if (isExpanded) {
      return content;
    }
    return content.length > 100 ? `${content.substring(0, 100)}...` : content;
  };

  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/4">
      <div className="mx-auto mb-10 w-full max-w-[370px]">
        <div className="relative overflow-hidden rounded-lg h-96">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-5 left-0 w-full text-center">
            <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
              <h3 className="text-[#3ea498] text-2xl font-semibold text-dark dark:text-[#3ea498]">
                {name}
              </h3>
              <p className="text-md text-body-color dark:text-dark-6">
                {profession}
              </p>
              <div>
                <span className="absolute bottom-0 left-0">
                  <svg
                    width={61}
                    height={30}
                    viewBox="0 0 61 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx={16}
                      cy={45}
                      r={45}
                      fill="#13C296"
                      fillOpacity="0.11"
                    />
                  </svg>
                </span>
                <span className="absolute right-0 top-0">
                  <svg
                    width={20}
                    height={25}
                    viewBox="0 0 20 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="0.706257"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 0.706257 24.3533)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 6.39669 24.3533)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 12.0881 24.3533)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 17.7785 24.3533)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="0.706257"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 0.706257 18.6624)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 6.39669 18.6624)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 12.0881 18.6624)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 17.7785 18.6624)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="0.706257"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 0.706257 12.9717)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 6.39669 12.9717)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 12.0881 12.9717)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 17.7785 12.9717)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="0.706257"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 0.706257 7.28077)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 6.39669 7.28077)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 12.0881 7.28077)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 17.7785 7.28077)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="0.706257"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 0.706257 1.58989)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 6.39669 1.58989)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 12.0881 1.58989)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 17.7785 1.58989)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-sm p-6 mt-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="text-xl">{name} </span>
            {getContent()}
          </p>
          {content.length > 100 && (
            <button
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={toggleContent}
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
          {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a> */}
        </div>
      </div>
    </div>
  );
};
