import { MainBanner } from "./components/Banners";
// import { useTranslations } from "next-intl";
import { Container } from "./components/Container";
import { AboutSustainability } from "./components/Sections/AbuotSustainability/AboutSustainability";
import { AboutUs } from "./components/Sections/AboutUs/AboutUs";
import { Portfolio } from "./components/Portfolio/Portfolio";

export default function Home() {
  // const bannerT = useTranslations("Banner")
  // const AboutSustainabilityT = useTranslations("AboutSustainability")
  // const aboutUst = useTranslations("About_us")
  // const portfolioT = useTranslations("Portfolio")

  return (
    <main className="pt-[150px]">
      {/* <Container>
        <MainBanner title={bannerT('Title')}
          description={bannerT('Description')}
          mainButtonLabel={bannerT('mainButtonLabel')}
          secondaryButtonLabel={bannerT('secondaryButtonLabel')}
          learnMore={AboutSustainabilityT('Learn_more')}
        />
        <AboutSustainability
          title={AboutSustainabilityT('Title')}
          subTitle={AboutSustainabilityT('subTitle')}
          informationsubTitle1={AboutSustainabilityT('information.subTitle1')}
          informationsubTitle2={AboutSustainabilityT('information.subTitle2')}
          informationsubTitle3={AboutSustainabilityT('information.subTitle3')}
          informationsubTitle4={AboutSustainabilityT('information.subTitle4')}
          informationsubTitle5={AboutSustainabilityT('information.subTitle5')}
          learnMore={AboutSustainabilityT('Learn_more')}
        />
      </Container>
      <AboutUs
        title={aboutUst('title')}
        description={aboutUst('description')}
      />
      <Portfolio 
        title={portfolioT('title')}
        description={portfolioT('description')}
      /> */}
    </main>
  )
}
