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
      )
        .then((instance) => {
          // Handle instance if needed
        })
        .catch((error) => {
          console.error("Error initializing WebViewer:", error);
        });
    }

    // Clean up if needed
    return () => {
      // Perform any cleanup if necessary
    };
  }, []); // Only run this effect once on mount

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer h-[40vh] w-screen" ref={viewer}></div>
    </div>
  );
}
