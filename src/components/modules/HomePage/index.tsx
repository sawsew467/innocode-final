import CelebrationSection from "@/components/modules/HomePage/CelebrationSection";
import CommonQuestions from "./CommonQuestions";
import CommonSection from "./CommonSection";
import CommunityContributions from "./CommunityContributions";
import HeroSection from "./HeroSection";
import IntroductionSection from "./IntroductionSection";
import TimeLineSection from "./TimeLineSection";
import OurDirectionSection from "@/components/modules/HomePage/OurDirectionSection";

function HomePageModule() {
  return (
    <>
      {/* <CommonSection /> */}
      <HeroSection />
      <IntroductionSection />
      <CelebrationSection/>
      <OurDirectionSection/>
      <TimeLineSection />
      <CommunityContributions/>
      <CommonQuestions/>
    </>
  );
}

export default HomePageModule;
