import React from 'react';
import { doctorl, doctorp, nursel, nursep } from '../assets';

function HeroBottom() {
  return (
    <div className="w-full bg-white dark:bg-gray-800">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Mother hearth host your travel</span>
          </h2>
          <p className="text-md mt-4 text-gray-400">
            The state of Utah in the united states is home to lots of beautiful
            National parks, Bryce national canyon park ranks as three of the most
            magnificent &amp; awe-inspiring.
          </p>
          <div className="mt-12">
            <button
              type="button"
              className="py-2 px-4 bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Get started
            </button>
          </div>
        </div>
        <div className="w-full flex items-center gap-8 p-8 lg:p-24">
        <div className='lg:w-1/2 '>
        <img
            style={{width: "90%"}}
            src={nursep}
            className="w-full  rounded-lg"
            alt="Nurse"
          />
        </div>
        
          <div className="flex flex-col gap-12 w-full lg:w-1/2">
            <img
              src={nursel}
              className="w-full h-1/2 rounded-lg"
              alt="Nurse"
            />
            <img
              src={doctorl}
              className="w-full h-1/2 rounded-lg"
              alt="Doctor"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default HeroBottom;
