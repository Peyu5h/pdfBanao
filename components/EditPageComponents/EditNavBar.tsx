"use client";

import React, { useState } from "react";
import { FiEdit, FiShare } from "react-icons/fi";
import { IoChevronBackOutline } from "react-icons/io5";
import { RiImageAddFill } from "react-icons/ri";
import { RxText } from "react-icons/rx";
import { MdDraw } from "react-icons/md";
import { BsFillEraserFill } from "react-icons/bs";
import { AiFillFileAdd } from "react-icons/ai";
import { BiEraser } from "react-icons/bi";

const EditNavBar = () => {
  const [activeTool, setActiveTool] = useState("edit");
  return (
    <div className="flex select-none justify-between items-center gap-x-1 text-grn">
      <div className="backBTN cursor-pointer duration-300 w-14 h-14 flex items-center justify-center text-xl pr-1  rounded-[1.2rem] text-grn bg-dark">
        <IoChevronBackOutline />
      </div>
      <div className="ToolBar flex-1">
        <div className="h-14 w-full bg-dark rounded-[1.2rem] flex items-center ">
          <div className="tools flex text-2xl p-2 gap-x-1">
            <div
              onClick={() => setActiveTool("edit")}
              className={` cursor-pointer p-2 ${
                activeTool == "edit" ? "bg-grn text-darker" : "bg-none text-grn"
              } h-10 w-10 rounded-2xl flex items-center justify-center`}
            >
              <FiEdit />
            </div>

            <div
              onClick={() => setActiveTool("addImg")}
              className={` cursor-pointer p-2 ${
                activeTool == "addImg"
                  ? "bg-grn text-darker"
                  : "bg-none text-grn"
              } h-10 w-10 rounded-2xl flex items-center justify-center`}
            >
              <RiImageAddFill />
            </div>

            <div
              onClick={() => setActiveTool("addText")}
              className={` cursor-pointer p-2 ${
                activeTool == "addText"
                  ? "bg-grn text-darker"
                  : "bg-none text-grn"
              } h-10 w-10 rounded-2xl flex items-center justify-center`}
            >
              <RxText />
            </div>

            <div
              onClick={() => setActiveTool("draw")}
              className={` cursor-pointer p-2 ${
                activeTool == "draw" ? "bg-grn text-darker" : "bg-none text-grn"
              } h-10 w-10 rounded-2xl flex items-center justify-center`}
            >
              <MdDraw />
            </div>

            <div
              onClick={() => setActiveTool("erase")}
              className={`hidden xss:flex cursor-pointer p-2 ${
                activeTool == "erase"
                  ? "bg-grn text-darker"
                  : "bg-none text-grn"
              } h-10 w-10 rounded-2xl flex items-center justify-center`}
            >
              <BsFillEraserFill />
            </div>

            <div
              onClick={() => setActiveTool("import")}
              className={`cursor-pointer p-2 ${
                activeTool == "import"
                  ? "bg-grn text-darker"
                  : "bg-none text-grn"
              } h-10 w-10 rounded-2xl flex items-center justify-center`}
            >
              <AiFillFileAdd />
            </div>
          </div>
        </div>
      </div>
      <div className="Share">
        <div className="h-14 w-14 text-xl  bg-dark rounded-[1.2rem] flex items-center justify-center gap-x-1 ">
          <FiShare />
        </div>
      </div>
    </div>
  );
};

export default EditNavBar;
