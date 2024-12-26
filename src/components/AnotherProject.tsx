import gsap from 'gsap'
import { useRef } from 'react'

type PropsType = {
  name: string,
  siteLink: string,
  ballRef: HTMLDivElement | null
}

const AnotherProject = ({ name, siteLink, ballRef }: PropsType) => {

  const ref = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLHeadingElement>(null);

  const mouseEnterAnotherProject = () => {
    if (ballRef != null) {
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
      ballRef.current.innerHTML = `<h1 class="text-white text-[1.5rem] lg:text-[2rem] font-bold pl-5 pt-2">${name}</span>`
    }

  }

  const mouseLeaveAnotherProject = () => {
    // gsap.to(ref.current, { backgroundColor: "#ECECEC" });
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
    ballRef.current.innerHTML = ""
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
