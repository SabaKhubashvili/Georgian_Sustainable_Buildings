import React from "react";
import { Container } from "../components/Container";
import { Calculator } from "../components/Calculator/Calculator";
import { useTranslations } from "next-intl";

export const metadata = {
  title:'Calculator',
  description:'Calculate sustainability of your house'
}

const Page = () => {
  return (
    <Container>
      <div className="pt-[130px]">
         <Calculator/> 
      </div>
    </Container>
  );
};

export default Page;
