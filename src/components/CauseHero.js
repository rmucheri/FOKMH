import React, { useState } from "react";
import xrays from "../assets/images/xrays.jpg";
import charthos from "../assets/images/charthos.jpg";
import docspatient from "../assets/images/docspatient.jpg";
import tranlogo2 from "../assets/images/tranlogo2.png";
import Button from "./Botton"; // Ensure this is the correct path to your Button component

const causes = [
  {
    title: "Comprehensive Cancer Care",
    subtitle: "Providing Hope and Healing Through Advanced Cancer Treatment",
    content:
      "At Karanda Mission Hospital, They are committed to offering comprehensive cancer care to economically disadvantaged patients. Your donations enable them to provide state-of-the-art treatments, including chemotherapy, radiation therapy, and surgical interventions. By supporting our cancer care program, you help them cover the cost of expensive medications and cutting-edge technologies that are essential for effective treatment. Additionally, they provide emotional and psychological support to patients and their families, ensuring they receive holistic care. Every contribution makes a significant difference, turning the tide against cancer and offering hope to those in desperate need.",
    image: xrays, // Ensure this image is properly imported
    icon: tranlogo2,
  },
  {
    title: "Community Outreach and Education",
    subtitle: "Empowering Communities Through Knowledge and Prevention",
    content:
      "Prevention is a powerful tool in the fight against cancer. At Karanda Mission Hospital, they believe in the importance of educating communities about cancer prevention, early detection, and healthy living. Your support allows them to conduct extensive outreach programs, including workshops, health fairs, and screening camps in rural areas. These initiatives help identify cancer at its earliest stages, increasing the chances of successful treatment. They also provide educational materials and resources to raise awareness about the risk factors and symptoms of cancer. Together, we can empower communities with the knowledge they need to prevent cancer and live healthier lives.",
    image: charthos, // Ensure this image is properly imported
    icon: tranlogo2,
  },
  {
    title: " Patient Support Services",
    subtitle: "Supporting Patients Every Step of the Way",
    content:
      "Cancer treatment can be a long and arduous journey. At Karanda Mission Hospital, They offer a range of support services to ensure patients and their families are not alone in this fight. Your donations help them provide transportation for patients traveling from remote areas, accommodation for those undergoing long-term treatment, and nutritional support to aid recovery. They also offer counseling and support groups to help patients cope with the emotional and psychological challenges of cancer. By contributing to their patient support services, you ensure that every patient receives the comprehensive care they need to navigate their treatment journey with dignity and hope.",
    image: docspatient, // Ensure this image is properly imported
    icon: tranlogo2,
  },
];

function CauseHero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="animate-slide-and-fade-in text-gray-600 body-font">
        <div className="px-5 py-4 mt-10 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            {causes.map((cause, index) => (
              <div className="mb-20" key={index}>
                <div className="rounded-lg h-96 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={cause.image}
                  />
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-20 h-20 m-1 p-1 rounded-full inline-flex items-center justify-center bg-white border border-gray-100 text-gray-400">
                      <img src={cause.icon} alt={cause.title} />
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                      <h2 className="font-medium title-font mt-4 text-[#3ea498] text-lg">
                        {cause.title}
                      </h2>
                      <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                      <p className="text-base">{cause.subtitle}</p>
                    </div>
                  </div>
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-lg mb-4 text-justify">
                      {cause.content}
                    </p>
                    <Button setShowModal={setShowModal} />
                  </div>
                </div>
              </div>
            ))}
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
    </>
  );
}

export default CauseHero;
