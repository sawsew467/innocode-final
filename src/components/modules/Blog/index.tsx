"use client";
import React from "react";

import Image from "next/image";
import { TracingBeam } from "./tracing-beam";
import PortfolioDetailsTitle from "./PortfolioDetailsTitle";
import Banner from "./Banner";
import Body from "./Body";
import fpt from "@public/timeline/FPTU-CSVC1thumb.webp";
export function BlogsModule() {
  return (
    <div>
      <TracingBeam className="px-6">
        {/* <PortfolioDetailsTitle portfolio={null} /> */}

        <div className="flex flex-col gap-20">
          <Banner
            tiltle={dummyContent?.title}
            image={dummyContent?.image}
          ></Banner>
          <Body description={dummyContent?.description}></Body>
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = {
  title: "EHEHEHE",
  image: fpt,
  description: ` <div>
      <h1>Lorem Ipsum Dolor Sit Amet</h1>
      <p>
        Sit duis est minim proident non nisi velit non consectetur. Esse
        adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
        Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
        incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
        fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
        nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
        occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
        officia sint labore. Tempor consectetur excepteur ut fugiat veniam
        commodo et labore dolore commodo pariatur.
      </p>
      <p>
        Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad veniam
        in commodo id reprehenderit adipisicing. Proident duis exercitation ad
        quis ex cupidatat cupidatat occaecat adipisicing.
      </p>
      <p>
        Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
        reprehenderit deserunt amet laborum consequat adipisicing officia qui
        irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud. Amet
        culpa officia aliquip deserunt veniam deserunt officia adipisicing
        aliquip proident officia sunt.
      </p>
    </div>`,
};
