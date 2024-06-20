"use client";

import { Slider } from "@/components/Carousel/Slider";
import Navbar from "@/components/NavBar/Navbar";
import Paragraph from "@/components/TextReveal/Character";
import { MaskText } from "@/components/TextReveal/MaskText";
import ToolCard from "@/components/ToolCard";
import Uploader from "@/components/section1/Section1";
import Marquee from "@/components/ui/Marquee";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const page = () => {
  return (
    <div className="select-none">
      <div className="p-4 lg:p-8">
        <Navbar />
        <Uploader />
      </div>
      <Marquee />

      <div className=" p-6 lg:p-8 text-xl">
        <h1 className="text-4xl mb-6">
          <MaskText phrase="TOOLS YOU NEED TO WORK WITH PDF " />
        </h1>
        <div className="flex gap-2 flex-wrap items-center justify-center">
          <ToolCard title="EDIT PDF" />
          <ToolCard title="MERGE PDF" />
          <ToolCard title="ADD IMG" />
          <ToolCard title="IMG to pdf" />
          <ToolCard title="INSERT PG" />
          <ToolCard title="DELETE PG" />
          <ToolCard title="SCAN TO pdf" />
          <ToolCard title="PDF TO DOC" />
          <ToolCard title="LOCK PDF" />
        </div>
      </div>

      <div className="section3 p-6 lg:p-8 text-xl">
        <h1 className="text-4xl">
          <MaskText phrase="CREATE PRACTICAL PDF" />
        </h1>
        <h2 className="ml-0.5">
          <Paragraph paragraph="CHOOSE&nbsp;ONE&nbsp;TEMPLATE" />
        </h2>
        <div className="carsoul">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default page;
