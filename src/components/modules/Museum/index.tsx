"use client";

import { useState } from "react";
import Experience from "./Experience";
import { CircleHelp, Info, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import FloatButtons from "./FloatButtons";

function MuseumModule() {
  const router = useRouter();
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  return (
    <>
      <FloatButtons />
      <section className="h-screen w-screen">
        <Experience setIsShowDrawer={setIsShowDrawer} />
      </section>
    </>
  );
}

export default MuseumModule;
