const stats = [
    { id: 1, name: 'Bootcamps', value: '4+' },
    { id: 2, name: 'Practical Labs', value: '200+' },
    { id: 3, name: 'Uptime guarantee', value: '99.9%' },
    { id: 4, name: 'Paid out to creators', value: '$70M' },
  ]
  
  export default function Empoweryourskills() {
    return (
  
      <div className="container mx-auto relative text-Prussian-Blue">
        <div className="flex items-center h-56 w-full object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2">
              {/*  */}

              <div className="rounded-xl relative mx-auto">
                {/* Decorative Border Elements */}
                  <div className="absolute -top-4 -left-4 w-28 h-28 bg-Light-Sea-Green rounded-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-Light-Sea-Green rounded-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="rounded-lg overflow-hidden max-h-md max-w-xl" style={{height: '446px', width: '590px'}}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/raKUAbpIGQQ?si=Yvg6fAJcrEsYVpYm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                  </div>
                </div>
              {/*  */}
        </div>
        {/* <img
          className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
          alt=""
        /> */}
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {/*  */}


          
          <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-8 text-Light-Sea-Green">Want to Empower your Skills & Careers?</h2>
              <p className="relative mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="absolute inset-0 flex -mt-2 -ml-3.5">
                    <span className="-z-10 w-10 h-10 bg-Poppy rounded-full"></span>
                </span>
                You can do it with AMIT
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We make our expertise accessible.
              </p>
              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.map((stat) => (
                  <div key={stat.id} className="flex flex-col gap-y-3 border-l-4 border-red-500 pl-6">
                    <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-4xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/*  */}
        </div>

      </div>


  
    );
  }
  