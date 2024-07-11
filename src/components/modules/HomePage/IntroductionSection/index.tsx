import Title from "@/components/ui/title-common";
import { EarthIcon, Mountain, MountainSnow } from "lucide-react";
import Image from "next/image";

const data = [
  {
    introduction: "FPT Education, thành lập năm 1999, là một trong ba mảng hoạt động cốt lõi của Tập đoàn FPT - Tập đoàn tiên phong trong lĩnh vực CNTT của Việt Nam. Với tầm ảnh hưởng quốc tế, FPT Education đã mở rộng ra đầy đủ các cấp học, góp phần cung cấp nguồn nhân lực chất lượng cao cho thị trường lao động.",
    celebrationTitle: `Kỷ Niệm 25 Năm FPT Education`,
    celebrationContent: `FPT Education kỷ niệm 25 năm thành lập (1999-2024) với chuỗi sự kiện “Lên Ngàn”, chinh phục 25 đỉnh núi trong và ngoài nước. Chương trình thể hiện tinh thần "vượt qua giới hạn" và "phát triển bền vững", đồng thời hỗ trợ 50% chi phí cho CBGV tham gia.`,
  }
]

function IntroductionSection() {
  return (
    <div className="min-h-[300px]">
      <div className="container pt-[130px] pb-[130px]">
        <div className="relative">
          <Image
            src="/introduction/background_image.webp"
            alt=""
            width={500}
            height={500}
            className="max-w-none w-full absolute right-[20%] top-[150px] animate-alternate"
          />
        </div>
        <div className="row items-center">
          <div className="flex flex-row">
            <div className="mt-[100px] mr-[20px]">
              <Title
                title="FPT Education"
                subtitle="về chúng tôi"
                align="left"
                className="mb-5"
              />
              {data.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <p className="text-[#7A7A7A] text-base mb-9">{item.introduction}</p>
                  <div className="flex flex-row gap-10">
                    <div className="items-start">
                      <MountainSnow className="text-primary w-12 h-12" />
                    </div>
                    <div>
                      <p className="text-[20px] font-semibold mb-4">{item.celebrationTitle}</p>
                      <span className="text-[#7A7A7A] text-base">{item.celebrationContent}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ml-[20px] flex flex-row relative">
              <div>
                <div className="bg-primary w-fit rounded-tl-[20px] rounded-br-[20px] pt-[30px] pr-[20px] pb-[40px] pl-[55px] mb-[16px]">
                  <p className="text-[#ffff] text-2xl italic mb-[18px]">&quot;Làm khác để làm tốt&quot;</p>
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-[60px] h-[1px] bg-white ml-[20px]"></div>
                    <span className="text-[#ffff] text-sm w-28">Lê Trường Tùng</span>
                  </div>
                </div>
                <Image
                  src="/introduction/Introduction_image(2).png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-[274px] h-[400px] max-w-none object-cover rounded-[12px]"
                />
              </div>
              <Image
                src="/introduction/Introduction_image(6).jpg"
                alt=""
                width={1000}
                height={1000}
                className="w-[274px] h-[420px] max-w-none object-cover rounded-[12px] ml-[28px] mt-[64px] "
              />
              <Image
                src="/introduction/about-shape-1.webp"
                alt=""
                width={500}
                height={500}
                className="max-w-none w-[170px] h-[170px] absolute top-[53%] left-[35%] duration-50000 animate-spin"
              />
              <div className="w-[130px] h-[130px] rounded-full bg-white absolute top-[57%] left-[39%]"></div>
              <div className="w-[120px] h-[120px] rounded-full bg-white border-2 border-dashed border-primary absolute top-[57%] left-[39.5%] duration-50000 animate-spin"></div>
              <Image
                src="/introduction/fpt-education-logo(2).webp"
                alt=""
                width={500}
                height={500}
                className="max-w-none w-[100px] h-auto absolute top-[63%] left-[41.5%]"
              />
              <div className="w-[70px] h-[70px] bg-primary absolute top-[78%] left-[77%]"></div>
              <div className="w-[20px] h-[20px] bg-[#ebebeb] absolute top-[88%] left-[63%]"></div>
              <div className="w-[42px] h-[42px] bg-[#ebebeb] absolute top-[95%] left-[71%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionSection;
