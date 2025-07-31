import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { ambulance, bbq, ECGmachine, waterHeater } from "../assets";
import FavoriteIcon from "@mui/icons-material/Favorite";



const CampaignPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDonateClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: `url(${bbq})` }}
        className="bg-center bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply text-white relative"
      >
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              BBQ fundraising campaign
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Help us improve healthcare delivery at Karanda Mission Hospital
              through three crucial initiatives
            </p>
            <div className="mt-10">
              <button
                onClick={handleDonateClick}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-[#3ea498] bg-white hover:bg-gray-100 transition-all duration-200"
              >
                Support Our Campaign
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Project Cards */}
        <div className="space-y-16">
          {/* Land Cruiser Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={ambulance}
                alt="Land Cruiser Ambulance"
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Land Cruiser for Outreach Programs
              </h2>
              <p className="text-lg text-gray-600">
                Help us acquire a reliable Land Cruiser to:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-[#3ea498] mr-2" />
                  Reach remote communities with essential healthcare
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-[#3ea498] mr-2" />
                  Transport medical teams and equipment safely
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-[#3ea498] mr-2" />
                  Serve as an emergency response vehicle
                </li>
              </ul>
            </div>
          </div>

          {/* ECG Machine Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={ECGmachine}
                alt="ECG Machine"
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                ECG Machine for Cardiac Care
              </h2>
              <p className="text-lg text-gray-600">
                A new ECG machine will enable us to:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-[#3ea498] mr-2" />
                  Provide accurate cardiac diagnostics
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-[#3ea498] mr-2" />
                  Monitor patients' heart health effectively
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-[#3ea498] mr-2" />
                  Improve emergency response capabilities
                </li>
              </ul>
            </div>
          </div>

          {/* Solar Water Geysers Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={waterHeater}
                alt="Solar Water Geyser"
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Solar Water Geysers
              </h2>
              <p className="text-lg text-gray-600">
                Installing solar water geysers will:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-[#3ea498] mr-2" />
                  Reduce energy costs significantly
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-[#3ea498] mr-2" />
                  Ensure consistent hot water supply
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-[#3ea498] mr-2" />
                  Improve patient care and hygiene
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Campaign Progress */}
        {/* Option 1: Campaign Goals */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Campaign Goals
          </h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] text-4xl font-bold">$45,000</div>
              <div className="text-gray-600">Land Cruiser Target</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] text-4xl font-bold">$25,000</div>
              <div className="text-gray-600">ECG Machine Target</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] text-4xl font-bold">$15,000</div>
              <div className="text-gray-600">Solar Geysers Target</div>
            </div>
          </div>
        </div>

        {/* Option 2: Impact Statistics */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Potential Impact
          </h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] text-4xl font-bold">5,000+</div>
              <div className="text-gray-600">
                Rural Patients Reached Annually
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] text-4xl font-bold">2,400+</div>
              <div className="text-gray-600">Cardiac Diagnoses Per Year</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] text-4xl font-bold">365</div>
              <div className="text-gray-600">Days of Hot Water Supply</div>
            </div>
          </div>
        </div>

        {/* Option 3: Key Benefits */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Key Benefits
          </h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] text-3xl mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <div className="font-semibold">Mobility</div>
              </div>
              <div className="text-gray-600">Reaching Remote Communities</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] text-3xl mb-2">
                <FavoriteIcon className="h-12 w-12 mx-auto mb-2" />
                <div className="font-semibold">Diagnosis</div>
              </div>
              <div className="text-gray-600">Better Heart Care</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] text-3xl mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <div className="font-semibold">Sustainability</div>
              </div>
              <div className="text-gray-600">Clean Energy Solution</div>
            </div>
          </div>
        </div>
        {/* Option 4: Timeline/Phases */}
        {/* <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Campaign Timeline
          </h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] font-bold text-xl mb-2">
                Phase 1
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                Q3 2024
              </div>
              <div className="text-gray-600">Land Cruiser Acquisition</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] font-bold text-xl mb-2">
                Phase 2
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                Q4 2024
              </div>
              <div className="text-gray-600">ECG Machine Installation</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] font-bold text-xl mb-2">
                Phase 3
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                Q1 2025
              </div>
              <div className="text-gray-600">Solar System Setup</div>
            </div>
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gray-100 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your contribution will help us improve healthcare delivery and
            patient care at Karanda Mission Hospital.
          </p>
          <button
            onClick={handleDonateClick}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#3ea498] hover:bg-[#2d8276] transition-all duration-200"
          >
            Support Our Campaign
          </button>
        </div>
      </div>

      {/* Donation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#3ea498] text-center">
              Choose Donation Region
            </h2>
            <div className="flex flex-col space-y-4">
              <a
                target="_blank"
                href="https://give.team.org/give/672997/#!/donation/checkout"
                className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
              >
                USA Donations
              </a>
              <a
                target="_blank"
                href="https://give.ca.team.org/give/673060/#!/donation/checkout"
                className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
              >
                Canada Donations
              </a>
              <a
                target="_blank"
                href="https://magetsi.co.zw/billers/pay/TVRnPQ/friends-of-karanda-mission-hospital"
                className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
              >
                International Donations
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 text-xl text-red-600 hover:text-red-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignPage;
