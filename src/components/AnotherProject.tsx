import gsap from "gsap";
import { useRef } from "react";

type PropsType = {
  name: string;
  siteLink: string;
  image: string;
  ballRef: React.RefObject<HTMLDivElement> | null;
  ballTextRef: React.RefObject<HTMLHeadingElement> | null;
  index: number;
  onHover: (image: string) => void;
  onLeave: () => void;
};

const AnotherProject = ({
  name,
  siteLink,
  image,
  ballRef,
  ballTextRef,
  index,
  onHover,
  onLeave,
}: PropsType) => {
  const ref = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLHeadingElement>(null);
  const indexRef = useRef<HTMLHeadingElement>(null);

  const handleEnter = () => {
    if (ballRef?.current == null || ballTextRef?.current == null) return;

    onHover(image);

    gsap.to(linkRef.current, { opacity: 0, duration: 0 });
    gsap.to(indexRef.current, { opacity: 0, duration: 0 });

    gsap.to(ballRef.current, {
      backgroundColor: "black",
      borderRadius: "0px",
      width: ref.current?.clientWidth,
      height: ref.current?.clientHeight,
      duration: 0.2,
    });
    ballRef.current.classList.remove("mix-blend-difference");
    ballTextRef.current.style.cssText =
      "opacity: 1; color: #ECECEC; font-size: 2rem; font-weight: bold;" +
      "display: flex; align-items: center; justify-content: center;" +
      "height: 100%; width: 100%; margin: 0; padding: 0 1rem; box-sizing: border-box;";
    ballTextRef.current.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 1.25rem;">
        <div style="display: flex; align-items: center; gap: 1.25rem;">
          <span style="color: #ECECEC; font-weight: bold; font-size: 4rem; line-height: 1;">0${index}.</span>
          <span style="color: #ECECEC; font-weight: bold; font-size: 1.5rem; line-height: 1;">${name}</span>
        </div>
        <div style="display: flex; align-items: center;">
          <img src="./arrow-up-solid.svg" alt="arrow" style="width: 2em; height: 2em; transform: rotate(45deg);" />
        </div>
      </div>`;
  };

  const handleLeave = () => {
    if (ballRef?.current == null || ballTextRef?.current == null) return;

    onLeave();

    gsap.to(linkRef.current, { opacity: 1, duration: 0.2 });
    gsap.to(indexRef.current, { opacity: 1, duration: 0.2 });

    gsap.to(ballRef.current, {
      backgroundColor: "#ECECEC",
      borderRadius: "999px",
      width: "20px",
      height: "20px",
      duration: 0.2,
    });
    ballRef.current.classList.add("mix-blend-difference");
    ballTextRef.current.style.cssText = "";
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="border-b first:border-t border-black w-full py-2 pl-2 relative"
    >
      <a target="_blank" href={siteLink || undefined} className="flex items-center gap-5">
        <h1
          ref={indexRef}
          className="text-black font-bold text-[4em]"
        >{`0${index}.`}</h1>
        <h1
          ref={linkRef}
          className="text-black text-[1.5rem] lg:text-[2rem] font-bold"
        >
          {name}
        </h1>
      </a>
    </div>
  );
};

export default AnotherProject;
