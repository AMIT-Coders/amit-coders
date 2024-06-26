import Image from "next/image";
import heroHomepage from "./components/HeroHomepage/HeroHomepage";
import Faqs from "./components/FAQsHomepage/FAQsHomepage";
import HeroHomepage from "./components/HeroHomepage/HeroHomepage";
import Hero2Homepage from "./components/Hero2Homepage/Hero2Homepage";
import Hero3Homepage from "./components/Hero3Homepage/Hero3Homepage";
import Dropdown from "./components/Dropdown/Dropdown";
import BenefitsSectionHomepage from "./components/BenefitsSectionHomepage/BenefitsSectionHomepage";
import BootcampSection from "./components/BootcampSection/BootcampSection";
import HomepageBlogs from "./components/HomepageBlogs/HomepageBlogs";
import Trustedby from "./components/Trustedby/trustedby";
import Definitions from "./components/Definitions/Definitions";
import Empoweryourskills from "./components/Empoweryourskills/Empoweryourskills";
import FAQsHomepage from "./components/FAQsHomepage/FAQsHomepage";
export default function Home() {
  return (
    <>
      <HeroHomepage />
      {/* <Dropdown /> */}
      <Definitions />
      <Hero2Homepage />
      <Empoweryourskills />
      <BenefitsSectionHomepage />
      <BootcampSection />
      <HomepageBlogs />
      <Hero3Homepage />
      <Trustedby />
      <FAQsHomepage />
    </>
  );
}
