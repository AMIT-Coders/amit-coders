import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description: "Meet AMIT Coders Team",
};

const people = [
  {
    name: "Omar Mohsen",
    role: "Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1627796795540-18e2db6d3908?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
  {
    name: "Yousif Alaa",
    role: "Co-Founder / Commercial Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1627796795540-18e2db6d3908?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
  {
    name: "Bassma Youssef",
    role: "People & Culture Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1627796795540-18e2db6d3908?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
  {
    name: "Cassandra Torres",
    role: "Marketing Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1627796795540-18e2db6d3908?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
  {
    name: "Salma Alaa",
    role: "Tech Training Head for Cyber Security",
    imageUrl:
      "https://wallpapers.com/images/featured-full/sandy-cheeks-pictures-p9an1aa69zxptrri.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
  {
    name: "Mohamed Ibrahim",
    role: "Tech Training Head for Full Stack & ML",
    imageUrl:
      "https://images.unsplash.com/photo-1627796795540-18e2db6d3908?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
  {
    name: "Joe Devos",
    role: "Student Advisor",
    imageUrl:
      "https://images.unsplash.com/photo-1627796795540-18e2db6d3908?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
  {
    name: "Mahmoud Hamdy",
    role: "Graphic Designer & Artist",
    imageUrl:
      "https://images.unsplash.com/photo-1627796795540-18e2db6d3908?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
  {
    name: "Omar James",
    role: "Content Creator",
    imageUrl:
      "https://images.unsplash.com/photo-1627796795540-18e2db6d3908?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

export default function MeetTheTeam() {
  return (
    <>
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-Prussian-Blue sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img
                  className="mx-auto h-56 w-56 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-Prussian-Blue">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a
                      href={person.xUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">X</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-4">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              We’re changing the way people connect.
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                Are you passionate about making a difference? Do you want to be
                part of a dynamic team that is revolutionizing the way people
                interact and connect? At AMIT Coders, we believe in fostering
                creativity, innovation, and growth. We're looking for talented,
                driven individuals who share our vision and are eager to make an
                impact. Join us and be part of a journey that transforms ideas
                into reality, and connections into lasting relationships.
                Together, we can create a better, more connected world. Explore
                our career opportunities and find out how you can contribute to
                our exciting mission.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/Careers"
                  className="rounded-md bg-Light-Sea-Green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join Our Team
                </a>
                {/* <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </>
  );
}
