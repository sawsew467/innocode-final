"use client";

import { useState } from "react";
import items from "../../../../data/featuredMember";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const ContributorSection = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? items.slice(25, 34)
      : items
          .slice(25, 34)
          .filter((item: any) => item.category.includes(filter));

  return (
    <div className="mt-40">
      <div className="m-12 text-center text-5xl font-bold">
        Vì sự nghiệp toàn cầu hóa
      </div>
      <div className="container">
        <ul className="g-control-nav-two text-center">
          <li
            className={cn(
              "flex items-center justify-center hover:text-primary",
              filter === "*" ? "is-checked" : "",
            )}
            onClick={() => setFilter("*")}
          >
            Tất cả
          </li>
          <li
            className={cn(
              "flex items-center justify-center hover:text-primary",
              filter === "marketing" ? "is-checked" : "",
            )}
            onClick={() => setFilter("marketing")}
          >
            Trí tuệ nhân tạo
          </li>
          <li
            className={cn(
              "flex items-center justify-center hover:text-primary",
              filter === "application" ? "is-checked" : "",
            )}
            onClick={() => setFilter("application")}
          >
            Bán dẫn
          </li>
          <li
            className={cn(
              "flex items-center justify-center hover:text-primary",
              filter === "design" ? "is-checked" : "",
            )}
            onClick={() => setFilter("design")}
          >
            Xe điện
          </li>
          <li
            className={cn(
              "flex items-center justify-center hover:text-primary",
              filter === "dev" ? "is-checked" : "",
            )}
            onClick={() => setFilter("dev")}
          >
            Chuyển đổi số và môi trường
          </li>
        </ul>
        <motion.div className="mt-20 grid grid-cols-3 gap-4">
          <AnimatePresence mode="wait">
            {filteredItems.map((item: any, index: number) => (
              <motion.div
                initial={{
                  y: 60,
                  scale: 0.75,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  y: 60,
                  scale: 0.75,
                  opacity: 0,
                  transition: {
                    type: "spring",
                    duration: 0.5,
                    delay: 0.1 * index,
                  },
                }}
                transition={{
                  type: "spring",
                  duration: 0.5,
                  delay: 0.1 * index,
                }}
                className="cursor-pointer"
                key={item.id + filter}
                viewport={{
                  once: true,
                }}
              >
                <div className="hvr-shutter-out">
                  <div className="img-meta relative w-full">
                    <Image
                      src={
                        "https://fpt.com/Images/images/tin-tuc-2021/toa-nha/Toan-canh-toa-nha.jpg"
                      }
                      width={400}
                      height={600}
                      alt="gallary"
                      className="object-fille tran5s h-80 w-full"
                    />

                    <div className="caption absolute top-1/2 flex-col content-center text-center">
                      <span className="tag">{item.tag}</span>
                      <h6 className="text-lg font-bold text-primary hover:underline hover:underline-offset-2">
                        kích vào đây
                      </h6>
                    </div>
                    {/* <!-- /.caption --> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ContributorSection;
