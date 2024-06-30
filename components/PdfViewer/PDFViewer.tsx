"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

export default function PDFViewer() {
  const viewer = useRef<HTMLDivElement | null>(null);
  const instance = useRef<any>(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const loadWebViewer = async () => {
      const WebViewer = (await import("@pdftron/webviewer")).default;
      if (viewer.current) {
        WebViewer(
          {
            path: "/lib",
            initialDoc: "/files/V2.pdf",
            licenseKey: "5ijNS9YTFRyblscwOWMp",
            disabledElements: [
              // "viewControlsButton",
              // "viewControlsOverlay",
              // "toolsOverlay",
              // "ribbonsDropdown",
              // "selectToolButton",
              // "panToolButton",
              // "leftPanelButton",
              // "toggleNotesButton",
              // "toolsHeader",
            ],
          },
          viewer.current
        );
      }
    };
    loadWebViewer();
  }, []);

  return (
    <div className="MyComponent">
      <div onClick={() => setShow(!show)} className="header">
        SHOW
      </div>
      <div className="webviewer h-[40vh] w-screen" ref={viewer}></div>
    </div>
  );
}
