import CommonQuestions from "./CommonQuestions";
import CommonSection from "./CommonSection";
import CommunityContributions from "./CommunityContributions";
import HeroSection from "./HeroSection";
import IntroductionSection from "./IntroductionSection";

function HomePageModule() {
  return (
    <>
      {/* <CommonSection />  */}
      <HeroSection />
      <IntroductionSection />
      <CommunityContributions/>
      <CommonQuestions/>
    </>
  );
}

export default HomePageModule;
