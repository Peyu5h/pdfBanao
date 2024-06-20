import React from "react";
import ToolCard from "../ToolCard";
import { MaskText } from "../TextReveal/MaskText";

const AllTools = () => {
  return (
    <div>
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
    </div>
  );
};

export default AllTools;
