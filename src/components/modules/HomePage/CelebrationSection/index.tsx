import Title from "@/components/ui/title-common";
import { EarthIcon, Mountain, MountainSnow } from "lucide-react";
import Image from "next/image";

const data = [
    {
        title: `Chuỗi sự kiện “Lên Ngàn”`,
        content: `FPT Education kỷ niệm 25 năm bằng chuỗi sự kiện "Lên Ngàn", khuyến khích tinh thần "vượt qua giới hạn" và "phát triển bền vững".`,
    },
    {
        title: `Chặng "Tiên phong"`,
        content: `CBGV chinh phục 8 đỉnh núi: Fansipan, Tả Liên Sơn, Tà Chì Nhù, Putaleng, Lảo Thẩn, Tà Xùa, Ngũ Chỉ Sơn và Everest Base Camp. Đây là cơ hội rèn luyện sức khỏe và gắn kết tinh thần đồng đội.`,
    },
    {
        title: `Hỗ trợ tài chính`,
        content: `Chương trình hỗ trợ 50% chi phí tour, tối đa 5.000.000 VNĐ mỗi người, tạo điều kiện thuận lợi cho CBGV tham gia. Chuỗi hoạt động truyền cảm hứng và khuyến khích tinh thần tiên phong.`,
    }
]

function CelebrationSection() {
    return (
        <div className="min-h-[300px] bg-primary-dark">
            <div className="container pt-[130px] pb-[130px] relative">
                <Image
                    src="/introduction/celebration-section_image.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-[85%] h-auto absolute -left-[20%] top-[5%]"
                />
                <div className="grid grid-cols-11">
                    <div className="col-span-5 place-content-center">
                        {/* <Image
                            src="/introduction/celebration_image(2).webp"
                            alt=""
                            width={1000}
                            height={1000}
                            className="w-[250px] z-10"
                        /> */}
                        <Image
                            src="/introduction/celebration_image(1).webp"
                            alt=""
                            width={1000}
                            height={1000}
                            className="w-[500px] h-[500px] object-cover z-10"
                        />
                    </div>
                    <div className="col-span-6 ml-5">
                        <Title
                            title='Kỷ Niệm 25 Năm Thành Lập FPT Education: Hành Trình "Lên Ngàn"'
                            subtitle="về chúng tôi"
                            align="left"
                            className="mb-5 text-white max-w-none"
                        />
                        <div className="flex flex-col gap-8">
                            {data.map((item, index) => (
                                <div key={index} className="flex flex-col relative">
                                    <div className="w-[10px] h-[20px] rounded-tr-[10px] rounded-br-[10px] bg-primary absolute top-[8px]"></div>
                                    <h2 className="ml-8 text-primary text-[26px] font-semibold" >
                                        {item.title}
                                    </h2>
                                    <span className="text-[#C4C4C4] ml-8">{item.content}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CelebrationSection;
