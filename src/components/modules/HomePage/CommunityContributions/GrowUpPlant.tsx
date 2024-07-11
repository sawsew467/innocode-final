import Plant from "@public/svgr/Plant";
import PlantEight from "@public/svgr/Prames/PlantEight";
import PlantFive from "@public/svgr/Prames/PlantFive";
import PlantFour from "@public/svgr/Prames/PlantFour";
import PlantNine from "@public/svgr/Prames/PlantNine";
import PlantOne from "@public/svgr/Prames/PlantOne";
import PlantSeven from "@public/svgr/Prames/PlantSeven";
import PlantSix from "@public/svgr/Prames/PlantSix";
import PlantThree from "@public/svgr/Prames/PlantThree";
import PlantTwo from "@public/svgr/Prames/PlantTwo";
import React from "react";

function GrowUpPlant() {
  return (
    <div className="h-fit w-fit">
      <div className="relative">
        <Plant></Plant>
        <div className="animate-fade absolute bottom-[42px] left-[126px]">
          <PlantOne width={175} />
        </div>
        <div className="animate-fade absolute bottom-[86px] left-[190px]">
          <PlantTwo width={32} />
        </div>
        <div className="animate-fade absolute bottom-[99.5px] left-[34px]">
          <PlantThree width={185} />
        </div>
        <div className="animate-fade absolute bottom-[92.5px] left-[191px]">
          <PlantFour width={171} />
        </div>
        <div className="animate-fade absolute bottom-[140px] left-[194.5px]">
          <PlantFive width={166} />
        </div>
        <div className="animate-fade absolute bottom-[167px] left-[55.5px]">
          <PlantSix width={150} />
        </div>
        <div className="animate-fade absolute bottom-[178px] left-[106px]">
          <PlantSeven width={105} />
        </div>
        <div className="animate-fade absolute bottom-[210px] left-[197px]">
          <PlantEight width={94} />
        </div>
        <div className="animate-fade absolute bottom-[228px] left-[155px]">
          <PlantNine width={102

          } />
        </div>
      </div>
    </div>
  );
}

export default GrowUpPlant;
