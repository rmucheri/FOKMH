import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { ambulance, bbq, ECGmachine, waterHeater } from "../assets";

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
              Ongoing fundraising campaign
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Help us acquire a Land Cruiser to reach remote communities and
              provide critical medical outreach
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
        </div>

        {/* Campaign Progress */}
        {/* Campaign Goals */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Campaign Goal
          </h2>
          <div>
            <div className="bg-gradient-to-r from-[#3ea498] to-cyan-600 text-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-3">
                Acquire a Land Cruiser for Medical Outreach
              </h3>
              <p className="text-lg opacity-95">
                A reliable Land Cruiser will enable us to reach underserved
                communities and save lives through consistent medical outreach
                and emergency transport services.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Areas */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Expected Impact
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] text-4xl mb-2">🌍</div>
              <div className="text-gray-900 font-semibold">Extended Reach</div>
              <div className="text-gray-600 text-sm mt-2">
                Access 50+ remote villages
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] text-4xl mb-2">⚡</div>
              <div className="text-gray-900 font-semibold">
                Emergency Response
              </div>
              <div className="text-gray-600 text-sm mt-2">
                Faster critical patient transport
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[#3ea498] text-4xl mb-2">❤️</div>
              <div className="text-gray-900 font-semibold">Lives Saved</div>
              <div className="text-gray-600 text-sm mt-2">
                Improved community health outcomes
              </div>
            </div>
          </div>
        </div>

        {/* Why a Land Cruiser */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why a Land Cruiser?
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
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
                <div className="font-semibold">Reliable Mobility</div>
              </div>
              <div className="text-gray-600">
                Built for rugged terrain and challenging roads
              </div>
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
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="font-semibold">Durability</div>
              </div>
              <div className="text-gray-600">
                Long-lasting investment for years of service
              </div>
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="font-semibold">Cost-Effective</div>
              </div>
              <div className="text-gray-600">
                Excellent value for sustained healthcare delivery
              </div>
            </div>
          </div>
        </div>

        {/* Completed Projects */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What We've Already Accomplished
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Thanks to generous donors like you, we've successfully implemented
            crucial healthcare initiatives
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50  shadow-lg  overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 overflow-hidden bg-gray-200">
                <img
                  src={ECGmachine}
                  alt="ECG Machine"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  ECG Machine
                </h3>
                <p className="text-gray-700 mb-4">
                  Enhanced our cardiac care capabilities with modern diagnostic
                  equipment
                </p>
                <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Completed
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50  shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 overflow-hidden bg-gray-200">
                <img
                  src={waterHeater}
                  alt="Solar Water Geysers"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Solar Water Geysers
                </h3>
                <p className="text-gray-700 mb-4">
                  Implemented sustainable energy solutions for improved facility
                  operations
                </p>
                <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Completed
                </div>
              </div>
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
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#3ea498] to-cyan-600 px-8 py-12 text-white text-center relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-2xl hover:text-gray-200 transition-colors"
              >
                ✕
              </button>
              <h2 className="text-4xl font-bold mb-2">
                Make a Difference Today
              </h2>
              <p className="text-lg opacity-95">
                Help us reach more patients with our Land Cruiser
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Impact Section */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#3ea498]">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🚑</span>
                  Your Impact
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-[#3ea498] mr-3 flex-shrink-0 mt-0.5" />
                    <span>Enable outreach to 50+ remote villages annually</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-[#3ea498] mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      Provide emergency medical transport for critical cases
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-[#3ea498] mr-3 flex-shrink-0 mt-0.5" />
                    <span>Support preventive healthcare initiatives</span>
                  </li>
                </ul>
              </div>

              {/* Donation Options */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Choose Your Region
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://give.team.org/give/672997/#!/donation/checkout"
                    className="flex items-center justify-center py-4 px-6 text-lg font-semibold text-white rounded-xl bg-[#3ea498] hover:bg-[#2d8276] transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    🇺🇸 USA Donations
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://give.ca.team.org/give/673060/#!/donation/checkout"
                    className="flex items-center justify-center py-4 px-6 text-lg font-semibold text-white rounded-xl bg-cyan-600 hover:bg-cyan-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    🇨🇦 Canada Donations
                  </a>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://magetsi.co.zw/billers/pay/TVRnPQ/friends-of-karanda-mission-hospital"
                  className="w-full flex items-center justify-center mt-4 py-4 px-6 text-lg font-semibold text-white rounded-xl bg-orange-600 hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  🌍 International Donations
                </a>
              </div>

              {/* Trust Badge */}
              <div className="text-center text-sm text-gray-600 space-y-2">
                <p className="flex items-center justify-center space-x-2">
                  <span>🔒</span>
                  <span>100% Secure Donations</span>
                </p>
                <p>Your donation goes directly to supporting patient care</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-8 py-6 text-center border-t">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 hover:text-gray-900 font-semibold transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignPage;
