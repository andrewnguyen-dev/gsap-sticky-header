"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SnapSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);

  gsap.defaults({ ease: "none", duration: 2 });

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: "#section-1",
        start: "top top",
        // end is implicitly added as +=100vh
        scrub: 1,
        pin: true,
        pinSpacing: false,
        // markers: true,
      });
      ScrollTrigger.create({
        trigger: "#section-2",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        markers: true,
      });
    },
    { scope: containerRef }
  );

  return (
    <div id="container" ref={containerRef}>
      <div ref={section1Ref} id="section-1" className="h-screen flex items-center justify-center bg-blue-300">
        <h2 className="text-5xl">SnapSection</h2>
      </div>
      <div ref={section2Ref} id="section-2" className="h-screen flex items-center justify-center bg-zinc-300">
        <p className="text-3xl">This is the content of the SnapSection.</p>
      </div>
      <footer className="h-80 bg-gray-500">
        abc
      </footer>
    </div>
  );
};

export default SnapSection;
