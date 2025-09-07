"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headerRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // One timeline controls both elements
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: "40px top",
          scrub: 1,
          // Turn on markers during local development if you want
          markers: true,
        },
      });

      tl.to(
        headerRef.current,
        {
          // Using numeric paddings is more performant and avoids layout thrash
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        },
        0
      ).to(
        navRef.current,
        {
          borderRadius: 0,
        },
        0
      );
    },
    { scope: headerRef } // limits selector lookups and cleans on unmount
  );

  return (
    <div className="bg-emerald-300 h-[200vh]">
      <header
        ref={headerRef}
        className="sticky top-0 pt-10 px-10 will-change-[padding]">
        <nav
          ref={navRef}
          className="w-full h-16 rounded-lg flex items-center gap-6 justify-center bg-white shadow will-change-[border-radius]">
          <ul className="flex items-center gap-6">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
