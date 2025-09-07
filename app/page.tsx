"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    gsap.to("#header", {
      padding: "0px 0px",
      scrollTrigger: {
        trigger: "#header",
        start: "top top",
        end: "40px top",
        scrub: true,
        markers: true,
      },
    });

    gsap.to("#top-nav", {
      borderRadius: "0px",
      scrollTrigger: {
        trigger: "#header",
        start: "top top",
        end: "40px top",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="bg-emerald-300 h-[200vh]">
      <header id="header" className="sticky top-0 pt-10 px-10">
        <div id="top-nav" className="w-full h-16 rounded-lg flex items-center gap-4 justify-center bg-white">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
        </div>
      </header>
    </div>
  );
}
