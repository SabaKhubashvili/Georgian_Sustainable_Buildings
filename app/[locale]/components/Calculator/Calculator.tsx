"use client";

import React, { useCallback, useState } from "react";
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

interface Props {
  content: any;
  errors: any;
  placeholders:any
}
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
  heating: {
    value: string;
    point: number;
  };
  cooling: {
    value: string;
    point: number;
  };
  sertificates: {
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

export const Calculator = ({ content, errors, placeholders }: Props) => {
  const [points, setPoints] = useState(0);
  const [feedback, setFeedback] = useState<"error" | "success" | "">("");
  const [valuesFeedBacks,setValuesFeedBacks] = useState({
    houseType:'',
    insulation:'',
    material: '',
    windowsAndDoors: '',
    heat: '',
    heating: '',
    cooling: '',
    sertificates: '',
    lighting: '',
    percentage: ''
  })
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
    heating: {
      value: "",
      point: 0,
    },
    cooling: {
      value: "",
      point: 0,
    },
    sertificates: {
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
    setFeedback('')
    const allValuesHaveLength = Object.values(values).every((item) => item.value.length > 0);
  
    if (allValuesHaveLength) {
      const totalPoints = Object.values(values).reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue.point;
        },
        0
      );
  
      console.log("Total Points:", totalPoints / 9);
    } else {
      setFeedback('error')
    }
  };
  
  console.log(errors);

  return (
    <div className="pt-[70px] max-w-[1200px] mx-auto">
      {feedback === "error" && (
        <div className="flex justify-center items-center">
          <div className="bg-rose-700 text-white px-6 py-2 font-medium w-fit rounded-md flex gap-[5px] items-center justify-center">
            <div className="w-8">
              <Icon svg={WebsiteIcons["Error_Icon"]} />
            </div>
            <p className="my-auto  pb-[4px]">{errors[0]}</p>
          </div>
        </div>
      )}
      <div className="flex justify-center gap-x-4 flex-wrap gap-y-[10px] md:flex-row flex-col ">
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={placeholders[0]}
            content={types}
            label={content[0]}
            type="houseType"
            value={values.houseType.value}
          />
        </div>
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={placeholders[1]}
            content={insulation}
            label={content[1]}
            type="insulation"
            value={values.insulation.value}
          />
        </div>
        {values.insulation.value === "No" && (
          <div className="md:w-[46%]  flex items-end">
            <MainDropdown
              setValue={(value: string, points: number, type: keyof Values) =>
                updateValues(value, points, type)
              }
              placeholder={placeholders[2]}
              content={material}
              label={content[2]}
              type="material"
              value={values.material.value}
            />
          </div>
        )}
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={placeholders[3]}
            content={windowsAndDoors}
            label={content[3]}
            type="windowsAndDoors"
            value={values.windowsAndDoors.value}
          />
        </div>
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={placeholders[4]}
            content={heat}
            label={content[6]}
            type="heat"
            value={values.heat.value}
          />
        </div>
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={placeholders[5]}
            content={houseHeating}
            label={content[4]}
            type="heating"
            value={values.heating.value}
          />
        </div>
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={placeholders[6]}
            content={cooling}
            label={content[5]}
            type="cooling"
            value={values.cooling.value}
          />
        </div>
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={placeholders[7]}
            content={sertificates}
            label={content[7]}
            type="sertificates"
            value={values.sertificates.value}
          />
        </div>
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={placeholders[8]}
            content={lighting}
            label={content[8]}
            type="lighting"
            value={values.lighting.value}
          />
        </div>
        <div className="md:w-[46%]  flex items-end">
          <MainDropdown
            setValue={(value: string, points: number, type: keyof Values) =>
              updateValues(value, points, type)
            }
            placeholder={placeholders[9]}
            content={percentage}
            label={content[9]}
            type="percentage"
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
    </div>
  );
};
