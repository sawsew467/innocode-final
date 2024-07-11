"use client";

import { useState } from "react";

import Experience from "./Experience";
import { useRouter } from "next/navigation";

import FloatButtons from "./FloatButtons";
import Modals from "./modals";

function MuseumModule() {
  const router = useRouter();
  const [isShowDrawer, setIsShowDrawer] = useState(false);

  return (
    <>
      <FloatButtons />
      <section className="relative h-screen w-screen">
        <Modals isShowDrawer={isShowDrawer} setIsShowDrawer={setIsShowDrawer} />
        <Experience setIsShowDrawer={setIsShowDrawer} />
      </section>
    </>
  );
}

export default MuseumModule;
