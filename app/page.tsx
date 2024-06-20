"use client";

import AllTools from "@/components/AllTools/AllTools";
import { Slider } from "@/components/Carousel/Slider";
import ChangeName from "@/components/ChangeName/ChangeName";
import ChangeNameUploader from "@/components/ChangeName/ChangeNameUploader";
import { InputForm } from "@/components/ChangeName/InputForm";
import CreateFromTemplate from "@/components/CreateFromTemplate/CreateFromTemplate";
import DragNDrop from "@/components/DragNDrop";
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
      <AllTools />
      <CreateFromTemplate />

      <ChangeName />
    </div>
  );
};

export default page;
