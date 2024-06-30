"use client";
import { Slider } from "@/components/Carousel/Slider";
import EditNavBar from "@/components/EditPageComponents/EditNavBar";
import React, { useRef, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { LuMinus, LuRedo2, LuUndo2 } from "react-icons/lu";
import PDFViewer from "@/components/PdfViewer/PDFViewer";

const Edit = () => {
  const [file, setFile] = useState<string | null>(null);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFile(fileURL);
    }
  };

  return (
    <div className="p-4 items-stretch h-screen overflow- flex flex-col">
      <div className="h-[10vh] px-0 xl:px-64">
        <EditNavBar />
      </div>

      <div className="h-full flex-grow mx-auto mt-12">
        <div className="flex   bg-white rounded-sm shadow-xl ">
          <div>
            <PDFViewer />
          </div>
        </div>
      </div>

      <div className="h-[25vh] flex flex-col gap-y-2 mb-8 px-0 xl:px-64 ">
        <div className="options flex justify-between select-none">
          <div className="undeRedo flex gap-x-3">
            <div className="undo rounded-2xl h-10 w-10 bg-grn hover:bg-grn/75 duration-300 text-darker flex items-center justify-center">
              <LuUndo2 />
            </div>
            <div className="redo rounded-2xl h-10 w-10 bg-grn hover:bg-grn/75 duration-300 text-darker flex items-center justify-center">
              <LuRedo2 />
            </div>
          </div>
          <div className="zoomInOut flex gap-x-2 items-center">
            <div className="undo rounded-2xl h-10 w-10 bg-grn hover:bg-grn/75 duration-300 text-darker flex items-center justify-center">
              <LuMinus />
            </div>
            <div className="percent text-2xl font-khand">100%</div>
            <div className="redo rounded-2xl h-10 w-10 bg-grn hover:bg-grn/75 duration-300 text-darker flex items-center justify-center">
              <IoAddOutline />
            </div>
          </div>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Edit;
