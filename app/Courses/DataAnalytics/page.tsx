import type { Metadata } from "next";
import IncentivesForCoursePage from "../../components/IncentivesForCoursePage/IncentivesForCoursePage";
import TuitionSection from "../../components/TuitionSection/TuitionSection";
import SocialImpact from "../../components/SocialImpact/SocialImpact";
import CareerOpportunitiesTable from "../../components/CareerOpportunitiesTable/CareerOpportunitiesTable";
import AMITvsBootcamps from "../../components/AMITvsBootcamps/AMITvsBootcamps";
import FAQAccordionCourses from "../../components/FAQAccordionCourses/FAQAccordionCourses";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { FaCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Data Analytics",
  description: "Data Analytics",
};

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

const pages = [
  { name: "Courses", href: "/Courses", current: false },
  { name: "Data Analytics Bootcamp", href: "#", current: true },
];

export default function DataAnalytics() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-8 sm:py-12">
        {/* &auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-5&exp=15&blend-mode=multiply */}
        <img
          src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-5&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs starts here */}
          <nav className="flex pb-10" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <a href="/" className="text-gray-100 hover:text-gray-200">
                    <HomeIcon
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              {pages.map((page) => (
                <li key={page.name}>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-100"
                      aria-hidden="true"
                    />
                    <a
                      href={page.href}
                      className="ml-4 text-sm font-medium text-gray-100 hover:text-gray-200"
                      aria-current={page.current ? "page" : undefined}
                    >
                      {page.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
          {/* Breadcrumbs ends here */}
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Data Analytics
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <IncentivesForCoursePage />
      {/* Tuition section starts here */}
      <TuitionSection originalPrice={"$16,000"} discountedPrice={"$7,500"} />
      {/* Tuition section ends here */}

      {/* Social Impact starts here */}

      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-blue-900 mb-4 relative inline-block">
              <span className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></span>
              <span className="pl-6">Social Impact</span>
            </h2>
            <p className="text-lg text-gray-700">
              AMIT's scholarships create a positive social impact by:
            </p>
          </div>

          {/* Content */}
          <div className="relative flex flex-col items-center mt-12">
            {/* Center Image */}
            <div className="relative z-10 w-full max-w-sm mb-8">
              <img
                src="/path-to-center-image.png"
                alt="Center Image"
                className="w-full h-auto"
              />
            </div>

            {/* Cards Container */}
            <div className="relative w-full flex flex-wrap justify-center items-center">
              {/* Card 1 */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-24 bg-white p-6 rounded-lg shadow-lg w-64 text-center">
                <div className="flex items-center justify-center mb-2">
                  <FaCircle className="text-teal-500 mr-2" />
                  <h3 className="text-lg font-semibold">
                    Enhancing Accessibility
                  </h3>
                  <span className="ml-auto bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center absolute top-0 -right-3">
                    1
                  </span>
                </div>
                <p>
                  Breaking down financial barriers, making IT education
                  accessible to a diverse audience.
                </p>
              </div>

              {/* Card 2 */}
              <div className="absolute top-1/4 left-0 transform -translate-x-full -translate-y-6 bg-white p-6 rounded-lg shadow-lg w-64 text-center">
                <div className="flex items-center justify-center mb-2">
                  <FaCircle className="text-teal-500 mr-2" />
                  <h3 className="text-lg font-semibold">Fostering Diversity</h3>
                  <span className="ml-auto bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center absolute top-0 -right-3">
                    2
                  </span>
                </div>
                <p>
                  Promoting inclusivity in the tech community by empowering
                  individuals from varied backgrounds.
                </p>
              </div>

              {/* Card 3 */}
              <div className="absolute top-1/4 right-0 transform translate-x-full -translate-y-6 bg-white p-6 rounded-lg shadow-lg w-64 text-center">
                <div className="flex items-center justify-center mb-2">
                  <FaCircle className="text-teal-500 mr-2" />
                  <h3 className="text-lg font-semibold">Developing Skills</h3>
                  <span className="ml-auto bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center absolute top-0 -right-3">
                    3
                  </span>
                </div>
                <p>
                  Providing recipients with essential IT skills, contributing to
                  the overall workforce's capabilities.
                </p>
              </div>

              {/* Card 4 */}
              <div className="absolute bottom-1/4 left-1/4 transform -translate-x-full translate-y-12 bg-white p-6 rounded-lg shadow-lg w-64 text-center">
                <div className="flex items-center justify-center mb-2">
                  <FaCircle className="text-teal-500 mr-2" />
                  <h3 className="text-lg font-semibold">
                    Facilitating Careers
                  </h3>
                  <span className="ml-auto bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center absolute top-0 -right-3">
                    4
                  </span>
                </div>
                <p>
                  Opening doors to promising IT career opportunities, fostering
                  economic empowerment.
                </p>
              </div>

              {/* Card 5 */}
              <div className="absolute bottom-1/4 right-1/4 transform translate-x-full translate-y-12 bg-white p-6 rounded-lg shadow-lg w-64 text-center">
                <div className="flex items-center justify-center mb-2">
                  <FaCircle className="text-teal-500 mr-2" />
                  <h3 className="text-lg font-semibold">Building Community</h3>
                  <span className="ml-auto bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center absolute top-0 -right-3">
                    5
                  </span>
                </div>
                <p>
                  Connecting scholarship recipients in a supportive network that
                  extends beyond education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Social Impact ends here */}
      <CareerOpportunitiesTable />
      <AMITvsBootcamps />
      <FAQAccordionCourses />
    </>
  );
}
