import { useState, useEffect } from "react";
import { ambulance, ECGmachine, waterHeater } from "../assets";

const CampaignPopup = () => {
  const [showCampaignModal, setShowCampaignModal] = useState(false);

  // This useEffect will run when the component mounts (when page loads)
  useEffect(() => {
    setShowCampaignModal(true);
  }, []);

  return (
    <>
      {showCampaignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
            <h2 className="text-2xl font-bold mb-4 text-[#3ea498] text-center">
              FOKMH BBQ fundraising campaign
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <img
                src={ambulance}
                alt="Land Cruiser"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src={ECGmachine}
                alt="ECG Machine"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src={waterHeater}
                alt="Solar Geyser"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <div className="text-gray-700 mb-6">
              <p className="mb-4">
                Help us improve healthcare delivery at Karanda Mission Hospital
                through three crucial projects:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Land Cruiser for rural outreach programs</li>
                <li>ECG machine for improved cardiac diagnostics</li>
                <li>Solar water geysers for enhanced patient care</li>
              </ul>
              <p className="text-sm text-gray-600">
                Your support can make a significant difference in the lives of
                our patients.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <a
                href="/fundraising"
                className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
              >
                Learn More
              </a>

              <a
                href="/donate"
                className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
              >
                Support Our Fundraising Initiative
              </a>

              <button
                onClick={() => setShowCampaignModal(false)}
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
