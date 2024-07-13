import React, { useEffect, useState } from 'react';
import { charthos, checkup, docspatient, hosfrtdesk, hospital, karadoc, operation, xrays } from '../assets';

const backgroundImage = [operation, hospital, xrays, charthos, checkup, docspatient, hosfrtdesk, karadoc];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * backgroundImage.length);
  return backgroundImage[randomIndex];
};

function Hero() {
  const [bgImage, setBgImage] = useState(getRandomImage());

  useEffect(() => {
    setBgImage(getRandomImage());
  }, []);

  return (
    <div className=''>
      <section  style={{ backgroundImage: `url(${bgImage})` }} className="bg-center bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply">
  <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-300 md:text-5xl lg:text-6xl">
      Friends of Karanda Mission Hospital
    </h1>
    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
    "Support Life, Inspire Hope: Join Us in the Fight Against Cancer at Karanda Mission Hospital"
    </p>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
      <a
        href="#"
        className="inline-flex justify-center items-center py-4 px-8 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 hover:scale-110"
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
        href="#"
        className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 hover:scale-110"
      >
        More Information 
      </a>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
