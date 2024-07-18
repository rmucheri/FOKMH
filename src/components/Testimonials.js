import React from 'react'

function Testimonials() {
  return (
    <div>
     <section className="px-8 py-10 lg:py-28 bg-[#fffffd] shadow">
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
          <p className="block antialiased font-sans leading-relaxed text-blue-gray-900 lg:mb-20 mb-4  font-bold">
            "{/* */}Karanda Hospital has been a beacon of hope in my life. After being diagnosed with cancer, I was scared and uncertain about my future. The compassionate care and expert treatment I received at Karanda not only eased my fears but also gave me a renewed sense of strength and determination.{/* */}"
          </p>
        </div>
        <div className="p-6 px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
          <div>
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
            — Jane M.
            </h6>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
              Patient @Karanda
            </p>
          </div>
          {/* <img
            src="/image/netflix.svg"
            className="max-w-[8rem]"
            alt="Jessica Devis"
          /> */}
        </div>
      </div>
      <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 bg-gray-100/50 rounded-2xl p-6">
        <div className="relative bg-clip-border !mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none">
          <p className="block antialiased font-sans leading-relaxed text-blue-gray-900 lg:mb-20 mb-4  font-bold">
            "{/* */}I can't put into words the gratitude I feel towards Karanda Hospital. From the moment I walked through their doors, I was met with warmth and understanding. The entire medical team was incredibly supportive throughout my treatment, always taking the time to explain every step of the process and answer all my questions.{/* */}"
          </p>
        </div>
        <div className="p-6 px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
          <div>
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
            — Samuel T.
            </h6>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
              Patient @Karanda
            </p>
          </div>
          {/* <img
            src="https://www.material-tailwind.com/image/Logo-coinbase.svg"
            className="max-w-[8rem]"
            alt="Marcell Glock"
          /> */}
        </div>
      </div>
    </div>
    <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 mt-8 bg-gray-100/50 text-center rounded-2xl p-6">
      <div className="relative bg-clip-border !mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none">
        <p className="block antialiased font-sans text-blue-gray-900 mb-4  lg:!text-2xl max-w-4xl !leading-snug mx-auto font-bold">
          "Karanda Hospital is more than just a medical facility; it is a place of healing and hope. When I was diagnosed with cancer, I felt like my world was falling apart. However, the incredible team at Karanda provided not only exceptional medical care but also emotional support that helped me stay positive and strong."
        </p>
      </div>
      <div className="p-6 items-center mx-auto py-2">
        {/* <img
          src="/image/spotify.svg"
          className="max-w-[8rem] mx-auto grayscale"
          alt="spotify"
        /> */}
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
        — Emily R.
        </h6>
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
          Patient @Karanda
        </p>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Testimonials
