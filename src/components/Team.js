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
    <div id="team" className="bg-white py-24 sm:py-32">
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Meet our leadership
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
          elementum enim vitae ullamcorper suspendisse.
        </p>
      </div>
      <ul
        role="list"
        className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
      >
        <li>
          <div className="flex items-center gap-x-6">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                Leslie Alexander
              </h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600">
                Co-Founder / CEO
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-x-6">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                Leslie Alexander
              </h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600">
                Co-Founder / CEO
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-x-6">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                Leslie Alexander
              </h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600">
                Co-Founder / CEO
              </p>
            </div>
          </div>
        </li>
        {/* More people... */}
      </ul>
      <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
        </div>
    </div>
  </div>
  
  )
}

export default Team
