import { MainBanner } from "./components/Banners";
import { useTranslations } from "next-intl";
import { Container } from "./components/Container";
import { AboutSustainability } from "./components/Sections/AbuotSustainability/AboutSustainability";
import { AboutUs } from "./components/Sections/AboutUs/AboutUs";
import { Portfolio } from "./components/Portfolio/Portfolio";

export default function Home() {
  const bannerT = useTranslations("Banner")
  const AboutSustainabilityT = useTranslations("AboutSustainability")
  const aboutUst = useTranslations("About_us")
  const portfolioT = useTranslations("Portfolio")

  return (
    <main className="pt-[150px]">
      <Container>
        <MainBanner title={bannerT('Title')}
          description={bannerT('Description')}
          mainButtonLabel={bannerT('mainButtonLabel')}
          secondaryButtonLabel={bannerT('secondaryButtonLabel')}
        />
        <AboutSustainability
          title={AboutSustainabilityT('Title')}
          subTitle={AboutSustainabilityT('subTitle')}
          informationTitle1={AboutSustainabilityT('information.title1')}
          informationsubTitle1={AboutSustainabilityT('information.subTitle1')}
          informationTitle2={AboutSustainabilityT('information.title2')}
          informationsubTitle2={AboutSustainabilityT('information.subTitle2')}
          informationTitle3={AboutSustainabilityT('information.title3')}
          informationsubTitle3={AboutSustainabilityT('information.subTitle3')}
          informationTitle4={AboutSustainabilityT('information.title4')}
          informationsubTitle4={AboutSustainabilityT('information.subTitle4')}
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
      />
    </main>
  )
}
