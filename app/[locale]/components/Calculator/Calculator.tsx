"use client";

import React, { useCallback, useState } from "react";
import { MainDropdown } from "../Dropdowns/CalculatorDropdown";

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
  const types = [{
    label:'House',
    point:10
  },{
    label:'Private',
    point:15
  },{
    label:'Anoteher',
    point:20
  }]


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
    <div className="pt-[70px] max-w-[1200px] mx-auto flex justify-between ">
        <div className="w-[30%]" >
          <MainDropdown
            setValue={(value: string,points:number,type:keyof Values) => updateValues(value,points,type)}
            content={types}
            label={content[0]}
            type="houseType"
            value={values.houseType.value}
          />
        </div>
        <div className="w-[30%]" >
          <MainDropdown
            setValue={(value: string,points:number,type:keyof Values) => updateValues(value,points,type)}
            content={types}
            label={content[0]}
            type="houseType"
            value={values.houseType.value}
          />
        </div>
        <div className="w-[30%]" >
          <MainDropdown
            setValue={(value: string,points:number,type:keyof Values) => updateValues(value,points,type)}
            content={types}
            label={content[0]}
            type="houseType"
            value={values.houseType.value}
          />
        </div>
    </div>
  );
};
