import Image from "next/image";
import heroHomepage from "./components/HeroHomepage/HeroHomepage";
import Faqs from "./components/Faqs/Faqs";
import HeroHomepage from "./components/HeroHomepage/HeroHomepage";
import Hero2Homepage from "./components/Hero2Homepage/Hero2Homepage";
import Hero3Homepage from "./components/Hero3Homepage/Hero3Homepage";
import Dropdown from "./components/Dropdown/Dropdown";
import HomepageBlogs from "./components/HomepageBlogs/HomepageBlogs";
import Trustedby from "./components/Trustedby/trustedby";
import Definitions from "./components/Definitions/Definitions";
import Empoweryourskills from "./components/Empoweryourskills/Empoweryourskills";
export default function Home() {
  return (
    <>
      <HeroHomepage />
      {/* Here will be Know the basics */}
      <Definitions />
      <Hero2Homepage />
      <Empoweryourskills />
      <HomepageBlogs />
      <Hero3Homepage />
      <Trustedby />
      <Faqs />
    </>
  );
}
