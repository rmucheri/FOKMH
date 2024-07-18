import React from 'react'
import { ArrowPathIcon, BuildingOffice2Icon, CheckBadgeIcon,  MagnifyingGlassIcon, UserGroupIcon } from '@heroicons/react/24/outline'
// import  mamoyo  from '../assets/images/mamoyo.jpg'

const features = [
    {
      name: '500+ Cancer Patients Treated: ',
      description:
        'Through your generosity, we have been able to provide treatment to over 500 cancer patients.',
      icon: UserGroupIcon,
      // image: mamoyo
    },
    {
      name: '80% Survival Rate:',
      description:
        ' Our dedicated team ensures that patients receive the best possible care, leading to an 80% survival rate for treated cancers.',
      icon: CheckBadgeIcon,
    },
    {
      name: 'Community Outreach Programs:',
      description:
        "We've conducted numerous outreach programs to educate the community about cancer prevention and early detection.",
      icon: BuildingOffice2Icon,
    },
    {
      name: '150+ Early Detection Screenings Conducted:',
      description:
        'By expanding our screening programs, we have been able to detect cancer at earlier, more treatable stages for over 150 individuals, significantly improving their chances of successful treatment and recovery.',
      icon: MagnifyingGlassIcon,
    },
  ]
  

function Features() {
   
  return (
    <div className="bg-white py-12 sm:py-20 animate-slide-and-fade-in">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center ">
        <h3 className="text-2xl font-semibold leading-7 text-[#3ea498]">Overview of our Campaign</h3>
        <p className="mt-2 text-left  font-bold tracking-tight text-gray-700 sm:text-2xl">
        Let's Fight Against Cancer at Karanda Mission Hospital
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-justify mb-6">
        At Karanda Mission Hospital, we are dedicated to providing life-saving cancer treatments 
        to patients in need. Our mission is to ensure that no one faces cancer alone or without 
        the necessary care. Through the "Friends of Karanda" campaign, we aim to raise funds to 
        support our cancer program, enabling us to offer advanced treatments, improve patient care, 
        and provide much-needed resources. Your support can make a significant difference in the lives 
        of countless individuals battling cancer. Together, we can give hope and inspire healing.
        </p>
        <hr/>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl mb-8">
      <h3 className="text-2xl font-semibold leading-7 text-[#3ea498] lg:text-center  mb-8">Highlights of your Contributions</h3>
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-20">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div style={{backgroundColor: "#3ea498"}} className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon  className="h-12 w-12 text-white" aria-hidden="true" />
                </div>
                {/* {feature.image && <img src={feature.image} alt={feature.name} className="mt-4"/>} */}
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
          
        </dl>
      </div>
      <hr className='bg-gray-100 shadow-[#ffd832] shadow-lg'></hr>
    </div>
    
  </div>
  )
}

export default Features
