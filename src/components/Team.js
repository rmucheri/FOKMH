import React, { useState } from 'react'

function Team() {

  const AccordionItem = ({ header, text }) => {
    const [active, setActive] = useState(false);

    const handleToggle = (event) => {
      event.preventDefault();
      setActive(!active);
    };

    return (
      <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
        <button
          className={`faq-btn flex w-full text-left`}
          onClick={handleToggle}
        >
          <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
            <svg
              className={`fill-primary stroke-primary duration-200 ease-in-out ${
                active ? "rotate-180" : ""
              }`}
              width="17"
              height="10"
              viewBox="0 0 17 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                fill=""
                stroke=""
              />
            </svg>
          </div>

          <div className="w-full">
            <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
              {header}
            </h4>
          </div>
        </button>

        <div
          className={`pl-[62px] duration-200 ease-in-out ${
            active ? "block" : "hidden"
          }`}
        >
          <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
            {text}
          </p>
        </div>
      </div>
    );
  };

  return (
    // <div id="team" className="bg-white py-24 sm:py-32">
    <div id="team" className="bg-white py-24 sm:py-32">
       <div className=" container  px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-32">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Meet our leadership
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
        Leading with Compassion, Serving with Heart.
        Dedicated to Transforming Lives at Karanda.
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
    className="h-40 w-40 rounded-full mx-auto"
    src="https://media.licdn.com/dms/image/D5603AQHSvrsbRqQFtA/profile-displayphoto-shrink_200_200/0/1707094646587?e=1725494400&v=beta&t=cbHD_Rmcdksq4lw3571KZZZ5behFE3j3PQ0s5DwuBMI"
    alt="Mwandibhuya Mutepfa"
  />
  <div className="text-center justify-center">
    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
      Mwandibhuya Mutepfa
    </h3>
    <p className="text-sm font-semibold leading-6 text-indigo-600">
      Co-Founder / CEO
    </p>
  </div>
</div>

        </li>
        <li>
          <div className="flex flex-col items-center gap-y-4">
  <img
    className="h-40 w-40 rounded-full"
              src="https://media.licdn.com/dms/image/D5603AQF0Rb3P-DBkMA/profile-displayphoto-shrink_200_200/0/1719100241898?e=1725494400&v=beta&t=2yJ2cFTln_Tgdc0gI0JyJqvVVcDMsxoA1I_0sMxRGEE"
    alt="Rufaro Mucheri"
  />
  <div className="text-center">
    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
    Rufaro Mucheri
    </h3>
    <p className="text-sm font-semibold leading-6 text-indigo-600">
    Co-Founder / CTO
    </p>
  </div>
</div>

        </li>
        <li>
        <div className="flex flex-col items-center gap-y-4">
  <img
    className="h-40 w-40 rounded-full"
              src="https://alumni.med.ubc.ca/files/2018/02/IMG_4984-225x300.jpg"
    alt="Rufaro Mucheri"
  />
  <div className="text-center">
    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
    James Watt
    </h3>
    <p className="text-sm font-semibold leading-6 text-indigo-600">
    Co-Founder / Medical Doctor
    </p>
  </div>
</div>
        </li>
        {/* More people... */}
      </ul>
      </div>
      <div className='sm:px-8 md:px-4 lg:px-8 xl:px-8'> 
      <h2 className="py-16 text-3xl text-center font-extrabold text-gray-900">Board Members</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
  <div className="w-full sm:px-4">
    <AccordionItem
      header="Thomas Gondo"
      text="Thomas Gondo is a Licensed Land Surveyor in Ontario Canada and the President of Lejan Land Surveying Inc, a Licensed Practice also in the province of Ontario. He has consistently been involded in efforts to fundraise for Karanda Hospital."
    />
  </div>
  <div className="w-full sm:px-4">
    <AccordionItem
      header="Paul Pogba"
      text="Dynamos Dembare Midfielder"  />
  </div>
  <div className="w-full px-4">
    <AccordionItem
     header="Paul Pogba"
     text="Dynamos Dembare Midfielder"  />
  </div>
  <div className="w-full px-4">
    <AccordionItem
  header="Paul Pogba"
  text="Dynamos Dembare Midfielder" />
  </div>
  <div className="w-full px-4">
    <AccordionItem
      header="Paul Pogba"
      text="Dynamos Dembare Midfielder"  />
  </div>
  <div className="w-full px-4">
    <AccordionItem
     header="Paul Pogba"
     text="Dynamos Dembare Midfielder"  />
  </div>
  <div className="w-full px-4">
    <AccordionItem
  header="Paul Pogba"
  text="Dynamos Dembare Midfielder" />
  </div>
  <div className="w-full px-4">
    <AccordionItem
      header="Paul Pogba"
      text="Dynamos Dembare Midfielder"  />
  </div>
  <div className="w-full px-4">
    <AccordionItem
header="Paul Pogba"
text="Dynamos Dembare Midfielder" />
  </div>
  <div className="w-full sm:px-4">
    <AccordionItem
      header="Paul Pogbas"
      text="Dynamos Dembare Midfielder"
    />
  </div>
  <div className="w-full px-4 ">
    <AccordionItem
      header="Paul Pogba"
      text="Dynamos Dembare Midfielder"  />
  </div>
  <div className="w-full px-4 ">
    <AccordionItem
     header="Paul Pogba"
     text="Dynamos Dembare Midfielder"  />
  </div>
  <div className="w-full px-4 ">
    <AccordionItem
  header="Paul Pogba"
  text="Dynamos Dembare Midfielder" />
  </div>
  <div className="w-full px-4 ">
    <AccordionItem
      header="Paul Pogba"
      text="Dynamos Dembare Midfielder"  />
  </div>
  <div className="w-full px-4 ">
    <AccordionItem
header="Paul Pogba"
text="Dynamos Dembare Midfielder" />
  </div>
  <div className="w-full px-4">
    <AccordionItem
      header="Paul Pogba"
      text="Dynamos Dembare Midfielder"
    />
  </div>
  <div className="w-full px-4 ">
    <AccordionItem
      header="Paul Pogba"
      text="Dynamos Dembare Midfielder"  />
  </div>
  <div className="w-full px-4 ">
    <AccordionItem
     header="Paul Pogba"
     text="Dynamos Dembare Midfielder"  />
  </div>
  <div className="w-full px-4 ">
    <AccordionItem
  header="Paul Pogba"
  text="Dynamos Dembare Midfielder" />
  </div>
  <div className="w-full px-4 ">
    <AccordionItem
      header="Paul Pogba"
      text="Dynamos Dembare Midfielder"  />
  </div>
  <div className="w-full px-4 ">
    <AccordionItem
      header="Paul Pogba"
      text="Dynamos Dembare Midfielder"  />
  </div>
  <div className="w-full px-4 ">
    <AccordionItem
header="Paul Pogba"
text="Dynamos Dembare Midfielder" />
  </div>
  <div className="w-full px-4 ">
    <AccordionItem
      header="Paul Pogba"
      text="Dynamos Dembare Midfielder"  />
  </div>
  <div className="w-full px-4 ">
    <AccordionItem
      header="Paul Pogba"
      text="Dynamos Dembare Midfielder"  />
  </div>
  <div className="w-full px-4 ">
    <AccordionItem
header="Paul Pogba"
text="Dynamos Dembare Midfielder" />
  </div>
</div>
    </div>
  </div>
  
  )
}

export default Team
