import CommonQuestions from "./CommonQuestions";
import CommonSection from "./CommonSection";
import CommunityContributions from "./CommunityContributions";
import HeroSection from "./HeroSection";
import IntroductionSection from "./IntroductionSection";
import TimeLineSection from "./TimeLineSection";

function HomePageModule() {
  return (
    <>
      {/* <CommonSection /> */}
      <HeroSection />
      <IntroductionSection />
      <TimeLineSection />
      <CommunityContributions/>
      <CommonQuestions/>
    </>
  );
}

export default HomePageModule;
