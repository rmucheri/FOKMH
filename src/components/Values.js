import React from 'react'
import ValueCard from './Cards/ValueCard'
import values from './Content/valuecardcontent'

function Values() {
  return (
    <div  id='values' className=''>
        <h2 className="text-3xl text-center font-extrabold text-[#3ea498] mt-20">Our Values</h2>
    <div className='mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 text-justify'>
    {
        values.map(value =>(
        <ValueCard 
      header={value.header}
      content={value.content}
      />
        ))

        
    }

</div>
    </div>
  )
}

export default Values
