import React from "react";

const ZoomBanner = () => {
  return (
    <div className="w-full  bg-[#3ea498] text-white py-1 text-center">
      <div className="container mx-auto">
        <p className="text-lg md:text-2xl font-semibold">
          Join our meeting on Zoom! Click to register and attend.
        </p>
        <a
          href="https://us06web.zoom.us/meeting/register/I7SXAXvhQmqyKfyXLHCTRQ"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block animate-bounce bg-orange-700 text-white px-6 py-4 rounded-md font-semibold hover:bg-green-700 transition-colors"
        >
          Join Zoom Meeting
        </a>
      </div>
    </div>
  );
};

export default ZoomBanner;
