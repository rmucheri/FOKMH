import React from 'react'
import ValueCard from './Cards/ValueCard'
import values from './Content/valuecardcontent'

function Values() {
    
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
    <div  id='values' className=' flex flex-col items-center'>
        <h2 className="text-3xl text-center font-extrabold text-[#3ea498] mt-20">Our Values</h2>
    <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 '>
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
    </section>
  )
}

export default Values
