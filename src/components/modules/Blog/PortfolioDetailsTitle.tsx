import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";
import Card from "../HomePage/FeaturedMemberSession/Dedicated/card";

interface PortfolioDetailsTitleProps {
  portfolio: {
    tag?: string;
    name?: string;
  } | null;
}

const PortfolioDetailsTitle: React.FC<PortfolioDetailsTitleProps> = ({ portfolio }) => {
  return (
    <div className=" relative flex flex-col justify-between mt-200">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="" data-aos="fade-right">
            <div className=" mb-65 lg-mb-40">
             
              <h2 className="text-5xl font-title font-bold px-[10%] py-4 ">{'portfolio?.name'}</h2>
            </div>
          </div>
          <img
        src="/images/shape/shape_175.svg"
        alt="shape"
        className="w-32 h-32  "
      />
        </div>
        {/* <img
        src="/images/shape/shape_172.svg"
        alt="shape"
        className="translate-y-[-80px] "
      /> */}
      </div>
  
      <Carousel className="w-full px-[10%] max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
             <div>hiii</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
 
    </Carousel>
     
    </div>
  );
};

export default PortfolioDetailsTitle;
