import { useState, useEffect } from "react";
import { ambulance } from "../assets";

const CampaignPopup = () => {
  const [showCampaignModal, setShowCampaignModal] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);

  useEffect(() => {
    setShowCampaignModal(true);
  }, []);

  const handleDonateClick = (e) => {
    e.preventDefault();
    setShowDonateModal(true);
    // Optionally close the campaign modal when opening donate modal
    // setShowCampaignModal(false);
  };

  return (
    <>
      {showCampaignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Header with Gradient */}
            <div className="bg-gradient-to-r from-[#3ea498] to-cyan-600 px-6 py-8 text-white text-center relative">
              <button
                onClick={() => setShowCampaignModal(false)}
                className="absolute top-4 right-4 text-2xl hover:text-gray-200 transition-colors"
              >
                ✕
              </button>
              <h2 className="text-3xl font-bold mb-2">
                Make a Real Impact! 🚑
              </h2>
              <p className="text-lg opacity-95">
                Help us reach more patients with our Land Cruiser
              </p>
            </div>

            <div className="p-4 sm:p-4">
              {/* Featured Image */}
              <div className="mb-2 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={ambulance}
                  alt="Land Cruiser for Medical Outreach"
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Campaign Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Land Cruiser for Medical Outreach
              </h3>

              {/* Impact Section */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#3ea498] mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">✨</span>
                  Your Impact
                </h4>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-[#3ea498] mr-3 text-xl">✓</span>
                    <span>Enable outreach to 50+ remote villages annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3ea498] mr-3 text-xl">✓</span>
                    <span>
                      Provide emergency medical transport for critical cases
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3ea498] mr-3 text-xl">✓</span>
                    <span>Save lives through reliable healthcare delivery</span>
                  </li>
                </ul>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                A reliable Land Cruiser is essential for reaching underserved
                communities and providing critical medical services. Your
                donation will directly enable us to expand our healthcare reach
                and save lives.
              </p>

              {/* Buttons */}
              <div className="flex flex-col space-y-3">
                <button
                  onClick={handleDonateClick}
                  className="w-full py-3 px-6 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-[#3ea498] to-cyan-600 hover:from-[#2d8276] hover:to-cyan-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  💚 Donate Now
                </button>

                <a
                  href="/fundraising"
                  className="w-full py-3 px-6 text-lg font-semibold text-[#3ea498] border-2 border-[#3ea498] rounded-xl hover:bg-gray-50 transition-all duration-200"
                >
                  Learn More
                </a>

                <button
                  onClick={() => setShowCampaignModal(false)}
                  className="py-3 text-gray-600 hover:text-gray-900 font-semibold transition-colors"
                >
                  Maybe Later
                </button>
              </div>

              {/* Trust Badge */}
              <div className="text-center text-xs text-gray-500 mt-4">
                <p>🔒 Secure donations · 100% transparent · Direct impact</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Donation Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[10000] p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#3ea498] to-cyan-600 px-8 py-12 text-white text-center relative">
              <button
                onClick={() => setShowDonateModal(false)}
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
            <div className="p-8 space-y-6">
              {/* Impact Section */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#3ea498]">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🚑</span>
                  Your Impact
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#3ea498] mr-3 text-xl">✓</span>
                    <span>Enable outreach to 50+ remote villages annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3ea498] mr-3 text-xl">✓</span>
                    <span>
                      Provide emergency medical transport for critical cases
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3ea498] mr-3 text-xl">✓</span>
                    <span>Support preventive healthcare initiatives</span>
                  </li>
                </ul>
              </div>

              {/* Donation Options */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Choose Your Region
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
                  className="w-full flex items-center justify-center py-4 px-6 text-lg font-semibold text-white rounded-xl bg-orange-600 hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
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
                onClick={() => setShowDonateModal(false)}
                className="text-gray-600 hover:text-gray-900 font-semibold transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CampaignPopup;
