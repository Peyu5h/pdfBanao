"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function InfinitetextOnScroll() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: "bottom bottom",
        onUpdate: (self) => {
          direction = self.direction === 1 ? -1 : 1;
        },
      },
    });

    tl.to(slider.current, { x: "-500px" });

    animate();
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(thirdText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <main className="relative flex mt-8 mb-4 overflow-hidden bg-dark">
      <div className="text-grn ">
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            ref={firstText}
            className="relative m-0  text-6xl pr-[50px] font-bold leading-tight"
          >
            {`PDF BANAO - PDF BANAO - PDF BANAO - PDF BANAO - `}
          </p>

          <p
            ref={thirdText}
            className="absolute left-full top-0 m-0  text-6xl pr-[50px] font-bold leading-tight"
          >
            {`PDF BANAO - PDF BANAO - PDF BANAO - PDF BANAO - `}
          </p>
        </div>
      </div>
    </main>
  );
}
