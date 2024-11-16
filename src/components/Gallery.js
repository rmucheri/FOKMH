import React from "react";

export function Gallery() {
  const data = [
    {
      imgelink:
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/302dbc06-51e9-496e-9845-290226370ad3/DSCF7739.jpg?format=750w",
    },
    {
      imgelink:
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/a701a090-4ecc-4d3d-8795-de33b253959a/DSCF7726.jpg",
    },
    {
      imgelink:
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/40471144-1aa4-4551-856e-2b99078c40ac/Nursing+School+3.jpg",
    },
    {
      imgelink:
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/1695396378380-6SV0BLJZZP5B07WGVHS7/61C83E21-1427-4C39-9096-C82AF10A4769.jpg?format=2500w",
    },
    {
      imgelink:
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/5b8787f2-2c4d-4d24-bba0-903551ca1f75/DSCF8584.jpg",
    },
    {
      imgelink:
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/1c811416-d6c4-4b49-80f5-d340616162a1/IMG_7744.JPEG?format=2500w",
    },
  ];

  const [active, setActive] = React.useState(data[0].imgelink);

  return (
    <div id="gallery" className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-5xl p-4">
        <div className="grid gap-4">
          <div>
          <h3 className="text-5xl text-bold text-center text-[#3ea498] mb-4">Gallery</h3>
            <img
              className="h-auto w-full max-w-full rounded-lg object-cover object-center shadow-gray-600 shadow-lg md:h-[480px]"
              src={active}
              alt="active gallery"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:cols-6 gap-4 ">
            {data.map(({ imgelink }, index) => (
              <div key={index}>
                <img
                  onClick={() => setActive(imgelink)}
                  src={imgelink}
                  className={`h-40 w-full cursor-pointer rounded-lg object-cover hover:scale-105 shadow-gray-400 shadow-lg object-center ${
                    active === imgelink ? 'border-2 border-blue-500' : ''
                  }`}
                  alt={`gallery thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
