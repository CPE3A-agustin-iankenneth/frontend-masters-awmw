"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { SplitText } from "gsap/all";

export default function Page() {

  const container = useRef<HTMLDivElement>(null); // useRef for gsap context to scope animations
  gsap.registerPlugin(SplitText); // register SplitText plugin

  // useEffect to run the animation on component mount
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(".title", {
  //       duration: 1,
  //       x: -200,
  //       opacity: 0,
  //     })
  //   }, container)

  //   return () => {
  //     ctx.revert();
  //   }
  // }, [])

  // using useGSAP hook for the same effect
  useGSAP(() => {
    SplitText.create(".title", {
      type: "chars, words",
      charsClass: "letter",
    }) 

    gsap.from(".title .letter", {
      duration: 1,
      y: 200,
      opacity: 0,
      ease: "power4.inOut",
      stagger: 0.03,
    })
  }, {
    scope: container
  })

  return (
    <div className="bg-blue-300 text-black">
      <div className="title">A title that isnt supposed to be here</div>
      <div ref={container} className="flex h-screen items-end justify-left overflow-hidden">
        <h1 className="title font-black text-[min(20rem,30vw)] leading-none pb-[0.1em] text-left">
          GSAP
          <br />
          tweens
        </h1>
      </div>
    </div>
  );
}
