import React, { useState } from "react";
import { BiSolidFilePdf } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { SlCloudUpload } from "react-icons/sl";

const DragNDrop = () => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);

    const files = e.dataTransfer.files;
    handleFile(files[0]);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (
      file &&
      (file.type === "image/png" || file.type === "application/pdf")
    ) {
      setSelectedFile(file);
    } else {
      alert("Please select a valid PNG or PDF file.");
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    // setCertificateData(null);
    // setIsVerified(false);
  };

  return (
    <div>
      <div
        className={`flex  mt-8 relative justify-center items-center w-[22rem] mx-auto h-64 border-2 ${
          isDragActive ? "border" : "border-dashed"
        }  rounded-2xl p-5
                ${
                  isDragActive ? "bg-sky-50 border-sky-400" : "border-gray-300"
                }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <label
          htmlFor="fileInput"
          className={`text-sm ${
            isDragActive ? "text-sky-800" : "text-gray-400"
          }`}
        >
          {isDragActive
            ? "Leave Your File Here"
            : selectedFile == null && (
                <div className="flex flex-col gap-y-2">
                  <SlCloudUpload className="text-6xl text-gray-400 mx-auto" />
                  <span className="text-xl text-center">
                    Drag and drop or
                    <span className="text-grn ml-2 hover:underline cursor-pointer">
                      Browse
                    </span>
                  </span>
                  <span className="text-[11px] font-thin font-khand text-center text-overlay  text-gray-400">
                    Maximum size: 25mb
                  </span>
                </div>
              )}
        </label>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          accept=".pdf"
          onChange={handleFileInputChange}
        />

        {selectedFile && (
          <div className="mt-3">
            <div
              onClick={handleReset}
              className="absolute top-0 right-0 mt-3 mr-4 cursor-pointer"
            >
              <RxCross2 className="text-2xl" />
            </div>
            {selectedFile.type === "application/pdf" ? (
              <div className="flex flex-col items-center">
                <BiSolidFilePdf className="text-6xl text-red-500 mx-auto" />
              </div>
            ) : null}
            <p className=" text-gray-700 mx-auto text-center text-xs mt-4">
              {selectedFile.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DragNDrop;
