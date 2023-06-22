import { useTranslations } from "next-intl";
import { MainBanner } from "./components/Banners";
import {Container}  from "./components/Container";

export default function Home({params}:{ params: { lng:string } }) {
  const t = useTranslations("Index")

  return (
    <main className="pt-[150px]">
      <Container>
        <MainBanner title={t('Banner.Title')} 
        description={t('Banner.Description')} 
        mainButtonLabel={t('Banner.mainButtonLabel')}
        secondaryButtonLabel={t('Banner.secondaryButtonLabel')}
         />
      </Container>
    </main>
  )
}
