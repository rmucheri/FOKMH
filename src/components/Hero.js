import React, { useEffect, useState } from "react";
import { kmhgate } from "../assets";

const karanda1 =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/302dbc06-51e9-496e-9845-290226370ad3/DSCF7739.jpg?format=750w";
const karanda2 =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/a701a090-4ecc-4d3d-8795-de33b253959a/DSCF7726.jpg";
const karanda3 =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/40471144-1aa4-4551-856e-2b99078c40ac/Nursing+School+3.jpg";
const karanda4 =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/1695396378380-6SV0BLJZZP5B07WGVHS7/61C83E21-1427-4C39-9096-C82AF10A4769.jpg?format=2500w";
const karanda5 =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/5b8787f2-2c4d-4d24-bba0-903551ca1f75/DSCF8584.jpg";
const karanda6 =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/1c811416-d6c4-4b49-80f5-d340616162a1/IMG_7744.JPEG?format=2500w";

const karanda7 = { kmhgate };

const backgroundImage = [
  karanda1,
  karanda2,
  karanda3,
  karanda4,
  karanda5,
  karanda6,
  karanda7,
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * backgroundImage.length);
  return backgroundImage[randomIndex];
};

function Hero() {
  const [bgImage, setBgImage] = useState(getRandomImage());
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setBgImage(getRandomImage());
  }, []);

  const handleDonateClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };


  return (
    <div className="animate-slide-and-fade-in z-0">
      <section
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-center bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply"
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-44              ">
  <div className="mb-6 py-2 bg-orange-600 bg-opacity-80 rounded-lg animate-pulse">
    <p className="text-white text-lg">
      🏥 Special Campaign: Help us acquire vital medical equipment and transport
      <a 
        href="#"
        onClick={handleDonateClick}
        className="underline ml-2 font-bold hover:text-[#3ea498]"
      >
        Learn More →
      </a>
    </p>
  </div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Friends of Karanda Mission Hospital
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48">
            "Support Life, Inspire Hope: Join Us in the Fight Against Cancer at
            Karanda Mission Hospital in our Patient Sponsorship Program,
            <br />{" "}
            <a href="/causes">
              <span className="text-4xl font-extrabold text-orange-700 animate-pulse">
                "Adopt a Patient”
              </span>{" "}
            </a>
          </p>


          
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
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
          </a>
          <a
            href="/about"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 hover:scale-110"
          >
            More Information
          </a>
        </div>



         {/* Modal */}
         {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
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
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 text-xl text-red-600 hover:text-red-800"
              >
                Close
              </button>
            </div>
          </div>
        )}
        </div>
     
      </section>
    </div>
  );
}

export default Hero;
