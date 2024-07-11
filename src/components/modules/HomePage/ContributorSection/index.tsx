"use client"

import { useState } from "react";
import items from "../../../../data/featuredMember";
import Image from "next/image";

const ContributorSection = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? items.slice(25, 34)
      : items.slice(25, 34).filter((item:any) => item.category.includes(filter));

  return (
    <div className="">
       <div className="text-center text-5xl font-bold m-12">Vì sự nghiệp toàn cầu hóa</div>
      <div className="container">
        <ul className="text-center g-control-nav-two">
          <li
            className={filter === "*" ? "is-checked" : ""}
            onClick={() => setFilter("*")}
          >
            Tất cả
          </li>
          <li
            className={filter === "marketing" ? "is-checked" : ""}
            onClick={() => setFilter("marketing")}
          >
            Trí tuệ nhân tạo
          </li>
          <li
            className={filter === "application" ? "is-checked" : ""}
            onClick={() => setFilter("application")}
          >
            Bán dẫn
          </li>
          <li
            className={filter === "design" ? "is-checked" : ""}
            onClick={() => setFilter("design")}
          >
            Xe điện
          </li>
          <li
            className={filter === "dev" ? "is-checked" : ""}
            onClick={() => setFilter("dev")}
          >
            Chuyển đổi số và môi trường
          </li>
        </ul>

        <div className="grid grid-cols-3 gap-4 mt-20">
          {filteredItems.map((item:any) => (
            <div className="" key={item.id}>
              <div className="hvr-shutter-out">
                <div className="img-meta w-full relative">
                  <Image
                    src={"https://fpt.com/Images/images/tin-tuc-2021/toa-nha/Toan-canh-toa-nha.jpg"}
                    width={400}
                    height={600}
                    alt="gallary"
                    className=" h-80 w-full object-fille tran5s"
                  />

                  <div className="content-center caption absolute top-1/2 text-center flex-col">
                    <span className="tag">{item.tag}</span>
                    <h6 className="text-lg text-white font-bold hover:underline hover:underline-offset-2">
                            kích vào đây
                    </h6>
                  </div>
                  {/* <!-- /.caption --> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributorSection;
