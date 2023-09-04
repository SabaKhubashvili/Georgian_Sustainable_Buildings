"use client";

import React, { useCallback, useState } from "react";
import { MainDropdown } from "../Dropdowns/CalculatorDropdown";
import { cooling, heat, insulation, lighting, percentage, sertificates, types, windowsAndDoors } from "@/app/constants";

interface Props {
  content: any;
}
export type Values = {
  houseType: {
    value:string,
    point:number
  };
  insulation: {
    value:string,
    point:number
  };
  material: {
    value:string,
    point:number
  };
  windowsAndDoors: {
    value:string,
    point:number
  };
  heat: {
    value:string,
    point:number
  };
  heating: {
        value:string,
    point:number
  };
  cooling: {
        value:string,
    point:number
  };
  sertificates: {
    value:boolean,
    point:number
  };
  lighting: {
        value:string,
    point:number
  };
  percentage: {
        value:string,
    point:number
  };
};

export const Calculator = ({ content }: Props) => {



  const [points,setPoints] = useState(0)
  const [values, setValues] = useState<Values>({
    houseType: {
      value:'',
      point:0
    },
    insulation: {
      value:'',
      point:0
    },
    material: {
      value:'',
      point:0
    },
    windowsAndDoors: {
      value:'',
      point:0
    },
    heat: {
      value:'',
      point:0
    },
    heating: {
      value:'',
      point:0
    },
    cooling: {
      value:'',
      point:0
    },
    sertificates: {
      value:false,
      point:0
    },
    lighting: {
      value:'',
      point:0
    },
    percentage: {
      value:'',
      point:0
    },
  });

  const updateValues = useCallback((value:string, pointsToAdd:number, type: keyof Values) => {
    if(values[type].value !== value){
      setValues(prev => ({
        ...prev,
        [type]: {
          value: value,
          points:pointsToAdd
        }
      }));      
    }
  }, [values]);

  return (
    <div className="pt-[70px] max-w-[1200px] mx-auto flex justify-between flex-wrap gap-y-[10px] md:flex-row flex-col ">
        <div className="md:w-[46%]" >
          <MainDropdown
            setValue={(value: string,points:number,type:keyof Values) => updateValues(value,points,type)}
            content={types}
            label={content[0]}
            type="houseType"
            value={values.houseType.value}
          />
        </div>
        <div className="md:w-[46%]" >
          <MainDropdown
            setValue={(value: string,points:number,type:keyof Values) => updateValues(value,points,type)}
            content={insulation}
            label={content[1]}
            type="insulation"
            value={values.insulation.value}
          />
        </div>
        {/* <div className="md:w-[46%]" >
          <MainDropdown
            setValue={(value: string,points:number,type:keyof Values) => updateValues(value,points,type)}
            content={types}
            label={content[3]}
            type="material"
            value={values.material.value}
          />
        </div> */}
        <div className="md:w-[46%]" >
          <MainDropdown
            setValue={(value: string,points:number,type:keyof Values) => updateValues(value,points,type)}
            content={windowsAndDoors}
            label={content[4]}
            type="windowsAndDoors"
            value={values.windowsAndDoors.value}
          />
        </div>
        <div className="md:w-[46%]" >
          <MainDropdown
            setValue={(value: string,points:number,type:keyof Values) => updateValues(value,points,type)}
            content={heat}
            label={content[5]}
            type="heat"
            value={values.heat.value}
          />
        </div>
        <div className="md:w-[46%]" >
          <MainDropdown
            setValue={(value: string,points:number,type:keyof Values) => updateValues(value,points,type)}
            content={cooling}
            label={content[6]}
            type="heating"
            value={values.heating.value}
          />
        </div>
        <div className="md:w-[46%]" >
          <MainDropdown
            setValue={(value: string,points:number,type:keyof Values) => updateValues(value,points,type)}
            content={sertificates}
            label={content[7]}
            type="sertificates"
            value={values.sertificates.value ? 'Yes' : 'No'}
          />
        </div>
        <div className="md:w-[46%] flex items-end" >
          <MainDropdown
            setValue={(value: string,points:number,type:keyof Values) => updateValues(value,points,type)}
            content={lighting}
            label={content[8]}
            type="lighting"
            value={values.lighting.value}
          />
        </div>
        <div className="md:w-[46%]" >
          <MainDropdown
            setValue={(value: string,points:number,type:keyof Values) => updateValues(value,points,type)}
            content={percentage}
            label={content[9]}
            type="percentage"
            value={values.percentage.value}
          />
        </div>
    </div>
  );
};
