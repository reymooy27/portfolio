import gsap from 'gsap'
import { useRef } from 'react'

type PropsType = {
  name: string,
  siteLink: string,
  ballRef: React.RefObject<HTMLDivElement> | null
  ballTextRef: React.RefObject<HTMLSpanElement> | null
}

const AnotherProject = ({ name, siteLink, ballRef, ballTextRef }: PropsType) => {

  const ref = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLHeadingElement>(null);

  const mouseEnterAnotherProject = () => {
    if (ballRef?.current != null && ballTextRef?.current != null) {
      // gsap.to(ref.current, { backgroundColor: "black" });
      gsap.to(linkRef.current, { opacity: 0, duration: 0.2 });
      gsap.to(ballRef.current,
        {
          backgroundColor: "black",
          borderRadius: "0px",
          width: ref.current?.clientWidth,
          height: ref.current?.clientHeight,
          duration: 0.2
        }
      );
      ballRef.current?.classList.remove("mix-blend-difference");
      ballTextRef.current.style.opacity = "1"
      ballTextRef.current.style.color = "#ECECEC"
      ballTextRef.current.style.fontSize = "2rem"
      ballTextRef.current.style.fontWeight = "bold"
      ballTextRef.current.innerText = name
    }

  }

  const mouseLeaveAnotherProject = () => {
    // gsap.to(ref.current, { backgroundColor: "#ECECEC" });
    if (ballRef?.current != null && ballTextRef?.current != null) {
      gsap.to(linkRef.current, { opacity: 1, duration: 0.2 });
      gsap.to(ballRef.current,
        {
          backgroundColor: "#ECECEC",
          borderRadius: "999px",
          width: "20px",
          height: "20px",
          duration: 0.2
        }
      );
      ballRef.current?.classList.add("mix-blend-difference");
      ballTextRef.current.style.color = "black"
      ballTextRef.current.style.opacity = "0"
      ballTextRef.current.style.fontSize = "12px"
      ballTextRef.current.style.fontWeight = "regular"
      ballTextRef.current.innerText = ""
    }
  }

  return (
    <div
      ref={ref}
      onMouseEnter={() => mouseEnterAnotherProject()}
      onMouseLeave={() => mouseLeaveAnotherProject()}
      className="border-b first:border-t border-black w-full py-2 pl-2 relative"
    >
      <a target="_blank" href={siteLink}>
        <h1 ref={linkRef} className="text-black text-[1.5rem] lg:text-[2rem] font-bold ">
          {name}
        </h1>
      </a>
    </div>
  );
};

export default AnotherProject;
