import React from 'react';
import { doctorl, doctorp, nursel, nursep } from '../assets';

function HeroBottom() {
  return (
    <div class="w-full  lg:px-60">
    <div className=" w-full bg-white dark:bg-gray-800 mb-10">
      <div className="flex flex-col lg:flex-row lg:items-center ">
        <div className="sm:w-full lg:w-1/2 md:py-12 sm:px-4 lg:py-8 lg:px-2">
   
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block px-2 text-gray-600">Meet Our Heroes Behind the Scenes

Content:</span>
          </h2>
          <p className="text-md mt-4 text-gray-400 px-2 text-justify">
          At Karanda Mission Hospital, our dedicated team of doctors, 
          nurses, and hospital staff work tirelessly to provide exceptional 
          care to our cancer patients. Their unwavering commitment and 
          compassion are the driving forces behind our mission to deliver t
          op-notch medical services.
          </p>

          <p className="text-md mt-4 text-gray-400 px-2 text-justify">
          Dr. Paul Thistle - Head of Oncology
          Leading our oncology department is Dr. Paul Thistle, whose 
          expertise and passion for cancer care have transformed the lives of 
          countless patients. Originally from Canada, Dr. Thistle has dedicated
           over two decades to serving the people of Zimbabwe. His commitment to 
           improving healthcare access in rural areas has earned him widespread
            respect and admiration. Under his leadership, our oncology department 
            has implemented innovative treatments and care protocols that 
            have significantly improved patient outcomes.
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
        <div className="w-full flex items-center gap-8 p-4 lg:p-24">
        <div  className='w-1/2 w-full shadow-gray-700 rounded-lg shadow-lg'>
        <img
            style={{width: "100%"}}
            src="https://clubrunner.blob.core.windows.net/00000000662/Images/Rotopics%202019-2020%20by%20Michael/2019-12-16%20xmas%20dinner/Sonosite-2---Mother-and-Baby-and--Scan.jpg"
            className="w-  rounded-lg hover:scale-110"
            alt="Nurse"
          />
        </div>
        
          <div className="w-full flex flex-col gap-12 lg:w-1/2 ">
              <div className='w-full shadow-gray-700 rounded-lg shadow-lg'>
              <img
                
                src="https://betterhealthcareforafrica.org/wp-content/uploads/2019/05/PaulThistle_Karanda2018_02-1024x683.jpg"
                className="rounded-lg hover:scale-110"
                alt="Nurse"
              />

              </div>
              <div className='w-full shadow-gray-700 rounded-lg shadow-lg hover:scale-110'>
              <img
                  src="https://med-fom-globalhealth.sites.olt.ubc.ca/files/2016/11/2016-RS-5-ZimCan-Karanda-Doc-3.jpg"
                  className="rounded-lg "
                  alt="Doctor"
                />

              </div>
          
          
          </div>
        </div>
        
      </div>
    </div>
    <hr/>
    </div>
  );
}

export default HeroBottom;
