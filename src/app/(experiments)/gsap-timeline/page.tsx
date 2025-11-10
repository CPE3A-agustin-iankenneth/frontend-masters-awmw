"use client";

import gsap from "gsap";
import { Antonio } from "next/font/google";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const antonio = Antonio({
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div className={antonio.className}>
      <TitleSection />
    </div>
  );
}

function TitleSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const split = SplitText.create(".title", {
        type: "words, chars",
        wordsClass: "title-word++",
      });

      const tl = gsap.timeline();

      tl.from(split.chars, {
        duration: 0.8,
        autoAlpha: 0,
        y: 200,
        stagger: 0.03,
        ease: "circ.out",
      });

      tl.to(
        ".gsap-word",
        {
          "--weight": 700,
          fontSize: "14rem",
          ease: "circ.out",
          duration: 0.4,
        },
        "-=0.6s"
      );

      tl.to(
        ".basics-word",
        {
          letterSpacing: "0.1em",
          ease: "circ.out",
          duration: 0.6,
        },
        "<+0.2s"
      );
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div
      ref={containerRef}
      className="bg-blue-300 text-black flex h-screen items-end justify-left"
    >
      <h1 className="title font-thin text-[20rem] leading-none pb-[0.1em] text-left">
        <span
          className="gsap-word [font-variation-settings:'wght'_var(--weight)]"
          style={{ "--weight": 100 } as React.CSSProperties}
        >
          GSAP
        </span>
        <br />
        <span className="basics-word">basics</span>
      </h1>
    </div>
  );
}
