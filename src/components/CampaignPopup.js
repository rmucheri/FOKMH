import { useState, useEffect } from "react";
import { ambulance, ECGmachine, waterHeater } from "../assets";

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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 md:p-8">
              {/* Header */}
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#3ea498] text-center">
                Ongoing Fundraising Campaign
              </h2>

              {/* Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4 sm:mb-6">
                <img
                  src={ambulance}
                  alt="Land Cruiser"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg"
                />
                <img
                  src={ECGmachine}
                  alt="ECG Machine"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg"
                />
                <img
                  src={waterHeater}
                  alt="Solar Geyser"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg sm:col-span-2 md:col-span-1"
                />
              </div>

              {/* Content */}
              <div className="text-gray-700 mb-4 sm:mb-6">
                <p className="mb-3 text-sm sm:text-base">
                  Help us improve healthcare delivery at Karanda Mission
                  Hospital through three crucial projects:
                </p>
                <ul className="list-disc list-inside mb-3 text-sm sm:text-base pl-2">
                  <li>Land Cruiser for rural outreach programs</li>
                  <li>ECG machine for improved cardiac diagnostics</li>
                  <li>Solar water geysers for enhanced patient care</li>
                </ul>
                <p className="text-xs sm:text-sm text-gray-600">
                  Your support can make a significant difference in the lives of
                  our patients.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col space-y-3">
                <a
                  href="/fundraising"
                  className="inline-flex justify-center items-center py-2 sm:py-3 px-4 sm:px-5 text-base sm:text-xl font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800 transition-colors"
                >
                  Learn More
                </a>

                <button
                  onClick={handleDonateClick}
                  className="inline-flex justify-center items-center py-2 sm:py-3 px-4 sm:px-5 text-base sm:text-xl font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800 transition-colors"
                >
                  Support Our Fundraising Initiative
                </button>

                <button
                  onClick={() => setShowCampaignModal(false)}
                  className="py-2 text-base sm:text-xl text-red-600 hover:text-red-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Donation Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#3ea498] text-center">
              Choose Donation Region
            </h2>
            <div className="flex flex-col space-y-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://give.team.org/give/672997/#!/donation/checkout"
                className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
              >
                USA Donations
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://give.ca.team.org/give/673060/#!/donation/checkout"
                className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
              >
                Canada Donations
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://magetsi.co.zw/billers/pay/TVRnPQ/friends-of-karanda-mission-hospital"
                className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
              >
                International Donations
              </a>
              <button
                onClick={() => setShowDonateModal(false)}
                className="mt-4 text-xl text-red-600 hover:text-red-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CampaignPopup;
