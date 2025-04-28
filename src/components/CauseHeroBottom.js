import React, { useState } from "react";
import { finreport, laptopaccount } from "../assets";
import Button from "./Botton";

function CauseHeroBottom() {
   const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#fffffd] shadow">
        <div className="container px-2 py-12 mx-auto flex flex-wrap">
          <div className="lg:w-full w-full mb-10 lg:mb-0 shadow-gray-500 shadow-lg rounded-md overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={finreport}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-2 -mb-10 lg:w-full lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-[#3ea498] text-lg title-font font-medium mb-4">
                  Managing Your Funds with Trust and Transparency
                </h2>
                <p className="text-lg p-4 leading-relaxed text-base text-justify">
                  At Friends of Karanda Mission Hospital (FOKMH), we prioritize
                  the responsible management and safeguarding of every
                  contribution entrusted to us. Whether from individual donors,
                  corporations, or other organizations, we ensure that every
                  donation is directed with utmost care and accountability.
                </p>
              
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-[#3ea498] text-lg title-font font-medium mb-4">
                  Secure Channels and Partnerships
                </h2>
                <p className="text-lg p-4 leading-relaxed text-base text-justify">
                  FOKMH channels all contributions directly to the Karanda
                  Mission Hospital account through trusted partnerships with
                  Magetsi or The Evangelical Alliance Mission (TEAM). These
                  partnerships are established to guarantee secure and efficient
                  transfer of funds, maintaining a clear audit trail for
                  transparency and accountability.
                </p>
            
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-[#3ea498] text-lg title-font font-medium mb-4">
                  Transparency through Reporting
                </h2>
                <p className="text-lg p-4 leading-relaxed text-base text-justify">
                  We are committed to transparency. Through our official
                  website, FOKMH provides comprehensive and accessible reports
                  detailing how donor funds are utilized. These reports offer
                  clear insights into the impact of contributions, showcasing
                  the tangible difference made in supporting healthcare
                  initiatives at Karanda Mission Hospital.
                </p>
               <Button setShowModal={setShowModal}/>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Modal - Moved outside the section */}
       {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">  <h2 className="text-2xl font-bold mb-4 text-[#3ea498] text-center">
          Choose Donation Region
        </h2></h2>
            <div className="flex flex-col space-y-4">
              <a
                target="_blank"
                href="https://give.team.org/give/672997/#!/donation/checkout"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
              >
                USA Donations
              </a>
              <a
                target="_blank"
                href="https://give.ca.team.org/give/673060/#!/donation/checkout"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
              >
                Canada Donations
              </a>
              <a
                target="_blank"
                href="https://magetsi.co.zw/billers/pay/TVRnPQ/friends-of-karanda-mission-hospital"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
              >
                International Donations
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 text-xl items-center justify-center text-red-600 hover:text-red-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-full lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-[#3ea498] text-lg title-font font-medium mb-4">
                  Stewardship and Accountability
                </h2>
                <p className="text-lg p-4 leading-relaxed text-base text-justify">
                  Every dollar donated to FOKMH is treated with the highest
                  standards of stewardship and accountability. Our financial
                  practices are guided by rigorous internal controls and
                  oversight to ensure that funds are used effectively towards
                  advancing healthcare services and improving the lives of those
                  in need.
                </p>
              
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-[#3ea498] text-lg title-font font-medium mb-4">
                  Commitment to Integrity
                </h2>
                <p className="text-lg p-4 leading-relaxed text-base text-justify">
                  Integrity forms the cornerstone of our operations. We adhere
                  strictly to ethical guidelines and best practices in
                  fundraising and financial management, striving to earn and
                  maintain the trust of our donors and partners.
                </p>
              
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-[#3ea498] text-lg title-font font-medium mb-4">
                  Your Partner in Making a Difference
                </h2>
                <p className="text-lg p-4 leading-relaxed text-base text-justify">
                  When you choose to support FOKMH, you are choosing a partner
                  dedicated to making a meaningful impact through transparent
                  stewardship of funds. Together, we can continue to empower
                  Karanda Mission Hospital in delivering vital healthcare
                  services to communities in Zimbabwe and beyond.
                </p>
                <Button setShowModal={setShowModal} />
              </div>
            </div>
          </div>
          <div className="lg:w-full w-full mb-2 lg:mb-0  shadow-gray-500 shadow-lg rounded-md overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={laptopaccount}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CauseHeroBottom;
