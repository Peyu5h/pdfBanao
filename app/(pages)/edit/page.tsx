"use client";
import { Slider } from "@/components/Carousel/Slider";
import EditNavBar from "@/components/EditPageComponents/EditNavBar";
import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { LuMinus, LuRedo2, LuUndo2 } from "react-icons/lu";

const Edit = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <EditNavBar />

      <div className="mainPage">
        <div className=" absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] bg-white rounded-sm shadow-xl "></div>
      </div>

      {/* ==== */}
      <div className="footer h-36 flex flex-col gap-y-2">
        <div className="options flex justify-between select-none">
          <div className="undeRedo flex gap-x-3">
            <div className="undo rounded-2xl h-10  w-10 bg-grn hover:bg-grn/75 duration-300 text-darker flex items-center justify-center">
              <LuUndo2 />
            </div>
            <div className="redo rounded-2xl h-10  w-10 bg-grn hover:bg-grn/75 duration-300 text-darker flex items-center justify-center">
              <LuRedo2 />
            </div>
          </div>
          <div className="zoomInOut flex gap-x-2 items-center">
            <div className="undo rounded-2xl h-10  w-10 bg-grn hover:bg-grn/75 duration-300 text-darker flex items-center justify-center">
              <LuMinus />
            </div>
            <div className="percent text-2xl font-khand">100%</div>
            <div className="redo rounded-2xl h-10  w-10 bg-grn hover:bg-grn/75 duration-300 text-darker flex items-center justify-center">
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
