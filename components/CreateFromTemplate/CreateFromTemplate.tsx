import React from "react";
import { MaskText } from "../TextReveal/MaskText";
import Paragraph from "../TextReveal/Character";
import { Slider } from "../Carousel/Slider";

const CreateFromTemplate = () => {
  return (
    <div>
      <div className="p-8 lg:p-8">
        <h1 className="text-4xl">
          <MaskText phrase="CREATE PRACTICAL PDF" />
        </h1>
        <h2 className="ml-0.5 mb-2">
          <Paragraph paragraph="CHOOSE&nbsp;ONE&nbsp;TEMPLATE" />
        </h2>
        <div className="carsoul">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default CreateFromTemplate;
