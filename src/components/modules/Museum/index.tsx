"use client";

import { useState } from "react";
import Experience from "./Experience";

function MuseumModule() {
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  return (
    <section className="h-screen w-screen">
      <Experience setIsShowDrawer={setIsShowDrawer} />
    </section>
  );
}

export default MuseumModule;
