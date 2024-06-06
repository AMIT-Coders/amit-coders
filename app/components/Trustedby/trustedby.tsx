import React from "react";
// import './Trustedby.css'; // Import the CSS file

const images = [
  {
    src: "https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg",
    alt: "Transistor",
  },
  {
    src: "https://tailwindui.com/img/logos/158x48/reform-logo-white.svg",
    alt: "Reform",
  },
  {
    src: "https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg",
    alt: "Tuple",
  },
  {
    src: "https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg",
    alt: "SavvyCal",
  },
  {
    src: "https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg",
    alt: "Statamic",
  },
];

export default function Trustedby() {
  return (
    <div className="bg-Prussian-Blue py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-white">
          Trusted by
        </h2>
        <div className="relative mt-10 flex items-center justify-center">
          <div className="marquee">
            <div className="marquee-inner flex space-x-10">
              {images.concat(images).map((image, index) => (
                <img
                  key={index}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={image.src}
                  alt={image.alt}
                  width={158}
                  height={48}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
