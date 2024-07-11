import React from 'react'
import { logo1, logo2, logo3, logothree, tranlogo2 } from '../assets'

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    // <div className='bg-[#3ea498]'>
      <div className='bg-[#0B123F]'>
    <footer class="text-gray-600 body-font">
<div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
  {/* <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
  <a href="/" className="-m-1.5 p-1.5">
          
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            <span style={{fontSize: "2.5rem"}} className='text-white text-xl text-bold'>FOKMH</span>
          </a>
    
  </div> */}
   <div className="flex lg:flex-1">
       
       <a href="/" className="">
         <span className="sr-only">Friends of Karanda</span>
         <img className="h-24 z-99 w-auto animate-bounce" src={tranlogo2} alt="" />
         {/* <span style={{fontSize: "2.5rem"}} text-[#ffd832] className='leading-6 text-gray-900 text-xl text-bold'>FOKMH</span> */}
         <a style={{fontSize: "1.8rem"}} href="/" className="text-[#3ea498] text-xl font-semibold leading-6">FOKMH</a>
       </a>
     </div>
  <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
  
      <nav class="list-none mb-10">
        <li>
          <a class="text-white hover:text-orange-700">Home</a>
        </li>
        <li>
          <a class="text-white hover:text-orange-700">About</a>
        </li>
        <li>
          <a class="text-white hover:text-orange-700">Causes</a>
        </li>
        <li>
          <a class="text-white hover:text-orange-700">Contact</a>
        </li>
        <li>
          <a class="text-white hover:text-orange-700">FAQs</a>
        </li>
      </nav>
    </div>
    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
  
  
    </div>
    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
      
      <nav class="list-none mb-10">
        <li>
          <a class="text-white hover:text-orange-700">PARTNERS</a>
        </li>
        <li>
          <a class="text-white hover:text-orange-700">Magetsi</a>
        </li>
        <li>
          <a class="text-white hover:text-orange-700">Solvaxion</a>
        </li>
        <li>
          <a class="text-white hover:text-orange-700">Wildrose</a>
        </li>
        <li>
          <a class="text-white hover:text-orange-700">AWS</a>
        </li>
      </nav>
    </div>
    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
   
     
    </div>
  </div>
</div>
<div class="bg-gray-100">
  <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
    <p class="text-gray-500 text-sm text-center sm:text-left"> © Copyright {currentYear} Rufaro Mucheri (<a href='https://magetsi.co.zw/'>magetsi.co.zw</a>)
      <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank"></a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
    <p className="text-xs">Powered by <a href='magetsi.co.zw'>Magetsi </a> </p>
      {/* <a class="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a> */}
      {/* <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a> */}
    </span>
  </div>
</div>

</footer>
  </div>
  )
}

export default Footer
