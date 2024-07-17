import React, { useState } from 'react'

function Teamleadership() {


  return (
    // <div id="team" className="bg-white py-24 sm:py-32">
    <div id="team" className="bg-gray-50 py-4 sm:py-32">
       <div className=" container  px-4 mx-auto max-w-screen-xl text-center py-4 lg:py-12">
        <h2 className="text-3xl font-bold tracking-tight text-[#3ea498] sm:text-4xl">
          Meet our leadership
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
        <span className='text-[#3ea498] text-xl'>Message from the CEO</span> <br/>
        My personal experiences with cancer have deeply shaped my perspective .... 
      <a href='/CEO' class="ml-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      <span class=" relative px-10 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Read More
      </span>
      </a>
        </p>
      </div>
    <div className="container mx-auto justify-evenly">
     
      <ul
        role="list"
        className="grid gap-x-2 gap-y-20 sm:grid-cols-1 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2 "
      >
        <li>
        <div className="flex flex-col items-center gap-y-4">
  <img
    className="h-44 w-44 rounded-full mx-auto"
    src="https://media.licdn.com/dms/image/D5603AQHSvrsbRqQFtA/profile-displayphoto-shrink_200_200/0/1707094646587?e=1725494400&v=beta&t=cbHD_Rmcdksq4lw3571KZZZ5behFE3j3PQ0s5DwuBMI"
    alt="Mwandibhuya Mutepfa"
  />
  <div className="text-center justify-center">
    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-700">
      Mwandibhuya Mutepfa
    </h3>
    <p className="text-sm font-semibold leading-6 text-[#3ea498]">
      Co-Founder / CEO
    </p>
  </div>
</div>

        </li>
        <li>
          <div className="flex flex-col items-center gap-y-4">
  <img
    className="h-44 w-44 rounded-full"
              src="https://media.licdn.com/dms/image/D5603AQF0Rb3P-DBkMA/profile-displayphoto-shrink_200_200/0/1719100241898?e=1725494400&v=beta&t=2yJ2cFTln_Tgdc0gI0JyJqvVVcDMsxoA1I_0sMxRGEE"
    alt="Rufaro Mucheri"
  />
  <div className="text-center">
    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-700">
    Rufaro Mucheri
    </h3>
    <p className="text-sm font-semibold leading-6  text-[#3ea498]">
    Co-Founder / CTO
    </p>
  </div>
</div>

        </li>
        <li>
        <div className="flex flex-col items-center gap-y-4">
  <img
    className="h-44 w-44 rounded-full"
              src="https://alumni.med.ubc.ca/files/2018/02/IMG_4984-225x300.jpg"
    alt="Rufaro Mucheri"
  />
  <div className="text-center">
    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-700">
    James Watt
    </h3>
    <p className="text-sm font-semibold leading-6 text-[#3ea498]">
    Co-Founder / Medical Doctor
    </p>
  </div>
</div>
        </li>
        {/* More people... */}
      </ul>
      </div>
      <h2 className="py-16 text-3xl text-center font-extrabold text-[#3ea498]">Board Members</h2>

      <p className='text-2xl text-center font-extrabold text-gray-600 animate-bounce'><a className='hover:scale-125' href='/board'>Click to view our Board Members</a></p>

      {/* <p className='text-2xl text-center font-extrabold text-gray-600 animate-bounce hover:scale-125'>Click to view our Board Members</p> */}

{/* end */}

  </div>
  
  )
}

export default Teamleadership
