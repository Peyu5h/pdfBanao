import React from "react";
import { BsFiletypeDoc } from "react-icons/bs";
import { FiDatabase, FiEdit } from "react-icons/fi";
import { GrDocumentImage } from "react-icons/gr";
import { IoDocumentLockOutline } from "react-icons/io5";
import { LuFileScan, LuMerge } from "react-icons/lu";
import { RiImageAddFill } from "react-icons/ri";
import { TiDocumentAdd, TiDocumentDelete } from "react-icons/ti";

type ToolCardProps = {
  title: string;
};

const ToolCard = (info: ToolCardProps) => {
  let logo = <FiDatabase />;
  const { title } = info;
  if (title === "EDIT PDF") {
    logo = <FiEdit />;
  } else if (title === "MERGE PDF") {
    logo = <LuMerge />;
  } else if (title === "ADD IMG") {
    logo = <RiImageAddFill />;
  } else if (title === "IMG to pdf") {
    logo = <GrDocumentImage />;
  } else if (title === "SCAN TO pdf") {
    logo = <LuFileScan />;
  } else if (title === "INSERT PG") {
    logo = <TiDocumentAdd className=" text-2xl sm:text-5xl" />;
  } else if (title === "DELETE PG") {
    logo = <TiDocumentDelete className="text-2xl sm:text-[44px] mb-1" />;
  } else if (title === "PDF TO DOC") {
    logo = <BsFiletypeDoc />;
  } else if (title === "LOCK PDF") {
    logo = <IoDocumentLockOutline />;
  }
  return (
    <div>
      <div className="card gap-y-2  select-none  flex flex-col sm:h-28 sm:w-28 h-20 w-20  bg-dark hover:bg-light duration-300 cursor-pointer rounded-3xl p-2  items-center justify-center text-grn">
        <div className="logo text-2xl sm:text-4xl">{logo}</div>
        <h1 className="sm:text-xl text-sm ">{info.title}</h1>
      </div>
    </div>
  );
};

export default ToolCard;
