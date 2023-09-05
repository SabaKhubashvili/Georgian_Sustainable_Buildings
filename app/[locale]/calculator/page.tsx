import { useTranslations } from "next-intl";
import React from "react";
import { Container } from "../components/Container";
import { Calculator } from "../components/Calculator/Calculator";

const Page = () => {
  // const calculatorT = useTranslations("Calculator");
  // const contentT = useTranslations("Calculator.content");
  // const errorT = useTranslations("Calculator.errors");
  // const placeholderT = useTranslations('Calculator.placeholders')
  // const keys = ['type','insulation','material','windowsAndDoors','heat','cooling','heating','certificates','lighting','percentage'] as const
  // const errorKeys = ['required']
  return (
    <Container>
      <div className="pt-[130px]">
        <h1 className="text-center font-bold text-[37px] text-lightPurple uppercase">
          {/* {calculatorT("name")} */}
        </h1>
        {/* <p className="text-center text-lightPurple">{calculatorT("subTitle")}</p> */}
          {/* <Calculator
            content={keys.map(key=>contentT(key))}
            errors={errorKeys.map(key=>errorT(key))}
            placeholders={keys.map(key=>placeholderT(key))}
          /> */}
      </div>
    </Container>
  );
};

export default Page;
