"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import SlideWraper from "./components/SlideWraper";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedLink from "./components/AnimatedLink";
import { data, anotherProject } from "../pojectData";
import Project from "./components/Project";
import AnotherProject from "./components/AnotherProject";

function App() {
  const ref = useRef(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const ballTextRef = useRef<HTMLHeadingElement>(null);
  const underline = useRef<HTMLDivElement>(null);
  const projectImage = useRef<HTMLImageElement>(null);
  const projectImageRef = useRef<HTMLImageElement>(null);


  gsap.registerPlugin(TextPlugin, ScrollTrigger);

  const tl = gsap.timeline();
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.15;

  const mouseEnter = (siteLink: string | undefined) => {
    console.log(siteLink)
    // if (siteLink) {
    gsap.to(ballRef.current, {
      width: 100,
      height: 100,
      backgroundColor: "white",
    });
    ballRef.current?.classList.remove("mix-blend-difference");
    gsap.to(ballTextRef.current, { opacity: 1 });

    if (ballTextRef.current != null && ballRef.current != null) {
      ballTextRef.current.style.marginTop = `40px`
      if (siteLink) {
        ballTextRef.current.innerText = "View Site"
      } else {
        ballTextRef.current.innerText = "No Site"
        ballTextRef.current.style.color = "white"
        gsap.to(ballRef.current, { backgroundColor: "black" });
      }
    }
    // }
  };
  const mouseLeave = (siteLink: string | undefined) => {
    console.log(siteLink)
    // if (siteLink) {
    ballRef.current?.classList.add("mix-blend-difference");
    gsap.to(ballRef.current, { width: 20, height: 20 });
    gsap.to(ballTextRef.current, { opacity: 0 });
    if (!siteLink && ballTextRef.current != null) {
      ballTextRef.current.style.marginTop = `0px`
      gsap.to(ballRef.current, { backgroundColor: "white" });
      ballTextRef.current.style.color = "black"
    }
    // }
  };

  function animatedLinkMouseEnter() {
    gsap.set(underline.current, { scaleX: 1, width: "100%" });
    // gsap.to(ballRef.current, {width: 60, height: 60, border: 2, borderColor: 'white', backgroundColor: 'transparent'})
    gsap.from(underline.current, { scaleX: "0", transformOrigin: "left" });
  }

  function animatedLinkMouseLeave() {
    // gsap.to(ballRef.current, {width: 20, height: 20, backgroundColor: 'white',})
    gsap.to(underline.current, { scaleX: "0", transformOrigin: "right" });
    // gsap.set(underline.current, {scaleX: 1})
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("#ball", { xPercent: -50, yPercent: -50 });

      tl.to("#loader1", {
        scaleX: 0,
        duration: 1,
        transformOrigin: "right",
        ease: "sine",
        delay: 1,
      })
        .to(
          "#loader2",
          { scaleX: 0, duration: 1, transformOrigin: "right", ease: "sine" },
          "-=0.1",
        )
        .from(
          ".slider",
          { scaleX: 0, duration: 1, transformOrigin: "left", ease: "sine" },
          "+=0.4",
        )
        .to(
          ".slider",
          { scaleX: 0, duration: 0.3, transformOrigin: "right", ease: "sine" },
          "+=0.1",
        )
        .fromTo(
          ".children",
          { opacity: 0, y: 10 },
          { opacity: 1, stagger: 0.1, y: 0, duration: 0.6, ease: "sine" },
          "-=0.8",
        )
        .from(".horizontalLine", { width: "0%", duration: 1 }, "+=0.1");

      gsap.from("#title-project", {
        scrollTrigger: {
          trigger: "#title-project",
          // markers: true,
          start: "top bottom",
          toggleActions: "restart",
          once: false,
        },
        y: 70,
        duration: "1",
      });

      gsap.from("#title-about", {
        scrollTrigger: {
          trigger: "#title-about",
          // markers: true,
          start: "top bottom",
          toggleActions: "restart",
          once: false,
        },
        y: 70,
        duration: "1",
      });

      const xSet = gsap.quickSetter("#ball", "x", "px");
      const ySet = gsap.quickSetter("#ball", "y", "px");

      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });
    }, ref);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", () => null);
    };
  }, []);

  return (
    <div ref={ref}>
      <div className="w-full h-full px-4">
        <div
          id="loader1"
          className="fixed top-0 left-0 bg-black w-full h-full z-[5]"
        ></div>
        <div
          id="loader2"
          className="fixed bottom-0 left-0 bg-[#ECECEC] w-full h-full z-[4]"
        ></div>
        <div
          ref={ballRef}
          id="ball"
          className="bg-[#ECECEC] rounded-full w-[20px] 
            h-[20px] fixed top-0 left-0 pointer-events-none 
            mix-blend-difference z-[3]"
        >
          <div className="pl-5">
            <h1
              className="text-black opacity-0 text-[12px]"
              ref={ballTextRef}
            >
            </h1>
          </div>
        </div>
        <header className="mix-blend-difference backdrop-blur-md shadow-md py-[20px] px-4 fixed top-0 left-0 w-full z-[2] ">
          <div className="flex justify-end">
            <div className="flex gap-3">
              <SlideWraper>
                <span>Rey Mooy</span>
              </SlideWraper>
            </div>
          </div>
        </header>
        <div className="w-full h-screen pt-[3.5rem] max-w-[1200px] lg:mx-auto lg:my-0">
          <section className="grid grid-cols-12 gap-4">
            <div className="col-span-full col-start-1 w-fit">
              <SlideWraper>
                <h1 className="title text-[6rem] md:text-[10rem] lg:text-[18rem] font-bold leading-[0.7] lg:leading-[0.3]">
                  rey
                </h1>
              </SlideWraper>
            </div>
            <div className="w-fit mt-10 lg:mt-0 col-span-12 lg:col-span-4 lg:col-start-1 lg:col-end-4 self-end">
              <SlideWraper>
                <p>
                  i am a fullstack developer,<br></br> based in indonesia
                </p>
              </SlideWraper>
            </div>
            <div className="col-span-8 col-start-1 lg:col-start-4 col-end-13 w-fit row-start-2">
              <SlideWraper>
                <h1 className="title text-[6rem] md:text-[10rem] lg:text-[18rem] font-bold leading-[0.7] lg:leading-[0.3]">
                  mooy
                </h1>
              </SlideWraper>
            </div>
          </section>

          <div className="horizontalLine w-full bg-[#ECECEC] text-black h-[0.5px] my-[1.3rem]"></div>
          <div className="grid grid-cols-12 gap-4">
            <div className="grid-span-2 col-start-1 col-end-3 flex flex-col gap-4 w-fit">
              <SlideWraper>
                <AnimatedLink
                  name="twitter"
                  link="https://twitter.com/itzyaboirey"
                />
              </SlideWraper>
              <SlideWraper>
                <AnimatedLink
                  name="instagram"
                  link="https://www.instagram.com/_itzyaboirey/"
                />
              </SlideWraper>
              <SlideWraper>
                <AnimatedLink
                  name="whatsapp"
                  link="https://wa.me/+6281338047308"
                />
              </SlideWraper>
            </div>
            <div className="grid-span-2 col-start-5 lg:col-start-3 col-end-5 flex flex-col gap-4 w-fit">
              <SlideWraper>
                <AnimatedLink
                  name="github"
                  link="https://github.com/reymooy27"
                />
              </SlideWraper>
              <SlideWraper>
                <AnimatedLink
                  name="linkedin"
                  link="https://www.linkedin.com/in/rey-mooy-1a60a01a6/"
                />
              </SlideWraper>
            </div>
            <div className="grid-span-2 row-start-2 lg:row-start-1 col-start-1 lg:col-start-5 col-end-12 flex flex-col gap-4 w-fit">
              <SlideWraper>
                <AnimatedLink
                  name="gdrrey@gmail.com"
                  link="mailto:gdrrey@gmail.com"
                />
              </SlideWraper>
              <SlideWraper>
                <AnimatedLink name="curriculum vitae" link="https://drive.google.com/file/d/1WNT4VcPt02ec0wBtl7k42s4IhHfcBFf7/view?usp=sharing" />
              </SlideWraper>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full mt-10">
        <div className="px-4">
          <h1
            className="text-[6rem] md:text-[10rem] lg:text-[18rem] text-center font-bold leading-none"
            id="title-project"
          >
            projects
          </h1>
        </div>
        <div className="projectWrapper relative bg-[#ECECEC] rounded-t-[50px] lg:rounded-t-[100px] rounded-b-[50px] w-full h-full pt-28 px-4 pb-28">
          <div className="w-full max-w-[1200px] lg:mx-auto flex flex-col">
            {data.map((project) => (
              <Project
                mouseEnter={mouseEnter}
                mouseLeave={mouseLeave}
                animatedLinkMouseEnter={animatedLinkMouseEnter}
                animatedLinkMouseLeave={animatedLinkMouseLeave}
                key={project.id}
                name={project.name}
                image={project.image}
                language={project.language}
                techStack={project.techStack}
                githubLink={project.githubLink}
                siteLink={project.siteLink}
                datetime={project.datetime}
                ref={underline}
              />
            ))}

            {/* another project */}
            <div className="grid grid-cols-12 gap-4 mt-[8rem] mb-[8rem] md:mb-[15rem]">
              <div className="col-start-1 col-end-13 md:col-end-4 md:row-start-1 relative">
                <h1 className="text-black font-bold text-[1rem] lg:text-[1.5rem]">
                  another project
                </h1>
                <div ref={projectImage} className="mt-5 opacity-0 hidden lg:block absolute top-[2rem] left-[-10rem] shadow-[5px_8px_10px_5px_rgba(0,0,0,0.3)]">
                  <img ref={projectImageRef} src="./images-5.png" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-start-1 md:col-start-4 col-end-13 row-start-2 md:row-start-1">
                {anotherProject.map((project, index) => (
                  <AnotherProject
                    key={project.id}
                    name={project.name}
                    siteLink={project.siteLink}
                    ballRef={ballRef}
                    ballTextRef={ballTextRef}
                    index={index + 4}
                    imageRef={projectImage}
                    image={project.image}
                    projectImageRef={projectImageRef}
                  />
                ))}
              </div>
            </div>
            {/* another project */}

          </div>

          {/* about */}
          <div className="absolute bottom-0 left-0 right-0 w-full mb-[-1.6rem] md:mb-[-2.7rem] lg:mb-[-5rem]">
            <h1
              className="text-[6rem] md:text-[10rem] lg:text-[18rem] text-center font-bold text-black leading-none"
              id="title-about"
            >
              about
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-[8rem] px-4 lg:mx-auto w-full max-w-[1200px]">
        <div className="grid grid-cols-12 gap-4 mb-[4rem]">
          <div className="col-start-1 col-end-13 md:col-end-4 md:row-start-1">
            <h1 className="font-bold text-[1rem] lg:text-[1.5rem]">
              education
            </h1>
          </div>
          <div className="col-start-1 md:col-start-4 col-end-13 row-start-2 md:row-start-1">
            <div className="border-b first:border-t border-white w-full py-4 pl-2 grid grid-cols-3">
              <h1 className="text-[1rem]">2019-2023</h1>
              <h1 className="text-[1rem] font-bold col-start-2">
                Universitas Citra Bangsa
              </h1>
              <h1 className="text-[1rem] col-start-3">
                Teknologi Informasi
              </h1>
            </div>
            <div className="border-b first:border-t border-white w-full py-4 pl-2 grid grid-cols-3">
              <h1 className="text-[1rem]">2015-2017</h1>
              <h1 className="text-[1rem] font-bold col-start-2">
                SMA Negeri 1 Kupang
              </h1>
            </div>
          </div>
        </div>

        {/* experience */}
        <div className="grid grid-cols-12 gap-4 mb-[4rem]">
          <div className="col-start-1 col-end-13 md:col-end-4 md:row-start-1">
            <h1 className="font-bold text-[1rem] lg:text-[1.5rem]">
              experience
            </h1>
          </div>
          <div className="col-start-1 md:col-start-4 col-end-13 row-start-2 md:row-start-1">
            <div className="border-b first:border-t border-white w-full py-4 pl-2 grid grid-cols-3">
              <h1 className="text-[1rem]">Oct 2024 - now</h1>
              <h1 className="text-[1rem] font-bold  col-start-2">
                Koding Next Kupang
              </h1>
              <h1 className="text-[1rem] col-start-3">Advanced Teacher</h1>
            </div>
            <div className="border-b first:border-t border-white w-full py-4 pl-2 grid grid-cols-3">
              <h1 className="text-[1rem]">Jan 2024 - May 2024</h1>
              <h1 className="text-[1rem] font-bold  col-start-2">
                Platon Indonesia
              </h1>
              <h1 className="text-[1rem] col-start-3">Fullstack Engineer</h1>
            </div>
            <div className="border-b first:border-t border-white w-full py-4 pl-2 grid grid-cols-3">
              <h1 className="text-[1rem]">2023 - now</h1>
              <h1 className="text-[1rem] font-bold  col-start-2">
                Webminds Kupang
              </h1>
              <h1 className="text-[1rem] col-start-3">Freelance Developer</h1>
            </div>
            <div className="border-b first:border-t border-white w-full py-4 pl-2 grid grid-cols-3">
              <h1 className="text-[1rem]">Feb 2023 - Mar 2023</h1>
              <h1 className="text-[1rem] font-bold col-start-2">
                Diskominfo Kota Kupang
              </h1>
              <h1 className="text-[1rem] col-start-3">Student Intern</h1>
            </div>
          </div>
        </div>
        {/* experience */}

        {/* skills */}
        <div className="grid grid-cols-12 gap-4 pb-[8rem]">
          <div className="col-start-1 col-end-13 md:col-end-4 md:row-start-1">
            <h1 className="font-bold text-[1rem] lg:text-[1.5rem]">skills</h1>
          </div>
          <div className="col-start-1 md:col-start-4 col-end-13 row-start-2 md:row-start-1">
            <div className="w-full grid md:grid-cols-5 gap-4">
              <h1 className="text-[1rem] font-bold col-start-1">HTML</h1>
              <h1 className="text-[1rem] font-bold col-start-2">CSS</h1>
              <h1 className="text-[1rem] font-bold col-start-3">Javascript</h1>
              <h1 className="text-[1rem] font-bold col-start-1 md:col-start-4">Typescript</h1>
              <h1 className="text-[1rem] font-bold col-start-2 md:col-start-5">Golang</h1>
              <h1 className="text-[1rem] font-bold col-start-3 md:col-start-1">Python</h1>
              <h1 className="text-[1rem] font-bold col-start-1 md:col-start-2">ReactJS</h1>
              <h1 className="text-[1rem] font-bold col-start-2 md:col-start-3">NextJS</h1>
              <h1 className="text-[1rem] font-bold col-start-3 md:col-start-4">React Native</h1>
              <h1 className="text-[1rem] font-bold col-start-1 md:col-start-5">Redux</h1>
              <h1 className="text-[1rem] font-bold col-start-2 md:col-start-1">NodeJS</h1>
              <h1 className="text-[1rem] font-bold col-start-3 md:col-start-2">ExpressJS</h1>
              <h1 className="text-[1rem] font-bold col-start-1 md:col-start-3">Django</h1>
              <h1 className="text-[1rem] font-bold col-start-2 md:col-start-4">MongoDB</h1>
              <h1 className="text-[1rem] font-bold col-start-3 md:col-start-5">MySQL</h1>
              <h1 className="text-[1rem] font-bold col-start-1">Rest API</h1>
              <h1 className="text-[1rem] font-bold col-start-2">Git</h1>
              <h1 className="text-[1rem] font-bold col-start-3">Docker</h1>
              <h1 className="text-[1rem] font-bold col-start-1 md:col-start-4">Linux</h1>
              <h1 className="text-[1rem] font-bold col-start-2 md:col-start-5">PostgreSQL</h1>
              {/* <h1 className="text-[1rem] font-bold col-start-3">Redux</h1> */}
            </div>
          </div>
        </div>
        {/* skills */}

      </div>
    </div>
  );
}

export default App;
