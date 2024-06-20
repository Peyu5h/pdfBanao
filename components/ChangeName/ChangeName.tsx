import React from "react";
import ChangeNameUploader from "./ChangeNameUploader";
import { InputForm } from "./InputForm";
import { MaskText } from "../TextReveal/MaskText";
import Paragraph from "../TextReveal/Character";

const ChangeName = () => {
  return (
    <div>
      <div className="p-4 lg:p-8">
        <h1 className="text-4xl">
          <MaskText phrase="Change name on practical" />
        </h1>
        <h2 className="ml-0.5 text-lg text-dark">
          <Paragraph paragraph="Only&nbsp;Upload&nbsp;PDF&nbsp;having&nbsp;any&nbsp;of&nbsp;5&nbsp;header&nbsp;from&nbsp;above." />
        </h2>
        <div className="flex flex-col gap-y-10">
          <ChangeNameUploader />
          <InputForm />
        </div>
      </div>
    </div>
  );
};

export default ChangeName;
