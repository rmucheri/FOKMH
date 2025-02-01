import React from "react";

const ZoomBanner = () => {
  return (
    <div className="sticky top-20 z-50 w-full  bg-gradient-to-r from-[#3ea498] via-[#0be699] to-[#11eed4]  text-white py-1 text-center">
      <div className="container mx-auto">
        <p className="text-lg md:text-2xl font-semibold">
          Join our meeting on Zoom! Click to register and attend.
        </p>
        <a
          href="https://us06web.zoom.us/meeting/register/I7SXAXvhQmqyKfyXLHCTRQ"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block animate-bounce bg-orange-700 text-white px-6 py-4 rounded-md font-semibold hover:bg-orange-600 transition-colors"
        >
          Join Zoom Meeting
        </a>
      </div>
    </div>
  );
};

export default ZoomBanner;

<section className="hero bg-gradient-to-r from-[#3ea498] via-[#66d9b0] to-[#3ea498] py-20 md:py-32 text-white">
  <div className="container px-8 md:px-8 lg:px-28">
    <div className="grid grid-cols-12 justify-center mb-16">
      <div className="col-span-12 lg:col-span-6 lg:col-start-4 lg:px-12 text-center">
        <h2 className="ibm-plex-sans-bold text-3xl md:text-5xl leading-none font-bold mb-6">
          Join Our Exciting Event!
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Don't miss out on the latest trends and discussions. Register now to
          be part of our online experience.
        </p>
        <a
          href="https://us06web.zoom.us/meeting/register/I7SXAXvhQmqyKfyXLHCTRQ"
          target="_blank"
          className="inline-flex items-center rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        >
          Register Now
        </a>
      </div>
    </div>
  </div>
</section>;
