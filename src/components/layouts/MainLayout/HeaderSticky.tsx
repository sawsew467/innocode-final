"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import logo from "@public/images/logo.png";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useDetectScroll from "@smakss/react-scroll-direction";

const items = ["Về chúng tôi", "Thành tựu", "Nhân vật", "Cộng đồng"];

function HeaderSticky() {
  const [selected, setSelected] = useState(items[0]);
  const [isInHeader, setIsInHeader] = useState(true);

  const { scrollDir } = useDetectScroll();

  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setIsInHeader(false);
    } else {
      setIsInHeader(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={cn(
        "fixed bottom-0 left-0 right-0 top-0 z-[999] h-24 border-b-[1px] border-b-white/10 bg-white drop-shadow-md transition-all duration-500",
        scrollDir === "down" && "-translate-y-full",
        isInHeader && "-translate-y-full",
      )}
    >
      <div className="flex h-full w-full max-w-[1440px] items-center justify-between px-20 text-white">
        <Image src={logo} alt="" height={52} />
        <nav>
          <ul className="flex gap-10">
            {items.map((item) => (
              <li key={item}>
                <div
                  className="flex cursor-pointer items-center gap-2"
                  onClick={() => {
                    setSelected(item);
                  }}
                >
                  <span
                    className={cn(
                      "h-2 w-3 rounded-bl-full rounded-tl-full bg-primary transition-all",
                      selected === item ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm uppercase transition-all",
                      selected === item ? "text-primary" : "text-black",
                    )}
                  >
                    {item}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <Search width={20} className="text-black" />
          <Button>
            <div className="flex items-center gap-2">
              <span>Khám phá</span>
              <ArrowRight width={16} />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default HeaderSticky;
