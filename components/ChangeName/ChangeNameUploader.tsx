import React, { useState } from "react";
import { BiSolidFilePdf } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const ChangeNameUploader = () => {
  const [selectedPDF, setSelectedPDF] = useState<File | null>(null);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file && file.type === "application/pdf") {
      setSelectedPDF(file);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const handleReset = () => {
    setSelectedPDF(null);
  };

  const handleClickUpload = () => {
    const fileInput = document.getElementById(
      "fileInputChangeName"
    ) as HTMLInputElement | null;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div>
      <div className="flex mt-8 justify-center items-center w-[22rem] mx-auto h-28 border-2 border-dashed rounded-2xl p-5">
        {!selectedPDF && (
          <>
            <label
              htmlFor="fileInputChangeName"
              className="text-sm text-gray-400 cursor-pointer"
            >
              <div className="flex flex-col gap-y-2">
                <span className="text-xl text-center">
                  Upload your
                  <span
                    className="text-grn ml-2 hover:underline cursor-pointer"
                    onClick={handleClickUpload}
                  >
                    PDF
                  </span>
                  <span className="text-xl text-center">&nbsp;HERE</span>
                </span>
                <span className="text-xs font-khand text-center text-gray-400">
                  Maximum size: 25MB
                </span>
              </div>
            </label>
            <input
              type="file"
              id="fileInputChangeName"
              className="hidden"
              accept=".pdf"
              onChange={handleFileInputChange}
            />
          </>
        )}

        {selectedPDF && (
          <div className="flex items-center">
            <BiSolidFilePdf className="text-6xl text-red-500 mx-auto" />
            <p className="text-gray-700 mx-4 text-xs truncate w-36">
              {selectedPDF.name}
            </p>
            <div onClick={handleReset} className="cursor-pointer">
              <RxCross2 className="text-xl text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangeNameUploader;
