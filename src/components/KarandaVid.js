import React from "react";

function KarandaVid() {
  return (
    <div className="flex justify-center items-center md:mt-6 lg:my-10">
      <div className="shadow-gray-500 shadow-lg w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <div className="relative w-full pb-[70.25%] h-0 overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/FJmkXMFt7I8?si=Eszwt96NPqLeYzOF"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default KarandaVid;
