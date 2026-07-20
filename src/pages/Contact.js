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
              <h2 className="font-display tracking-tight font-extrabold text-brand-teal dark:text-slate-200 text-3xl sm:text-4xl">
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
                    required
                    className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-brand-teal focus:ring-brand-teal dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
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
                    required
                    type="email"
                    placeholder="Email Address"
                    autoComplete="email"
                    className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-brand-teal focus:ring-brand-teal dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
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
                    required
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows={4}
                    className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-brand-teal focus:ring-brand-teal dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="flex justify-end sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center min-h-[44px] rounded-full bg-brand-teal px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-brand-teal-dark hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                >
                  Send Message
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
