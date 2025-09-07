client;

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SnapSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    
  }, { scope: section1Ref });

  return (
    <div ref={containerRef}>
      <div ref={section1Ref} className="h-screen flex items-center justify-center bg-zinc-300">
        <h2 className="text-5xl">SnapSection</h2>
      </div>
      <div ref={section2Ref} className="h-screen flex items-center justify-center bg-zinc-300">
        <p className="text-5xl">This is the content of the SnapSection.</p>
      </div>
    </div>
  );
};

export default SnapSection;
