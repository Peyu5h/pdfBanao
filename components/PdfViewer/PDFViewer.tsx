"use client";

import WebViewer from "@pdftron/webviewer";
import { useEffect, useRef } from "react";

export default function PDFViewer() {
  const viewer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (viewer.current) {
      WebViewer(
        {
          path: "/lib",
          initialDoc: "/files/V2.pdf",
          licenseKey: "5ijNS9YTFRyblscwOWMp",
        },
        viewer.current
      ).then((instance) => {});
    }
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer h-[40vh] w-screen" ref={viewer}></div>
    </div>
  );
}
