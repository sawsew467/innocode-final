import Image from "next/image";
import React from "react";
import SaveGreenImage from "@public/images/savegreen.png";

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
        <div className="absolute top-[260px] z-20 flex w-full translate-y-[-20%] justify-center">
          <div className="fotn flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary text-center">
            <p className="font-bold text-white">Trong Cay</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityContributions;
