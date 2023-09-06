import { MainBanner } from "./components/Banners";
import { Container } from "./components/Container";
import { AboutSustainability } from "./components/Sections/AbuotSustainability/AboutSustainability";
import { AboutUs } from "./components/Sections/AboutUs/AboutUs";
import { Portfolio } from "./components/Portfolio/Portfolio";

export default function Home() {

  return (
    <main className="pt-[150px]">
       <Container>
        <MainBanner/>
        <AboutSustainability/>
      </Container>
       <AboutUs/>
      <Portfolio />  
    </main>
  )
}
