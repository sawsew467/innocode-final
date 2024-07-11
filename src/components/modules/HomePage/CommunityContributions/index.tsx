import Image from "next/image";
import React from "react";
import SaveGreenImage from "@public/images/savegreen.png";
import { PersonStanding, Trees, UserRound } from "lucide-react";
import Plant from "@public/svgr/Plant";
import GrowUpPlant from "./GrowUpPlant";



function CommunityContributions() {
  return (
    <div
      className="relative w-full py-20"
      style={{
        backgroundImage:
          "url('https://wordpress.zozothemes.com/ecohorbor/wp-content/uploads/sites/19/2024/03/wave-full-bg-1.png')",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "0px 125px",
      }}
    >
      <div className="">
        <div className="flex w-full translate-y-[-20%] justify-center">
          <h1 className="w-fit bg-white p-4 text-center text-[160px] font-[900] text-primary">
            SAVE GREEN
          </h1>
        </div>

        <div className="absolute left-1/2 top-[220px] z-10 -translate-x-1/2 -translate-y-1/2 transform">
          <Image
            src={SaveGreenImage}
            alt="Image"
            width={1000}
            height={1000}
            className="w-100"
          />
        </div>
        {/* <div className="absolute top-[235px] z-20 flex w-full translate-y-[-20%] cursor-pointer justify-center">
          <div className="relative z-20 flex h-[85px] w-[85px] cursor-pointer items-center justify-center rounded-full bg-[#305531] text-center transition-all hover:bg-[#4d8b4f]">
            <p className="font-bold text-white">
              <Trees size={38} />
            </p>
          </div>
          <div className="absolute top-[12px] h-[60px] w-[60px] animate-ping rounded-full border-2 border-primary"></div>
        </div> */}

        

        <div className="container relative bottom-[30px] z-20">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-primary">
                <UserRound className="text-white" size={18} />
              </span>
              <p className="text-center font-semibold">
                2.122 Người đã tưới cây cho cây xanh
              </p>
            </div>
            <p>(Nhấn vào biểu tượng cây xanh để đóng góp)</p>
          </div>
          <h1 className="mt-6 text-center text-[42px] font-bold">
            Biến đổi cuộc sống, từng bước xanh
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CommunityContributions;
