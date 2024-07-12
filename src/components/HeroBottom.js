import React from 'react';
import { doctorl, doctorp, nursel, nursep } from '../assets';

function HeroBottom() {
  return (



    <div>

<section className="bg-white dark:bg-gray-900">
  <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-4 lg:px-6">
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">

    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
             <span className="block px-2 text-[#3ea498]">Meet Our Heroes Behind the Scenes<br/><br/>

 </span>
           </h2>

     
                <p className="text-justify">
           At Karanda Mission Hospital, our dedicated team of doctors, 
          nurses, and hospital staff work tirelessly to provide exceptional 
           care to our cancer patients. Their unwavering commitment and            
           compassion are the driving forces behind our mission to deliver top-notch medical services. <br/><br/>
           Dr. Paul Thistle, originally from Canada, has dedicated over two decades to serving the people of Zimbabwe. As Medical Director, his expertise and passion for patient care have transformed countless lives. His commitment to improving healthcare access in rural areas has earned him widespread respect and admiration. Under his leadership, he has implemented innovative treatments and care protocols, significantly improving patient outcomes.

           </p>

      <p>
      </p>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-8">
      <img
        className="w-full rounded-lg"
        src="https://clubrunner.blob.core.windows.net/00000000662/Images/Rotopics%202019-2020%20by%20Michael/2019-12-16%20xmas%20dinner/Sonosite-2---Mother-and-Baby-and--Scan.jpg"
        alt="office content 1"
      />
      <img
        className="mt-4 w-full lg:mt-10 rounded-lg"
        src={doctorp}
        alt="office content 2"
      />
    </div>
  </div>
</section>

    </div>


  );
}

export default HeroBottom;
