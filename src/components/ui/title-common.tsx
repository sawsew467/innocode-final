import { cn } from "@/lib/utils";
import { Earth, EarthIcon, EarthLock, EarthLockIcon } from "lucide-react";
import React from "react";

function Title({
  align = "center",
  title,
  subtitle,
  className,
}: {
  align?: "center" | "left";
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-[600px] flex-col",
        align === "left" ? "items-start" : "items-center",
        align === "center" && "mx-auto",
        className,
      )}
    >
      <div
        className={cn(
          "relative mb-2 flex items-center gap-2",
          "after:rounded-tr-0 after:rounded-br-0 after:absolute after:z-[-10] after:h-[40px] after:w-[20px] after:-translate-x-[8px] after:rounded-bl-[150px] after:rounded-tl-[150px] after:bg-background after:content-['']",
        )}
      >
        <Earth className="duration-5000 animate-spin text-primary" />
        <span className="text-base font-bold uppercase text-primary">
          {subtitle}
        </span>
      </div>
      <h3
        className={cn(
          "font-title text-5xl font-semibold leading-tight",
          align === "center" && "text-center",
        )}
      >
        {title}
      </h3>
    </div>
  );
}

export default Title;
