import gsap from 'gsap'
import { useRef } from 'react'

type PropsType = {
  name: string,
  siteLink: string,
  image: string,
  ballRef: React.RefObject<HTMLDivElement> | null
  ballTextRef: React.RefObject<HTMLSpanElement> | null
  index: number,
  imageRef: React.RefObject<HTMLDivElement> | null
  projectImageRef: React.RefObject<HTMLImageElement> | null
}

const AnotherProject = ({ name, siteLink, ballRef, ballTextRef, index, imageRef, image, projectImageRef }: PropsType) => {

  const ref = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLHeadingElement>(null);
  const indexRef = useRef<HTMLHeadingElement>(null);

  const mouseEnterAnotherProject = () => {
    if (ballRef?.current != null && ballTextRef?.current != null && imageRef?.current != null && projectImageRef?.current != null) {
      // gsap.to(ref.current, { backgroundColor: "black" });
      gsap.to(linkRef.current, { opacity: 0, duration: 0 });
      gsap.to(indexRef.current, { opacity: 0, duration: 0, });
      gsap.to(imageRef.current, { opacity: 1, duration: 0.2, y: 20 });
      projectImageRef.current.src = image
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
      ballTextRef.current.style.display = "flex"
      ballTextRef.current.innerHTML = `
        <div class="flex justify-between w-full pr-3">
          <div class="flex items-end gap-5">
            <h1 class='text-[#ECECEC] font-bold text-[4rem]'>0${index}.</h1>
            <h1 class="text-[#ECECEC] text-[1.5rem] lg:text-[2rem] font-bold mb-3">${name}</h1>
          </div>
          <div class="h-full flex items-center justify-center">
          <img src="./arrow-up-solid.svg" alt="arrow" class="w-[2em] h-[2em] rotate-45 text-[#ECECEC]" />
          </div>
        </div>`
    }

  }

  const mouseLeaveAnotherProject = () => {
    // gsap.to(ref.current, { backgroundColor: "#ECECEC" });
    if (ballRef?.current != null && ballTextRef?.current != null && imageRef?.current != null) {
      gsap.to(linkRef.current, { opacity: 1, duration: 0.2 });
      gsap.to(indexRef.current, { opacity: 1, duration: 0.2 });
      gsap.to(imageRef.current, { opacity: 0, duration: 0.2 });
      gsap.to(imageRef.current, { opacity: 0, duration: 0.2, y: 0 });
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
      ballTextRef.current.innerHTML = ""
    }
  }

  return (
    <div
      ref={ref}
      onMouseEnter={() => mouseEnterAnotherProject()}
      onMouseLeave={() => mouseLeaveAnotherProject()}
      className="border-b first:border-t border-black w-full py-2 pl-2 relative"
    >
      <a target="_blank" href={siteLink} className='flex items-end gap-5'>
        <h1 ref={indexRef} className='text-black font-bold text-[4em]'>{`0${index}.`}</h1>
        <h1 ref={linkRef} className="text-black text-[1.5rem] lg:text-[2rem] font-bold mb-3">
          {name}
        </h1>
      </a>
    </div>
  );
};

export default AnotherProject;
