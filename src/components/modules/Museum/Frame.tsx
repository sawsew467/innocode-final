import { Html } from "@react-three/drei";
import Image from "next/image";
import React from "react";

function Frame() {
  return (
    <>
      <Html
        position={[16, 8, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        transform
        zIndexRange={[0, 0]}
        occlude="blending"
      >
        <div className="flex flex-col items-center gap-10 bg-none">
          <div className="select-none bg-slate-950 p-2">
            <div className="bg-white p-4">
              <Image
                alt=""
                src={"/images/banner.png"}
                width={1920}
                height={1080}
                className="w-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </Html>
      <Html
        position={[16, 4, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        transform
        zIndexRange={[0, 0]}
        occlude="blending"
      >
        <p>Hello</p>
      </Html>
    </>
  );
}

export default Frame;
