export default function Hero2Homepage() {
    return (
      <div className="bg-Seasalt">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        
          <h2 className="relative text-3xl font-bold tracking-tight text-Prussian-Blue sm:text-4xl z-10">
            <span className="absolute inset-0 flex -mt-2.5 -ml-3">
              <span className="-z-10 w-12 h-12 bg-Poppy rounded-full"></span>
            </span>
            Empower your Career
            <br />
            With AMIT high skills Boot-Camps
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a
              href="#"
              className="rounded-md bg-Light-Sea-Green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get a call
            </a>
            <a href="/Courses" className="text-sm font-semibold leading-6 text-Prussian-Blue">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  