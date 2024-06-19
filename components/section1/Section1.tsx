import Lottie from "lottie-react";
import React from "react";
import arrowLottie from "@/public/utils/arrowLottie.json";
import DragNDrop from "../DragNDrop";
import { MaskText } from "../ScrollTextReveal/MaskText";

const Section1 = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-16">
        <div className="w-96 relative flex flex-col ">
          <div className="text-5xl font-koulen flex">
            <MaskText param={"text-5xl"} phrase="An Ideal&nbsp;" />
            <span className="text-grn">
              <MaskText phrase=" PDF " param={"text-5xl"} />
            </span>
            <MaskText phrase="&nbsp;Editor" param={"text-5xl"} />
          </div>
          <div className="  ">
            <MaskText phrase="Found at last" param={"text-5xl"} />{" "}
            <Lottie
              className="absolute transform scale-x-[-1] right-8 top-5 h-48 w-48 -rotate-[55deg]"
              animationData={arrowLottie}
              loop={false}
            />
          </div>
        </div>
      </div>

      <div className="uploader">
        <DragNDrop />
      </div>
    </div>
  );
};

export default Section1;
