import CommonQuestions from "./CommonQuestions";
import CommonSection from "./CommonSection";
import ContributorSection from "./ContributorSection";
import FeaturedMemberSession from "./FeaturedMemberSession";
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
      <FeaturedMemberSession/>
      <ContributorSection/>
      <CommunityContributions/>
      <CommonQuestions/>
    </>
  );
}

export default HomePageModule;
