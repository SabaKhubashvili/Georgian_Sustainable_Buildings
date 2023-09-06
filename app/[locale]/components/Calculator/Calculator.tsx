"use client";

import React, { useCallback, useRef, useState } from "react";
import { MainDropdown } from "../Dropdowns/CalculatorDropdown";
import {
  cooling,
  heat,
  houseHeating,
  insulation,
  lighting,
  material,
  percentage,
  sertificates,
  types,
  windowsAndDoors,
} from "@/app/constants";
import { FillButton } from "../Buttons";
import Icon from "../Icon";
import WebsiteIcons from "@/public/svg/IconsObject";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
export type Values = {
  houseType: {
    value: string;
    point: number;
  };
  insulation: {
    value: string;
    point: number;
  };
  material: {
    value: string;
    point: number;
  };
  windowsAndDoors: {
    value: string;
    point: number;
  };
  heat: {
    value: string;
    point: number;
  };
  houseHeating: {
    value: string;
    point: number;
  };
  cooling: {
    value: string;
    point: number;
  };
  certificates: {
    value: string;
    point: number;
  };
  lighting: {
    value: string;
    point: number;
  };
  percentage: {
    value: string;
    point: number;
  };
};

export const Calculator = () => {
  const locale = useLocale();
  const contentT = useTranslations("Calculator.content");
  const errorT = useTranslations("Calculator.errors");
  const resultT = useTranslations("Calculator.results");
  const [points, setPoints] = useState(0);
  const [feedback, setFeedback] = useState<"error" | "success" | "">("");
  const [valuesFeedBacks, setValuesFeedBacks] = useState({
    houseType: "",
    insulation: "",
    material: "",
    windowsAndDoors: "",
    heat: "",
    houseHeating: "",
    cooling: "",
    certificates: "",
    lighting: "",
    percentage: "",
  });
  const resultsRef = useRef<HTMLDivElement>(null);
  const keys = [
    "houseType",
    "insulation",
    "material",
    "windowsAndDoors",
    "heat",
    "cooling",
    "houseHeating",
    "certificates",
    "lighting",
    "percentage",
  ] as const;
  const optionKeys = [
    "option1",
    "option2",
    "option3",
    "option4",
    "option5",
    "option6",
    "option7",
    "option8",
  ];
  const errorKeys = ["required"];
  const [values, setValues] = useState<Values>({
    houseType: {
      value: "",
      point: 0,
    },
    insulation: {
      value: "",
      point: 0,
    },
    material: {
      value: "",
      point: 0,
    },
    windowsAndDoors: {
      value: "",
      point: 0,
    },
    heat: {
      value: "",
      point: 0,
    },
    houseHeating: {
      value: "",
      point: 0,
    },
    cooling: {
      value: "",
      point: 0,
    },
    certificates: {
      value: "",
      point: 0,
    },
    lighting: {
      value: "",
      point: 0,
    },
    percentage: {
      value: "",
      point: 0,
    },
  });

  const updateValues = useCallback(
    (value: string, pointsToAdd: number, type: keyof Values) => {
      if (values[type].value !== value) {
        setValues((prev) => ({
          ...prev,
          [type]: {
            value: value,
            point: pointsToAdd,
          },
        }));
      }
    },
    [values]
  );
  const handleSubmit = () => {
    setFeedback("");
    const allValuesHaveLength = Object.keys(values)
      .filter((key) => {
        const insulationValue = values.insulation.value;
        if (insulationValue === "No" || insulationValue === "არა") {
          return true
        } else {
          return key !== "material";
        }
      })
      .every((key) => values[key as keyof Values].value.length > 0);
    if (allValuesHaveLength) {
      const totalPoints = Object.values(values).reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue.point;
        },
        0
      );
      setPoints(totalPoints / 9);
      setFeedback("success");
    } else {
      setFeedback("error");
    }
  };

  return (
    <div className="pt-[70px] max-w-[1200px] mx-auto">
      {feedback === "error" && (
        <div className="flex justify-center items-center">
          <div className="bg-rose-700 text-white px-6 py-2 font-medium w-fit rounded-md flex gap-[5px] items-center justify-center">
            <div className="w-8">
              <Icon svg={WebsiteIcons["Error_Icon"]} />
            </div>
            <p className="my-auto  pb-[4px]">{errorT("required")}</p>
          </div>
        </div>
      )}
      <div className="flex justify-center gap-x-4 flex-wrap gap-y-[10px] md:flex-row flex-col ">
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={contentT(`houseType.placeholder`)}
            content={optionKeys.slice(0, 2).map((key) => ({
              label: contentT(`houseType.${key}.label`),
              point: parseInt(contentT(`houseType.${key}.point`)),
            }))}
            label={contentT(`houseType.name`)}
            type={"houseType"}
            value={values.houseType.value}
          />
        </div>
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={contentT(`insulation.placeholder`)}
            content={optionKeys.slice(0, 2).map((key) => ({
              label: contentT(`insulation.${key}.label`),
              point: parseInt(contentT(`insulation.${key}.point`)),
            }))}
            label={contentT(`insulation.name`)}
            type={"insulation"}
            value={values.insulation.value}
          />
        </div>
        {values.insulation.value === "No" ||
        values.insulation.value === "არა" ? (
          <div className="md:w-[46%]  flex items-end">
            <MainDropdown
              setValue={(value: string, points: number, type: keyof Values) =>
                updateValues(value, points, type)
              }
              placeholder={contentT(`material.placeholder`)}
              content={optionKeys.slice(0, 7).map((key) => ({
                label: contentT(`material.${key}.label`),
                point: contentT(`material.${key}.point`),
              }))}
              label={contentT(`material.name`)}
              type={"material"}
              value={values.material.value}
            />
          </div>
        ) : (
          ""
        )}
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={contentT(`windowsAndDoors.placeholder`)}
            content={optionKeys.slice(0, 4).map((key) => ({
              label: contentT(`windowsAndDoors.${key}.label`),
              point: parseInt(contentT(`windowsAndDoors.${key}.point`)),
            }))}
            label={contentT(`windowsAndDoors.name`)}
            type={"windowsAndDoors"}
            value={values.windowsAndDoors.value}
          />
        </div>
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={contentT(`heat.placeholder`)}
            content={optionKeys.slice(0, 4).map((key) => ({
              label: contentT(`heat.${key}.label`),
              point: parseInt(contentT(`heat.${key}.point`)),
            }))}
            label={contentT(`heat.name`)}
            type={"heat"}
            value={values.heat.value}
          />
        </div>
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={contentT(`houseHeating.placeholder`)}
            content={optionKeys.slice(0, 4).map((key) => ({
              label: contentT(`houseHeating.${key}.label`),
              point: parseInt(contentT(`houseHeating.${key}.point`)),
            }))}
            label={contentT(`houseHeating.name`)}
            type={"houseHeating"}
            value={values.houseHeating.value}
          />
        </div>
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={contentT(`cooling.placeholder`)}
            content={optionKeys.slice(0, 4).map((key) => ({
              label: contentT(`cooling.${key}.label`),
              point: parseInt(contentT(`cooling.${key}.point`)),
            }))}
            label={contentT(`cooling.name`)}
            type={"cooling"}
            value={values.cooling.value}
          />
        </div>
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={contentT(`certificates.placeholder`)}
            content={optionKeys.slice(0, 2).map((key) => ({
              label: contentT(`certificates.${key}.label`),
              point: parseInt(contentT(`certificates.${key}.point`)),
            }))}
            label={contentT(`certificates.name`)}
            type={"certificates"}
            value={values.certificates.value}
          />
        </div>
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={contentT(`lighting.placeholder`)}
            content={optionKeys.slice(0, 4).map((key) => ({
              label: contentT(`lighting.${key}.label`),
              point: parseInt(contentT(`lighting.${key}.point`)),
            }))}
            label={contentT(`lighting.name`)}
            type={"lighting"}
            value={values.lighting.value}
          />
        </div>
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={contentT(`percentage.placeholder`)}
            content={optionKeys.slice(0, 5).map((key) => ({
              label: contentT(`percentage.${key}.label`),
              point: parseInt(contentT(`percentage.${key}.point`)),
            }))}
            label={contentT(`percentage.name`)}
            type={"percentage"}
            value={values.percentage.value}
          />
        </div>
      </div>
      <div className="w-full  flex justify-center">
        <div className="pt-[50px] 2xl:w-[200px] xl:w-[130px] lg:w-[120px] md:w-[110px] sm:w-[100px]">
          <FillButton
            label="Submit"
            onClick={handleSubmit}
            color="green"
            full
          />
        </div>
      </div>
      {points !== 0 && feedback === "success" ? (
        <div className="mt-[70px]" ref={resultsRef}>
          <div className="flex items-start justify-between">
            <div className="mt-[30px]">
              <h1 className="text-red-600 font-bold text-[66px]">
                {points >= 7
                  ? "A"
                  : points >= 6
                  ? "B"
                  : points >= 5
                  ? "C"
                  : points >= 4
                  ? "D"
                  : points >= 3
                  ? "E"
                  : points >= 2
                  ? "F"
                  : points >= 1
                  ? "C"
                  : "G"}
              </h1>
              <p className="text-[16px] text-lightPurple">
                {resultT("Rating.message", {
                  rating: `${
                    locale === "ge"
                      ? points >= 7
                        ? "საუკეთესო"
                        : points >= 6
                        ? "ძალიან კარგი"
                        : points >= 5
                        ? "კარგი"
                        : points >= 4
                        ? "ნორმალური"
                        : points >= 3
                        ? "ცუდი"
                        : points >= 2
                        ? "ძალიან ცუდი"
                        : points >= 1
                        ? "საშინელი"
                        : "ყველაზე ცუდი"
                      : points >= 7
                      ? "best"
                      : points >= 6
                      ? "very good"
                      : points >= 5
                      ? "good"
                      : points >= 4
                      ? "normal"
                      : points >= 3
                      ? "bad"
                      : points >= 2
                      ? "very bad"
                      : points >= 1
                      ? "terrible"
                      : "worst"
                  }`,
                })}
              </p>
            </div>
            <div>
              <Image
                src={`/images/SustainableResults/En/${points >= 7
                    ? "A"
                    : points >= 6
                    ? "B"
                    : points >= 5
                    ? "C"
                    : points >= 4
                    ? "D"
                    : points >= 3
                    ? "E"
                    : points >= 2
                    ? "F"
                    : points >= 1
                    ? "C"
                    : "G"}.png`}
                alt="Results"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
