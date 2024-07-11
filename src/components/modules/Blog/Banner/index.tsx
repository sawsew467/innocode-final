import Image from "next/image";

function Banner({ image, tiltle }: any) {
  return (
    <div className="mx-auto mt-[84px] flex w-full max-w-[1440px] flex-col sm:space-y-[16px]">
      <div className="relative aspect-[16/9] w-full">
        <Image
          loading="lazy"
          src={image}
          alt={tiltle}
          width={900}
          height={900}
          className="absolute h-full w-full rounded-[6px] object-cover"
        />
        <div className="absolute bottom-0 z-0 w-full bg-gradient-to-t from-[#202020] sm:h-32 md:h-40 lg:h-44" />
        <div className="absolute h-full w-full rounded-[6px] bg-black opacity-25"></div>
        <div className="absolute h-full w-full">
          <div className="absolute sm:w-[calc(100%-40px)] lg:w-[calc(100%-80px)]"></div>
          <div className="absolute bottom-0 w-full">
            <div className="w-full sm:space-y-[12px] sm:px-[20px] sm:py-[20px] lg:space-y-[16px] lg:px-[40px] lg:py-[40px]">
              <div className="w-full truncate whitespace-nowrap font-[700] uppercase tracking-[0.5px] text-white sm:text-[18px] md:text-[32px] lg:text-[38px] xl:text-[48px]">
                {tiltle}
              </div>
              <div className="space-y-[8px]">
                <div className="flex content-center space-x-[10px] text-[16px] font-[400] lowercase tracking-[0.32px] text-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
