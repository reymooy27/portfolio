import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useLayoutEffect, useRef } from "react";
import { data } from "./generated/projectData";
import AnimatedLink from "./components/AnimatedLink";
import AnotherProject from "./components/AnotherProject";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import SlideWraper from "./components/SlideWraper";
import SEO from "./components/SEO";

function App() {
  const ref = useRef(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const ballTextRef = useRef<HTMLHeadingElement>(null);
  const underline = useRef<HTMLDivElement>(null);
  const projectImage = useRef<HTMLDivElement>(null);
  const projectImageRef = useRef<HTMLImageElement>(null);

  const onImageHover = (image: string) => {
    if (!image || !projectImageRef.current || !projectImage.current) return;
    projectImageRef.current.src = image;
    gsap.to(projectImage.current, { opacity: 1, y: 20, duration: 0.2 });
  };

  const onImageLeave = () => {
    if (projectImage.current) {
      gsap.to(projectImage.current, { opacity: 0, y: 0, duration: 0.2 });
    }
  };

  gsap.registerPlugin(TextPlugin, ScrollTrigger);

  const tl = gsap.timeline();
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.15;

  const mouseEnter = (siteLink: string | undefined) => {
    console.log(siteLink);
    gsap.to(ballRef.current, {
      width: 100,
      height: 100,
      backgroundColor: "white",
    });
    ballRef.current?.classList.remove("mix-blend-difference");
    gsap.to(ballTextRef.current, { opacity: 1 });

    if (ballTextRef.current != null && ballRef.current != null) {
      ballTextRef.current.style.marginTop = `40px`;
      if (siteLink) {
        ballTextRef.current.innerText = "View Site";
      } else {
        ballTextRef.current.innerText = "No Site";
        ballTextRef.current.style.color = "white";
        gsap.to(ballRef.current, { backgroundColor: "black" });
      }
    }
  };
  const mouseLeave = (siteLink: string | undefined) => {
    console.log(siteLink);
    ballRef.current?.classList.add("mix-blend-difference");
    gsap.to(ballRef.current, { width: 20, height: 20 });
    gsap.to(ballTextRef.current, { opacity: 0 });
    if (!siteLink && ballTextRef.current != null) {
      ballTextRef.current.style.marginTop = `0px`;
      gsap.to(ballRef.current, { backgroundColor: "white" });
      ballTextRef.current.style.color = "black";
    }
  };

  function animatedLinkMouseEnter() {
    gsap.set(underline.current, { scaleX: 1, width: "100%" });
    gsap.from(underline.current, { scaleX: "0", transformOrigin: "left" });
  }

  function animatedLinkMouseLeave() {
    gsap.to(underline.current, { scaleX: "0", transformOrigin: "right" });
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

  const featured = data.slice(0, 3);
  const rest = data.slice(3);

  return (
    <>
      <SEO
        title="Portfolio — Rey"
        ogUrl="https://webmindkupang.my.id/reymooy"
      />
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
              <span
                className="text-black opacity-0 text-[12px]"
                ref={ballTextRef}
              ></span>
            </div>
          </div>
          <Navbar />
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
                    i am a software engineer,<br></br> based in indonesia
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
                    name="tiktok"
                    link="https://www.tiktok.com/@reymooy"
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
                <SlideWraper>
                  <AnimatedLink
                    name="twitter"
                    link="https://twitter.com/itzyaboirey"
                  />
                </SlideWraper>
              </div>
              <div className="grid-span-2 row-start-2 lg:row-start-1 col-start-1 lg:col-start-5 col-end-12 flex flex-col gap-4 w-fit">
                <SlideWraper>
                  <AnimatedLink name="email" link="mailto:gdrrey@gmail.com" />
                </SlideWraper>
                <SlideWraper>
                  <AnimatedLink
                    name="curriculum vitae"
                    link="https://docs.google.com/document/d/11j6bfQ1HUJ34TVgC-pTbUFwsc2PZiNd3/edit?usp=drivesdk&ouid=114799728929387783781&rtpof=true&sd=true"
                  />
                </SlideWraper>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full mt-10">
          <div className="px-4">
            <h2
              className="text-[6rem] md:text-[10rem] lg:text-[18rem] text-center font-bold leading-none"
              id="title-project"
            >
              projects
            </h2>
          </div>
          <div className="projectWrapper relative bg-[#ECECEC] rounded-t-[50px] lg:rounded-t-[100px] rounded-b-[50px] w-full h-full pt-28 px-4 pb-28">
            <div className="w-full max-w-[1200px] lg:mx-auto flex flex-col">
              {/* featured projects */}
              <div className="flex flex-col">
                {featured.map((project) => (
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
              </div>

              {/* other projects */}
              <div className="grid grid-cols-12 gap-4 mt-[8rem] mb-[8rem] md:mb-[15rem]">
                <div className="col-start-1 col-end-13 md:col-end-4 md:row-start-1 relative">
                  <h3 className="text-black font-bold text-[1rem] lg:text-[1.5rem]">
                    another project
                  </h3>
                  <div
                    ref={projectImage}
                    className="mt-5 opacity-0 absolute lg:top-[2rem] lg:left-[-10rem] top-0 left-0 shadow-[5px_8px_10px_5px_rgba(0,0,0,0.3)]"
                  >
                    <img
                      ref={projectImageRef}
                      src="./images-5.png"
                      alt="Project preview screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="col-start-1 md:col-start-4 col-end-13 row-start-2 md:row-start-1">
                  {rest.map((project, index) => (
                    <AnotherProject
                      key={project.id}
                      name={project.name}
                      siteLink={project.siteLink}
                      image={project.image}
                      ballRef={ballRef}
                      ballTextRef={ballTextRef}
                      index={index + 4}
                      onHover={onImageHover}
                      onLeave={onImageLeave}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* about */}
            <div className="absolute bottom-0 left-0 right-0 w-full mb-[-1.6rem] md:mb-[-2.7rem] lg:mb-[-5rem]">
              <h2
                className="text-[6rem] md:text-[10rem] lg:text-[18rem] text-center font-bold text-black leading-none"
                id="title-about"
              >
                about
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-[8rem] px-4 lg:mx-auto w-full max-w-[1200px]">
          <div className="grid grid-cols-12 gap-4 mb-[4rem]">
            <div className="col-start-1 col-end-13 md:col-end-4 md:row-start-1">
              <h2 className="font-bold text-[1rem] lg:text-[1.5rem]">
                education
              </h2>
            </div>
            <div className="col-start-1 md:col-start-4 col-end-13 row-start-2 md:row-start-1">
              <div className="border-b first:border-t border-white w-full py-4 pl-2 grid grid-cols-3">
                <span className="text-[1rem]">2019-2023</span>
                <span className="text-[1rem] font-bold col-start-2">
                  Universitas Citra Bangsa
                </span>
                <span className="text-[1rem] col-start-3">
                  Teknologi Informasi
                </span>
              </div>
              <div className="border-b first:border-t border-white w-full py-4 pl-2 grid grid-cols-3">
                <span className="text-[1rem]">2015-2017</span>
                <span className="text-[1rem] font-bold col-start-2">
                  SMA Negeri 1 Kupang
                </span>
              </div>
            </div>
          </div>

          {/* experience */}
          <div className="grid grid-cols-12 gap-4 mb-[4rem]">
            <div className="col-start-1 col-end-13 md:col-end-4 md:row-start-1">
              <h2 className="font-bold text-[1rem] lg:text-[1.5rem]">
                experience
              </h2>
            </div>
            <div className="col-start-1 md:col-start-4 col-end-13 row-start-2 md:row-start-1">
              <div className="border-b first:border-t border-white w-full py-4 pl-2 grid grid-cols-3">
                <span className="text-[1rem]">Oct 2024 - now</span>
                <span className="text-[1rem] font-bold  col-start-2">
                  Koding Next Kupang
                </span>
                <span className="text-[1rem] col-start-3">
                  Advanced Teacher
                </span>
              </div>
              <div className="border-b first:border-t border-white w-full py-4 pl-2 grid grid-cols-3">
                <span className="text-[1rem]">Jan 2024 - May 2024</span>
                <span className="text-[1rem] font-bold  col-start-2">
                  Platon Indonesia
                </span>
                <span className="text-[1rem] col-start-3">
                  Fullstack Engineer
                </span>
              </div>
              <div className="border-b first:border-t border-white w-full py-4 pl-2 grid grid-cols-3">
                <span className="text-[1rem]">2023 - now</span>
                <span className="text-[1rem] font-bold  col-start-2">
                  Webminds Kupang
                </span>
                <span className="text-[1rem] col-start-3">
                  Freelance Developer
                </span>
              </div>
              <div className="border-b first:border-t border-white w-full py-4 pl-2 grid grid-cols-3">
                <span className="text-[1rem]">Feb 2023 - Mar 2023</span>
                <span className="text-[1rem] font-bold col-start-2">
                  Diskominfo Kota Kupang
                </span>
                <span className="text-[1rem] col-start-3">Student Intern</span>
              </div>
            </div>
          </div>
          {/* experience */}

          {/* skills */}
          <div className="grid grid-cols-12 gap-4 pb-[8rem]">
            <div className="col-start-1 col-end-13 md:col-end-4 md:row-start-1">
              <h2 className="font-bold text-[1rem] lg:text-[1.5rem]">skills</h2>
            </div>
            <div className="col-start-1 md:col-start-4 col-end-13 row-start-2 md:row-start-1">
              <div className="w-full grid md:grid-cols-5 gap-4">
                <span className="text-[1rem] font-bold col-start-1">HTML</span>
                <span className="text-[1rem] font-bold col-start-2">CSS</span>
                <span className="text-[1rem] font-bold col-start-3">
                  Javascript
                </span>
                <span className="text-[1rem] font-bold col-start-1 md:col-start-4">
                  Typescript
                </span>
                <span className="text-[1rem] font-bold col-start-2 md:col-start-5">
                  Golang
                </span>
                <span className="text-[1rem] font-bold col-start-3 md:col-start-1">
                  Python
                </span>
                <span className="text-[1rem] font-bold col-start-1 md:col-start-2">
                  ReactJS
                </span>
                <span className="text-[1rem] font-bold col-start-2 md:col-start-3">
                  NextJS
                </span>
                <span className="text-[1rem] font-bold col-start-3 md:col-start-4">
                  React Native
                </span>
                <span className="text-[1rem] font-bold col-start-1 md:col-start-5">
                  Redux
                </span>
                <span className="text-[1rem] font-bold col-start-2 md:col-start-1">
                  NodeJS
                </span>
                <span className="text-[1rem] font-bold col-start-3 md:col-start-2">
                  ExpressJS
                </span>
                <span className="text-[1rem] font-bold col-start-1 md:col-start-3">
                  Django
                </span>
                <span className="text-[1rem] font-bold col-start-2 md:col-start-4">
                  MongoDB
                </span>
                <span className="text-[1rem] font-bold col-start-3 md:col-start-5">
                  MySQL
                </span>
                <span className="text-[1rem] font-bold col-start-1">
                  Rest API
                </span>
                <span className="text-[1rem] font-bold col-start-2">Git</span>
                <span className="text-[1rem] font-bold col-start-3">
                  Docker
                </span>
                <span className="text-[1rem] font-bold col-start-1 md:col-start-4">
                  Linux
                </span>
                <span className="text-[1rem] font-bold col-start-2 md:col-start-5">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
          {/* skills */}
        </div>
      </div>
    </>
  );
}

export default App;
