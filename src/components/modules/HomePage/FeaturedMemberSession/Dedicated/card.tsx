import Image from "next/image";
import { TextGenerateEffect } from "./text-moving";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Card = () => {
  return (
    <div>
      <div className="relative">
        <div className="mx-auto max-w-7xl rounded-md px-8">
          <div className=" my-8 grid grid-cols-1 md:grid-cols-2">
            <div>
              <Image
                src="/images/dedicated/man.svg"
                alt="man-icon"
                width={316}
                height={500}
                className="mx-auto object-cover w-[65%] md:mx-0"
              />
            </div>
            <div className="relative flex flex-col content-between justify-between">
              <Image
                src="images/dedicated/comma.svg"
                alt="comma-image"
                width={200}
                height={106}
                className="comma-pos z-[0] opacity-50 absolute hidden lg:block"
              />
              <div className="flex flex-col gap-8 z-[10]">
                <div>
                  <h2 className="mt-5 pt-4 text-center text-4xl font-bold sm:leading-tight lg:text-start lg:text-6xl">
                    Cóc vàng công nghệ thông tin
                  </h2>
                  <TextGenerateEffect
                    words={
                      "Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis"
                    }
                  />
                </div>
                <div className="flex justify-start gap-8">
                  <div className="my-auto h-0 w-28 content-center justify-center border-4 border-background"></div>

                  <div className="text-2xl font-semibold">Lee Văn A, K18 DN</div>
                </div>
                <Button className="mt-4 w-1/3 z-[500]">
                  <div className="flex items-center gap-2">
                    <span>Tìm hiểu thêm</span>
                    <ArrowRight width={16} />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
