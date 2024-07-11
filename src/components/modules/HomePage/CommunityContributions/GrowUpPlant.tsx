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

interface IProps {
  isLove: boolean;
  showText: string;
}

function GrowUpPlant({ isLove, showText }: IProps) {
  return (
    <div className="h-fit w-fit">
      <div className="relative">
        <Plant></Plant>
        {isLove && (
          <div className="absolute bottom-[42px] left-[126px] animate-fade">
            <PlantOne width={175} />
          </div>
        )}
        {isLove && (
          <div
            className="absolute bottom-[86px] left-[190px] animate-fade"
            style={{ animationDelay: "300ms" }}
          >
            <PlantTwo width={32} />
          </div>
        )}
        {isLove && (
          <div
            className="absolute bottom-[99.5px] left-[34px] animate-fade"
            style={{ animationDelay: "600ms" }}
          >
            <PlantThree width={185} />
          </div>
        )}
        {isLove && (
          <div
            className="absolute bottom-[92.5px] left-[191px] animate-fade"
            style={{ animationDelay: "900ms" }}
          >
            <PlantFour width={171} />
          </div>
        )}
        {isLove && (
          <div
            className="absolute bottom-[140px] left-[194.5px] animate-fade"
            style={{ animationDelay: "1200ms" }}
          >
            <PlantFive width={166} />
          </div>
        )}
        {isLove && (
          <div
            className="absolute bottom-[167px] left-[55.5px] animate-fade"
            style={{ animationDelay: "1500ms" }}
          >
            <PlantSix width={150} />
          </div>
        )}
        {isLove && (
          <div
            className="absolute bottom-[178px] left-[106px] animate-fade"
            style={{ animationDelay: "1800ms" }}
          >
            <PlantSeven width={105} />
          </div>
        )}

        {isLove && (
          <div
            className="absolute bottom-[210px] left-[197px] animate-fade"
            style={{ animationDelay: "2400ms" }}
          >
            <PlantEight width={94} />
          </div>
        )}

        {isLove && (
          <div
            className="absolute bottom-[228px] left-[155px] animate-fade"
            style={{ animationDelay: "2900ms" }}
          >
            <PlantNine width={102} />
          </div>
        )}

        {
          isLove && (
            <div
              className="absolute bottom-[10px]  animate-fade w-full"
            >
              <p className="text-center text-primary">{showText}</p>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default GrowUpPlant;
