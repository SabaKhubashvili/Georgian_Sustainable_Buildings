import { MainBanner } from "./components/Banners";
import { Container } from "./components/Container";

export default function Home() {
  return (
    <main className="pt-[150px]">
      <Container>
        <MainBanner/>
      </Container>
    </main>
  )
}
