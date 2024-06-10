import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
    "Option to pay the entire amount upfront",
    "Choose a payment plan, allowing you to pay in convenient installments",
    "Utilize a loan from one of our financial partners as a payment option",
    "Explore the possibility of receiving a scholarship as a form of financial support",
];

export default function TuitionSection(props){
    return (
        <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto">
        <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h2 className="relative text-4xl font-bold tracking-tight text-Prussian-Blue">
                <span className="absolute inset-0 flex -mt-2 -ml-3.5">
                  <span className="-z-10 w-10 h-10 bg-Poppy rounded-full"></span>
                </span>
              Tuition
            </h2>
            <div className="flex items-center gap-x-4">
              <h3 className="mt-6 text-sm font-semibold leading-6 text-gray-600">
                AMIT Coders provides four payment choices:
              </h3>
              {/* <div className="h-px flex-auto bg-gray-100" /> */}
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  <span className="line-through text-Poppy font-bold">
                    {props.originalPrice}
                  </span>{" "}
                  with only <span className="text-Poppy font-bold">$99</span>{" "}
                  deposit
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-Prussian-Blue">
                    {props.discountedPrice}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-Light-Sea-Green px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get More Info
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}