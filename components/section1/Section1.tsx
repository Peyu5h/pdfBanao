import Lottie from "lottie-react";
import React from "react";
import arrowLottie from "@/public/utils/arrowLottie.json";
import DragNDrop from "../DragNDrop";
import { MaskText } from "../TextReveal/MaskText";

const Uploader = () => {
  return (
    <div className="w-full lg:w-[48rem] mx-auto">
      <div className="container gap-x-16 flex flex-col lg:flex-row lg:justify-between">
        {/* smaller screen header */}
        <div className="flex lg:hidden items-center justify-center mt-16 pl-2">
          <div className="w-full lg:w-96 relative flex flex-col ">
            <div className="flex flex-col ">
              <div className="text-5xl font-koulen flex">
                <MaskText param={"text-3xl sm:text-5xl"} phrase="An&nbsp;" />
                <MaskText param={"text-3xl sm:text-5xl"} phrase="Ideal&nbsp;" />
                <span className="text-grn">
                  <MaskText phrase=" PDF " param={"text-4xl sm:text-5xl"} />
                </span>
                <MaskText
                  phrase="&nbsp;Editor"
                  param={"text-3xl sm:text-5xl"}
                />
              </div>
              <div className="  ">
                <MaskText
                  phrase="Found at last"
                  param={"text-3xl sm:text-5xl"}
                />
              </div>
              <Lottie
                className="absolute transform scale-x-[-1] right-8 top-5 h-40 w-40 sm:h-48 sm:w-48 -rotate-[55deg]"
                animationData={arrowLottie}
                loop={false}
              />
            </div>
          </div>
        </div>
        {/* large screen header */}
        <div className="lg:flex hidden items-center ">
          <div className="flex flex-col relative">
            <div className="text-5xl font-koulen flex">
              <MaskText param={"text-4xl sm:text-5xl"} phrase="An&nbsp;" />
              <MaskText param={"text-4xl sm:text-5xl"} phrase="Ideal&nbsp;" />
              <span className="text-grn">
                <MaskText phrase=" PDF " param={"text-4xl sm:text-5xl"} />
              </span>
              <MaskText phrase="&nbsp;Editor" param={"text-4xl sm:text-5xl"} />
            </div>
            <div className="">
              <MaskText phrase="Found at last" param={"text-4xl sm:text-5xl"} />
            </div>
            <Lottie
              className="absolute lg:hidden transform scale-x-[-1] right-8 top-5 h-40 w-40 sm:h-48 sm:w-48 -rotate-[55deg]"
              animationData={arrowLottie}
              loop={false}
            />
            <Lottie
              className="hidden absolute lg:flex right-[-70px] top-[-20px] h-40 w-40 sm:h-48 sm:w-48 "
              animationData={arrowLottie}
              loop={false}
            />
          </div>
        </div>
        {/* common uploader */}
        <div className="uploader">
          <DragNDrop />
        </div>
      </div>
    </div>
  );
};

export default Uploader;
