// Transisi antar-route: dua panel fullscreen (hitam + #ECECEC) menutup layar
// lalu reveal dari atas. useLayoutEffect = cover sebelum browser paint (tanpa flash).
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = () => {
  const { pathname } = useLocation();
  const first = useRef(true);
  const top = useRef<HTMLDivElement>(null); // #000
  const bottom = useRef<HTMLDivElement>(null); // #ECECEC

  useLayoutEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const panels = [top.current, bottom.current];
    gsap.set(panels, {
      display: "block",
      visibility: "visible",
      yPercent: 0,
    });

    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          onComplete: () => {
            gsap.set(panels, { display: "none", visibility: "hidden" });
          },
        })
        .to(top.current, { yPercent: -100, duration: 0.55, ease: "power3.inOut" }, 0)
        .to(bottom.current, { yPercent: -100, duration: 0.55, ease: "power3.inOut" }, 0.35);
      void tl;
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      <div
        ref={top}
        aria-hidden="true"
        className="hidden fixed top-0 left-0 w-full h-full bg-black z-[100] pointer-events-none"
      />
      <div
        ref={bottom}
        aria-hidden="true"
        className="hidden fixed top-0 left-0 w-full h-full bg-[#ECECEC] z-[99] pointer-events-none"
      />
    </>
  );
};

export default PageTransition;
