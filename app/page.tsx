"use client";

import Navbar from "@/components/NavBar/Navbar";
import Paragraph from "@/components/TextReveal/Character";
import { MaskText } from "@/components/TextReveal/MaskText";
import ToolCard from "@/components/ToolCard";
import Uploader from "@/components/section1/Section1";
import Marquee from "@/components/ui/Marquee";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-4 lg:p-8">
        <Navbar />
        <Uploader />
      </div>
      <Marquee />

      <div className="section2 p-4 lg:p-8 text-xl">
        <h1 className="text-3xl mb-6">
          <Paragraph paragraph="TOOLS&nbsp;YOU&nbsp;NEED&nbsp;TO&nbsp;WORK&nbsp;WITH&nbsp;PDF" />
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

      <div className="section3 p-4 lg:p-8 text-xl">
        <h1 className="text-3xl">CREATE PRACTICAL PDF</h1>
        <h2>CHOOSE ONE TEMPLATE</h2>
      </div>
    </div>
  );
};

export default page;
