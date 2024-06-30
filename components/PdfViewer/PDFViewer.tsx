"use client";

import WebViewer from "@pdftron/webviewer";
import { useEffect, useRef, useState } from "react";

export default function PDFViewer() {
  const viewer = useRef<HTMLDivElement | null>(null);
  const instance = useRef<any>(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (viewer.current) {
      WebViewer(
        {
          path: "/lib",
          initialDoc: "/files/V2.pdf",
          licenseKey: "5ijNS9YTFRyblscwOWMp",
        },
        viewer.current
      ).then((inst) => {
        instance.current = inst;
      });
    }
  }, []);
  useEffect(() => {
    if (instance.current) {
      instance.current.loadDocument(`/files/V2.pdf`);
    }
  }, [show]);

  return (
    <div className="MyComponent">
      <div onClick={() => setShow(!show)} className="header">
        SHOW
      </div>
      <div className="webviewer h-[40vh] w-screen" ref={viewer}></div>
    </div>
  );
}
