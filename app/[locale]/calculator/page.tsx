import { useTranslations } from "next-intl";
import React from "react";
import { MainDropdown } from "../components/Dropdowns/CalculatorDropdown";
import { Container } from "../components/Container";
import { Calculator } from "../components/Calculator/Calculator";

const Page = () => {
  const calculatorT = useTranslations("Calculator");
  const contentT = useTranslations("Calculator.content");
  const keys = ['type'] as const
  return (
    <Container>
      <div className="pt-[130px]">
        <h1 className="text-center font-bold text-[37px] text-lightPurple uppercase">
          {calculatorT("name")}
        </h1>
        <p className="text-center text-lightPurple">{calculatorT("subTitle")}</p>
          <Calculator
            content={keys.map(key=>contentT(key))}
          />
      </div>
    </Container>
  );
};

export default Page;
