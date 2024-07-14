import React from "react";

export function Gallery() {
  const data = [
    {
      imgelink:
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/f7a56da4-6a92-4106-a690-65104bfd62d3/DSCF7792.jpg",
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
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/37b1c04f-3cd0-4a50-b609-67e44e9a49d6/DSCF8563.jpg",
    },
    {
      imgelink:
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/5b8787f2-2c4d-4d24-bba0-903551ca1f75/DSCF8584.jpg",
    },
  ];

  const [active, setActive] = React.useState(data[0].imgelink);

  return (
    <div id="gallery" className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-5xl p-4">
        <div className="grid gap-4">
          <div>
          <h3 className="text-5xl text-bold text-center text-[#3ea498] mb-4">Gallery</h3>
            <img
              className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
              src={active}
              alt="active gallery"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {data.map(({ imgelink }, index) => (
              <div key={index}>
                <img
                  onClick={() => setActive(imgelink)}
                  src={imgelink}
                  className={`h-40 w-full cursor-pointer rounded-lg object-cover object-center ${
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
