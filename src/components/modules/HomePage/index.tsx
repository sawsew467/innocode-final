import CommonSection from "./CommonSection";
import ContributorSection from "./ContributorSection";
import FeaturedMemberSession from "./FeaturedMemberSession";
import HeroSection from "./HeroSection";
import IntroductionSection from "./IntroductionSection";

function HomePageModule() {
  return (
    <>
      <CommonSection />
      <HeroSection />
      <IntroductionSection />
      <FeaturedMemberSession/>
      <ContributorSection/>
    </>
  );
}

export default HomePageModule;
