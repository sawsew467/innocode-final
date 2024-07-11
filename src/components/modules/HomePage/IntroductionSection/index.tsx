import Title from "@/components/ui/title-common";
import { EarthIcon } from "lucide-react";
import Image from "next/image";

const data = [
  {
    introduction: "FPT Education, thành lập năm 1999, là một trong ba mảng hoạt động cốt lõi của Tập đoàn FPT - Tập đoàn tiên phong trong lĩnh vực CNTT của Việt Nam. Với tầm ảnh hưởng quốc tế, FPT Education đã mở rộng ra đầy đủ các cấp học, góp phần cung cấp nguồn nhân lực chất lượng cao cho thị trường lao động.",
    celebrationTitle: `Kỷ Niệm 25 Năm Thành Lập FPT Education: Hành Trình "Lên Ngàn"`,
    celebrationContent: `Năm 2024, FPT Education kỷ niệm 25 năm thành lập (1999-2024) bằng chuỗi sự kiện “Lên Ngàn” đầy ý nghĩa. Chương trình này mang đến cho các cán bộ giảng viên (CBGV) cơ hội chinh phục 25 đỉnh núi trong và ngoài nước, thể hiện tinh thần "vượt qua giới hạn" và "phát triển bền vững". \n Khởi đầu là chặng "Tiên phong" với 8 đỉnh núi, bao gồm Fansipan, Tả Liên Sơn, Tà Chì Nhù, Putaleng, Lảo Thẩn, Tà Xùa, Ngũ Chỉ Sơn và hành trình đến Everest Base Camp. Đây là cơ hội để các CBGV FPT Edu rèn luyện sức khỏe, gắn kết tinh thần đồng đội, và trải nghiệm những thử thách đáng giá. \n Chương trình hỗ trợ 50% chi phí tour, với tổng hỗ trợ tối đa 5.000.000 VNĐ mỗi người, tạo điều kiện thuận lợi cho các CBGV tham gia. Chuỗi hoạt động kỷ niệm không chỉ nhìn lại 1/4 thế kỷ phát triển của FPT Education mà còn truyền cảm hứng cho thế hệ trẻ, thúc đẩy tinh thần tiên phong và khát vọng chinh phục những tầm cao mới.`,
  }
]

function IntroductionSection() {
  return (
    <div className="min-h-[300px]">
      <div className="container ">
        <div className="row items-center">
          <div className="flex flex-row">
            <div className="mb-[60px] ">
              <Title
                title="FPT Education"
                subtitle="about us"
                align="left"
                className="mb-[35px]"
              />
              {data.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <p className="text-[#7A7A7A] text-base mb-4">{item.introduction}</p>
                  <h2 className="text-5xl font-semibold mb-4">{item.celebrationTitle}</h2>
                  <p className="text-[#7A7A7A] flex flex-col gap-3 mb-4 text-base">{item.celebrationContent.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                    </span>
                  ))}
                  </p>
                </div>
              ))}
            </div>
            <div className="">
              <div className="mb-[60px] flex flex-row relative">
                <div>
                  <div className="bg-primary w-fit rounded-tl-[20px] rounded-br-[20px] pt-[30px] pr-[20px] pb-[40px] pl-[55px] mb-[16px]">
                    <p className="text-[#ffff] text-2xl italic mb-[18px]">&quot;Làm khác để làm tốt&quot;</p>
                    <div className="flex flex-row items-center gap-2">
                      <div className="w-[60px] h-[1px] bg-white ml-[20px]"></div>
                      <span className="text-[#ffff] text-sm w-28">Lê Trường Tùng</span>
                    </div>
                  </div>
                  <Image
                    src="/Introduction_image(2).png"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-[274px] h-[400px] max-w-none object-cover rounded-[12px]"
                  />
                </div>
                <Image
                  src="/25-years_celebration .webp"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-[274px] h-[420px] max-w-none object-cover rounded-[12px] ml-[28px] mt-[64px]"
                />
                <Image
                src="/about-shape-1.webp"
                alt=""
                width={500}
                height={500}
                className="max-w-none w-[170px] h-[170px] absolute top-[53%] left-[90%]"
                />
                <div className="w-[120px] h-[120px] rounded-full bg-white border-2 border-dashed border-primary absolute top-[57%] left-[101%]"></div>
                <Image
                  src="/fpt-education-logo(2).webp"
                  alt=""
                  width={500}
                  height={500}
                  className="max-w-none w-[100px] h-auto absolute top-[63%] left-[105%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionSection;
