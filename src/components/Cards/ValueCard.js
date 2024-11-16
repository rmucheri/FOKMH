import React from 'react'
import values from '../Content/valuecardcontent'

function ValueCard(props) {
  return (
    <div class="mx-auto relative flex flex-col mt-6 text-gray-700 bg-white shadow-lg bg-clip-border rounded-md w-64">
  <div class="p-2">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[#3ea498]">
      {props.header}
    </h5>
    <p class="block font-sans text-gray-600 antialiased font-light leading-relaxed text-inherit">
     {props.content}
    </p>
  </div>
  {/* <div class="p-6 pt-0">
    <button
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </button>
  </div> */}
</div>
  )
}

export default ValueCard
