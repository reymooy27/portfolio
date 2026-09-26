import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { data } from "../generated/projectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = data.find((p) => String(p.id) === id);

  const rootRef = useRef(null);
  const nameRef = useRef(null);
  const imageRef = useRef(null);
  const metaRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);

  useLayoutEffect(() => {
    if (!project) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.set([nameRef.current, imageRef.current, metaRef.current, descRef.current, actionsRef.current], {
        opacity: 0,
        y: 30,
      });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(metaRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0)
        .to(nameRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.1)
        .to(imageRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.3)
        .to(actionsRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.4);
    }, rootRef);

    return () => ctx.revert();
  }, [id, project]);

  if (!project) {
    return <Navigate to="/reymooy" replace />;
  }

  const descriptionParagraphs = (project.description ?? "")
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <div
      ref={rootRef}
      className="w-full min-h-screen bg-black text-[#ECECEC] pt-[6rem] pb-[6rem] px-4"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
        <div
          ref={metaRef}
          className="text-[12px] uppercase tracking-[0.18em] text-[#ECECEC] flex flex-wrap gap-x-3 gap-y-1"
        >
          <span>{`[${String(project.id).padStart(2, "0")}]`}</span>
          <span aria-hidden="true">·</span>
          <span>{project.datetime}</span>
          {project.language ? (
            <>
              <span aria-hidden="true">·</span>
              <span>{project.language}</span>
            </>
          ) : null}
          {project.techStack ? (
            <>
              <span aria-hidden="true">·</span>
              <span>{project.techStack}</span>
            </>
          ) : null}
        </div>

        <h1
          ref={nameRef}
                  className="text-white text-[clamp(1.75rem,7vw,3.5rem)] md:text-[10rem] lg:text-[18rem] font-bold leading-[0.9] lg:leading-[0.6] uppercase break-words"
        >
          {project.name}
        </h1>

        <div ref={imageRef} className="w-full">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto rounded-[24px] md:rounded-[40px] shadow-[5px_8px_30px_5px_rgba(0,0,0,0.6)] object-cover"
          />
        </div>

        {descriptionParagraphs.length > 0 ? (
          <div
            ref={descRef}
            className="max-w-[60ch] text-[#ECECEC] text-[1rem] md:text-[1.1rem] leading-relaxed flex flex-col gap-4"
          >
            {descriptionParagraphs.map((paragraph, i) => (
              <p key={i} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}

        <div
          ref={actionsRef}
          className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mt-4"
        >
          {project.siteLink ? (
            <a
              href={project.siteLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-[#ECECEC] uppercase text-[0.9rem] tracking-[0.16em] underline underline-offset-4 hover:text-white"
            >
              <span>View Site</span>
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          ) : null}
          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-[#ECECEC] uppercase text-[0.9rem] tracking-[0.16em] underline underline-offset-4 hover:text-white"
            >
              <span>GitHub</span>
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          ) : null}
          <Link
            to="/reymooy"
            aria-label="Back to projects list"
            className="group inline-flex items-center gap-2 text-[#ECECEC] uppercase text-[0.9rem] tracking-[0.16em] hover:text-white"
          >
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            <span>Back to projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
