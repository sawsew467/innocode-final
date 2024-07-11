import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Earth } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import ArrowSubcribe from "@public/svgr/ArrowSubcribe";
import banner from "@public/images/banner.png";
import earth from "@public/images/circle-earth.png";

function HeroSection() {
  return (
    <div className="relative h-[calc(100vh-0px)] overflow-hidden">
      <Image
        alt=""
        src={banner}
        width={1920}
        height={1080}
        className="h-full w-full object-cover"
      />
      <div className="bg-primary-darker/80 absolute inset-0" />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-center">
        <div className="container">
          <div className={cn("mt-20 flex flex-col items-start")}>
            <div
              className={cn(
                "relative mb-2 flex items-center gap-2",
                "after:rounded-tr-0 after:rounded-br-0 after:absolute after:z-[-10] after:h-[40px] after:w-[20px] after:-translate-x-[8px] after:rounded-bl-[150px] after:rounded-tl-[150px] after:bg-background after:content-['']",
              )}
            >
              <Earth className="duration-5000 animate-spin text-primary" />
              <span className="text-base font-bold uppercase text-primary">
                PHÁT TRIỂN BỀN VỮNG
              </span>
            </div>
            <h3
              className={cn(
                "font-title text-6xl font-semibold leading-tight text-white",
              )}
            >
              KỶ NIỆM 25 NĂM <br /> FPT EDUCATION
            </h3>
            <h5 className="mb-10 mt-6 text-xl text-[#D5D8D8]">
              Trí tuệ nhân tạo - Bán dẫn - Xe điện - Chuyển đổi số - Môi trường
              xanh
            </h5>
            <Link href={"trien-lam"}>
              <Button>
                <div className="flex items-center gap-2">
                  <span>Khám phá</span>
                  <ArrowRight width={16} />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-[450px] -right-[112px]">
        <div className="bg-primary-darker absolute left-1/2 top-1/2 z-10 flex h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-full blur-[180px]" />
        <div className="absolute left-1/2 top-1/2 z-20 flex h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-full">
          {/* <span className="mt-20 text-4xl text-white">fuse</span>
          <div className="mt-5 h-1 w-32 rounded-full bg-white" />
          <span className="mt-10 text-center text-5xl text-white">
            InnoCode Camp <br /> 2024
          </span> */}
        </div>
        <Image
          src={earth}
          alt=""
          width={760}
          height={760}
          className="duration-50000 left-0 top-0 z-[-10] h-[760px] w-[760px] max-w-none animate-spin object-cover"
        />
      </div>
      <div className="absolute right-32 top-40 z-10">
        <ArrowSubcribe />
      </div>
    </div>
  );
}

export default HeroSection;
