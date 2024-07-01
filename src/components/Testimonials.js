import React from 'react'

function Testimonials() {
  return (
    <div>
     <section className="px-8 py-10 lg:py-28">
  <div className="container mx-auto">
    <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-blue-gray-900 mb-4 !text-2xl lg:!text-4xl">
      The heartfelt testimonials of our community
    </h2>
    <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit max-w-3xl !text-gray-500 mb-10 lg:mb-20">
      From life-enhancing gadgets to unparalleled customer support, and
      transformative learning opportunities.
    </p>
    <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
      <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 bg-gray-100/50 rounded-2xl p-6">
        <div className="relative bg-clip-border !mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none">
          <p className="block antialiased font-sans leading-relaxed text-blue-gray-900 lg:mb-20 mb-4 text-2xl font-bold">
            "{/* */}The team went above and beyond to ensure my issue was
            resolved quickly and efficiently. Truly outstanding!{/* */}"
          </p>
        </div>
        <div className="p-6 px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
          <div>
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Jessica Devis
            </h6>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
              Full Stack Developer @Netflix
            </p>
          </div>
          <img
            src="/image/netflix.svg"
            className="max-w-[8rem]"
            alt="Jessica Devis"
          />
        </div>
      </div>
      <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 bg-gray-100/50 rounded-2xl p-6">
        <div className="relative bg-clip-border !mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none">
          <p className="block antialiased font-sans leading-relaxed text-blue-gray-900 lg:mb-20 mb-4 text-2xl font-bold">
            "{/* */}It have broadened my horizons and helped me advance my
            career. The community is incredibly supportive.{/* */}"
          </p>
        </div>
        <div className="p-6 px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
          <div>
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Marcell Glock
            </h6>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
              Graphic Designer, @Coinbase
            </p>
          </div>
          <img
            src="https://www.material-tailwind.com/image/Logo-coinbase.svg"
            className="max-w-[8rem]"
            alt="Marcell Glock"
          />
        </div>
      </div>
    </div>
    <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 mt-8 bg-gray-100/50 text-center rounded-2xl p-6">
      <div className="relative bg-clip-border !mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none">
        <p className="block antialiased font-sans text-blue-gray-900 mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold">
          "Its intuitive design and powerful features make it indispensable. I
          can't imagine going back to life before it!"
        </p>
      </div>
      <div className="p-6 items-center mx-auto py-2">
        <img
          src="/image/spotify.svg"
          className="max-w-[8rem] mx-auto grayscale"
          alt="spotify"
        />
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
          Emma Roberts
        </h6>
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
          Chief Executive @Spotify
        </p>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Testimonials
