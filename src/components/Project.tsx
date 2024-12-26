import { gsap } from "gsap";
import { forwardRef, useLayoutEffect, useRef } from "react";
// import AnimatedLink from "./AnimatedLink"

type PropsType = {
  name: string;
  image: string;
  language: string;
  techStack: string;
  githubLink: string;
  siteLink?: string | undefined;
  datetime: string;
  mouseEnter: (siteLink: string | undefined) => void;
  mouseLeave: (siteLink: string | undefined) => void;
  animatedLinkMouseEnter: () => void;
  animatedLinkMouseLeave: () => void;
};

const Project = forwardRef<HTMLDivElement, PropsType>((props) => {
  // const Project = forwardRef<HTMLDivElement, PropsType>((props , ref)=>{

  const projectRef = useRef(null);
  const projectNameRef = useRef(null);
  const projectImageRef = useRef(null);
  // const projectDetailsRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top bottom",
            toggleActions: "restart",
            once: false,
            // markers: true,
          },
        })
        .from(projectNameRef.current, { y: 100, opacity: 0, duration: 1 })
        .from(
          projectImageRef.current,
          { y: 50, opacity: 0, duration: 0.8 },
          "-=0.5",
        );
      // .from(projectDetailsRef.current, {y: 30, opacity: 0, duration: 0.8}, '+0.1')
    }, projectRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={projectRef}
      className="projects flex flex-col mb-[4rem] [&:nth-child(2)]:items-end"
    >
      <div>
        <div ref={projectNameRef}>
          <h1 className="text-[1rem] lg:text-[1.5rem] text-black font-bold leading-none">
            {props.name}
          </h1>
          <span className="text-[12px] text-black">{props.datetime}</span>
        </div>
        <div ref={projectImageRef} className="img w-fulll lg:w-[40rem] pt-4">
          {props.siteLink ? (
            <a target="_blank" href={props.siteLink}>
              <img
                onMouseEnter={() => props.mouseEnter(props?.siteLink)}
                onMouseLeave={() => props.mouseLeave(props?.siteLink)}
                className="shadow-[5px_8px_10px_5px_rgba(0,0,0,0.3)] object-cover filter grayscale contrast-100 hover:filter-none w-full h-full transition-all ease-in-out duration-1000"
                src={props.image}
                alt=""
              />
            </a>
          ) : (
            <img
              onMouseEnter={() => props.mouseEnter(props?.siteLink)}
              onMouseLeave={() => props.mouseLeave(props?.siteLink)}
              className="shadow-[5px_8px_10px_5px_rgba(0,0,0,0.3)] object-cover filter grayscale contrast-100 hover:filter-none w-full h-full transition-all ease-in-out duration-1000"
              src={props.image}
              alt=""
            />
          )}
        </div>
        {/* <div ref={projectDetailsRef} className='details pt-6 flex flex-col'>
          <span className='uppercase text-gray-500'>Language <span className='uppercase text-black'>{props.language}</span></span>
          <span className='uppercase text-gray-500'>Tech Stack <span className='uppercase text-black'>{props.techStack}</span></span>
          <AnimatedLink underlineColor="black" className="text-black"  name="GITHUB" link={props.githubLink}/>
        </div> */}
      </div>
    </div>
  );
});

export default Project;

