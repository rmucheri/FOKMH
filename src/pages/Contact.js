import React from "react";

function Contact() {
  return (
    <div className="animate-slide-and-fade-in mt-10 mb-10">
      <form action="https://formspree.io/f/mrbgezwl" method="POST">
        <div
          id="contact-us"
          className="overflow-hidden bg-white py-16 px-4 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="relative mx-auto max-w-xl">
            <svg
              className="absolute left-full translate-x-1/2 transform"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200 dark:text-slate-600"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={404}
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>
            <svg
              className="absolute right-full bottom-0 -translate-x-1/2 transform"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200 dark:text-slate-800"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={404}
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>
            <div className="text-center">
              <h2 className=" font-extrabold tracking-tight text-[#3ea498] dark:text-slate-200 sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-4 text-xl leading-6 text-gray-500 dark:text-slate-400">
                Please use the form below to contact us. Thank you!
              </p>
            </div>
            <div className="mt-12">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700 dark:text-slate-400 pb-2"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    name="name"
                    type="text"
                    id="name"
                    autoComplete="organization"
                    placeholder="Enter your fullname"
                    required=""
                    className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700 dark:text-slate-400 py-2"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    id="email"
                    required=""
                    type="email"
                    placeholder="Email Address"
                    autoComplete="email"
                    className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700 dark:text-slate-400 py-2"
                >
                  Message
                </label>
                <div className="mt-1 mb-4">
                  <textarea
                    required=""
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows={4}
                    className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="flex justify-end sm:col-span-2">
                {/* <button
                type="submit"
                className="btn btn-primary inline-flex items-center rounded-md px-4 py-2 font-medium focus:outline-none focus-visible:ring focus-visible:ring-sky-500 shadow-sm sm:text-sm transition-colors duration-75 text-sky-500 border border-sky-500 hover:bg-sky-50 active:bg-sky-100 disabled:bg-sky-100 dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
              >
                <span>Send Message</span>
              </button> */}
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Send Message
                  </span>
                </button>
              </div>
              {/* <a
              href="https://veilmail.io/e/FkKh7o"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Or click here to reveal our protected email address
            </a> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
