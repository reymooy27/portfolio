import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { data } from "../generated/projectData";
import AnimatedLink from "../components/AnimatedLink";
import Project from "../components/Project";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Website company profile, landing page, toko online, dan portal berita — responsive & modern.",
  },
  {
    num: "02",
    title: "Mobile Apps",
    desc: "Aplikasi Android & iOS menggunakan React Native untuk bisnis, layanan, dan komunitas.",
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "Desain antarmuka yang bersih, intuitif, dan fokus pada pengalaman pengguna terbaik.",
  },
  {
    num: "04",
    title: "CMS Development",
    desc: "Sistem manajemen konten custom atau berbasis WordPress agar Anda bisa update sendiri.",
  },
  {
    num: "05",
    title: "AI & Machine Learning",
    desc: "Integrasi AI untuk chatbot, recommendation system, computer vision, dan analisis data cerdas.",
  },
  {
    num: "06",
    title: "Automation",
    desc: "Otomatisasi workflow bisnis dengan RPA, email marketing, CRM integration, dan smart scheduling.",
  },
];

const pricing = [
  {
    name: "Basic",
    price: "Rp 2-5 Jt",
    features: [
      "1 - 3 halaman website",
      "Responsive mobile & desktop",
      "Form kontak",
      "Free domain .com (1 tahun)",
      "Hosting 3 bulan gratis",
    ],
  },
  {
    name: "Standard",
    price: "Rp 5-10 Jt",
    features: [
      "5 - 7 halaman website",
      "CMS (bisa update sendiri)",
      "Integrasi media sosial",
      "Basic SEO optimasi",
      "Free domain + hosting 6 bulan",
    ],
  },
  {
    name: "Premium",
    price: "Rp 10-25 Jt",
    features: [
      "Web app / e-commerce",
      "Admin dashboard",
      "Database & API integration",
      "Advanced SEO",
      "Free domain + hosting 1 tahun",
      "Prioritas support",
    ],
  },
];

const testimonials = [
  {
    name: "Client A",
    role: "Owner, Toko ABC",
    text: "Webminds membantu kami membuat toko online dengan cepat. Hasilnya memuaskan!",
  },
  {
    name: "Client B",
    role: "Manager, Yayasan XYZ",
    text: "Prosesnya cepat, komunikasinya enak, dan website-nya sesuai dengan yang kami mau.",
  },
  {
    name: "Client C",
    role: "Founder, Startup DEF",
    text: "Rekomendasi banget buat yang butuh jasa pembuatan website profesional di Kupang.",
  },
];

function BusinessLanding() {
  const ref = useRef(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const ballTextRef = useRef<HTMLHeadingElement>(null);
  const underline = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");

  gsap.registerPlugin(TextPlugin, ScrollTrigger);

  const tl = gsap.timeline();

  // Lenis Smooth Scroll Initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Manage body background class for the route
  useEffect(() => {
    document.body.style.backgroundColor = "#F6F5F2";
    document.body.style.color = "#121212";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  const mouseEnter = (siteLink: string | undefined) => {
    gsap.to(ballRef.current, {
      width: 100,
      height: 100,
      backgroundColor: "#121212",
      border: "none",
      scale: 1,
      opacity: 1,
    });
    ballRef.current?.classList.remove("mix-blend-difference");
    gsap.to(ballTextRef.current, { opacity: 1 });

    if (ballTextRef.current != null && ballRef.current != null) {
      ballTextRef.current.style.marginTop = "40px";
      if (siteLink) {
        ballTextRef.current.innerText = "View Site";
        ballTextRef.current.style.color = "#F6F5F2";
      } else {
        ballTextRef.current.innerText = "No Site";
        ballTextRef.current.style.color = "#F6F5F2";
      }
    }
  };

  const mouseLeave = (siteLink: string | undefined) => {
    ballRef.current?.classList.add("mix-blend-difference");
    gsap.to(ballRef.current, {
      width: 20,
      height: 20,
      scale: 1,
      border: "none",
    });
    gsap.to(ballTextRef.current, { opacity: 0 });
    if (!siteLink && ballTextRef.current != null) {
      ballTextRef.current.style.marginTop = "0px";
      gsap.to(ballRef.current, { backgroundColor: "#F6F5F2" });
      ballTextRef.current.style.color = "#121212";
      ballTextRef.current.innerText = "";
    }
  };

  const animatedLinkMouseEnter = () => {
    gsap.set(underline.current, { scaleX: 1, width: "100%" });
    gsap.from(underline.current, { scaleX: "0", transformOrigin: "left" });
  };

  const animatedLinkMouseLeave = () => {
    gsap.to(underline.current, { scaleX: "0", transformOrigin: "right" });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("#ball", { xPercent: -50, yPercent: -50 });

      tl.to("#loader1", {
        scaleX: 0,
        duration: 0.8,
        transformOrigin: "right",
        ease: "sine",
        delay: 1,
      })
        .to(
          "#loader2",
          { scaleX: 0, duration: 0.6, transformOrigin: "right", ease: "sine" },
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
        );

      const scrollFade = (selector: string, extra = {}) => {
        gsap.fromTo(
          selector,
          { opacity: 0, y: 40 },
          {
            scrollTrigger: { trigger: selector, start: "top 85%" },
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            ...extra,
          },
        );
      };

      scrollFade("#title-services");
      scrollFade("#title-portfolio");
      scrollFade("#title-pricing");
      scrollFade("#title-testimonials");
      scrollFade("#title-contact");

      scrollFade(".service-item");
      scrollFade(".pricing-column");
      scrollFade(".testimonial-item");

      // Advanced Cursor Logic via quickTo
      const xTo = gsap.quickTo("#ball", "x", { duration: 0.2, ease: "power3" });
      const yTo = gsap.quickTo("#ball", "y", { duration: 0.2, ease: "power3" });

      const handleGlobalMouseMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);

        const target = e.target as HTMLElement;
        const cursorType = target
          .closest("[data-cursor]")
          ?.getAttribute("data-cursor");

        // Avoid overriding Project component mouseEnter
        if (
          ballTextRef.current?.innerText === "View Site" ||
          ballTextRef.current?.innerText === "No Site"
        ) {
          return;
        }

        if (cursorType === "link") {
          gsap.to(ballRef.current, {
            scale: 2.5,
            opacity: 0.5,
            backgroundColor: "transparent",
            border: "1px solid #121212",
            duration: 0.3,
          });
          ballRef.current?.classList.remove("mix-blend-difference");
        } else if (cursorType === "input") {
          gsap.to(ballRef.current, { scale: 0.2, opacity: 0, duration: 0.3 });
        } else if (cursorType === "text") {
          gsap.to(ballRef.current, { scale: 0.5, opacity: 0.5, duration: 0.3 });
        } else {
          gsap.to(ballRef.current, {
            scale: 1,
            opacity: 1,
            backgroundColor: "#121212",
            border: "none",
            duration: 0.3,
            width: 20,
            height: 20,
          });
          ballRef.current?.classList.add("mix-blend-difference");
        }
      };

      window.addEventListener("mousemove", handleGlobalMouseMove);
    }, ref);

    return () => {
      ctx.revert();
    };
  }, []);

  const featured = data.slice(0, 3);

  return (
    <div
      ref={ref}
      className="bg-grain min-h-screen text-[#121212] selection:bg-neutral-900 selection:text-[#F6F5F2] relative overflow-hidden"
    >
      {/* Loaders */}
      <div
        id="loader1"
        className="fixed top-0 left-0 bg-[#F6F5F2] w-full h-full z-[5]"
      />
      <div
        id="loader2"
        className="fixed bottom-0 left-0 bg-black w-full h-full z-[4]"
      />

      {/* Custom Ball Cursor */}
      <div
        ref={ballRef}
        id="ball"
        className="bg-[#121212] rounded-full w-[20px] h-[20px] fixed top-0 left-0 pointer-events-none mix-blend-difference z-[3] hidden md:flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="pl-5">
          <h1
            className="text-[#F6F5F2] opacity-0 text-[12px] font-mono-spaced whitespace-nowrap"
            ref={ballTextRef}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col justify-between px-6 pt-[8rem] pb-[4rem] relative z-[2]">
        {/* Hero Top Metadata */}
        <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center border-b border-neutral-300 pb-4">
          <span className="font-mono-spaced text-[10px] text-neutral-500">
            WEBMIND KUPANG
          </span>
          <span className="font-mono-spaced text-[10px] text-neutral-500">
            01 / HERO
          </span>
          <span className="font-mono-spaced text-[10px] text-neutral-500">
            EST. 2023
          </span>
        </div>

        {/* Hero Main Copy */}
        <div className="w-full max-w-[1200px] mx-auto flex-1 flex flex-col justify-center my-12">
          <h1
            data-cursor="text"
            className="font-editorial text-[3.8rem] md:text-[7.5rem] lg:text-[9.5rem] uppercase font-bold leading-[0.85] tracking-tight"
          >
            Bangun{" "}
            <span className="font-calligraphic font-medium italic lowercase normal-case">
              digital
            </span>
            <br />
            presence{" "}
            <span className="font-calligraphic font-medium italic lowercase normal-case">
              anda
            </span>
          </h1>

          <div className="mt-12 grid grid-cols-12 gap-6 items-start">
            <p className="col-span-12 md:col-span-7 lg:col-span-6 text-[1.1rem] md:text-[1.35rem] font-serif leading-relaxed text-neutral-700">
              Webminds Kupang — partner teknologi terpercaya untuk bisnis Anda.
              Dari landing page interaktif hingga e-commerce berkinerja tinggi,
              termasuk solusi AI dan automation, kami menghadirkan solusi
              digital yang dirancang secara detail untuk audiens Anda.
            </p>
            <div className="col-span-12 md:col-span-5 lg:col-span-6 md:justify-self-end flex flex-col sm:flex-row gap-4 mt-6 md:mt-0 w-full sm:w-auto">
              <a
                href="#contact"
                data-cursor="link"
                className="font-mono-spaced text-[11px] text-center border border-neutral-900 px-8 py-4 bg-neutral-900 text-[#F6F5F2] hover:bg-transparent hover:text-neutral-900 transition-colors duration-300"
              >
                Mulai Kolaborasi
              </a>
              <a
                href="#portfolio"
                data-cursor="link"
                className="font-mono-spaced text-[11px] text-center border border-neutral-900 px-8 py-4 text-neutral-900 hover:bg-neutral-900 hover:text-[#F6F5F2] transition-colors duration-300"
              >
                Lihat Proyek
              </a>
            </div>
          </div>
        </div>

        {/* Hero Bottom Info */}
        <div className="w-full max-w-[1200px] mx-auto flex justify-between items-end border-t border-neutral-300 pt-6">
          <div className="hidden lg:block">
            <span className="font-mono-spaced text-[9px] text-neutral-400 block">
              LOCALIZATION
            </span>
            <span className="text-[12px] font-serif text-neutral-700">
              Kupang, Nusa Tenggara Timur
            </span>
          </div>
          <div className="hidden lg:block text-right">
            <span className="font-mono-spaced text-[9px] text-neutral-400 block">
              CURRENT CYCLE
            </span>
            <span className="text-[12px] font-serif text-neutral-700">
              Q2 2026
            </span>
          </div>
          <div>
            <span className="font-mono-spaced text-[9px] text-neutral-400 block">
              SCROLL TO DISCOVER
            </span>
            <span className="text-[14px] font-serif text-neutral-700">↓</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full border-t border-neutral-300 py-32 px-6 bg-transparent relative z-[2]">
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Section Heading */}
          <div className="grid grid-cols-12 gap-6 items-baseline mb-16">
            <span className="col-span-12 lg:col-span-3 font-mono-spaced text-[11px] text-neutral-500">
              02 // SERVICES
            </span>
            <h2
              id="title-services"
              className="col-span-12 lg:col-span-9 font-editorial text-[3rem] md:text-[5rem] font-bold uppercase leading-none"
            >
              Layanan{" "}
              <span className="font-calligraphic font-medium italic lowercase normal-case">
                kami
              </span>
            </h2>
          </div>

          {/* Architectural Table Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-neutral-300">
            {services.map((s) => (
              <div
                key={s.title}
                data-cursor="text"
                className="service-item p-8 border-b border-neutral-300 md:border-r last:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:last:border-r-0 flex flex-col justify-between min-h-[300px] transition-all duration-500 hover:bg-neutral-100/50"
              >
                <div>
                  <span className="font-mono-spaced text-[11px] text-neutral-400 block mb-8">
                    [{s.num}]
                  </span>
                  <h3 className="font-editorial text-[1.75rem] font-bold leading-tight mb-4">
                    {s.title}
                  </h3>
                </div>
                <p className="text-[0.95rem] font-serif text-neutral-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="w-full border-t border-neutral-300 py-32 px-6 bg-transparent relative z-[2]"
      >
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Section Heading */}
          <div className="grid grid-cols-12 gap-6 items-baseline mb-24">
            <span className="col-span-12 lg:col-span-3 font-mono-spaced text-[11px] text-neutral-500">
              03 // SELECTED WORK
            </span>
            <h2
              id="title-portfolio"
              className="col-span-12 lg:col-span-9 font-editorial text-[3rem] md:text-[5rem] font-bold uppercase leading-none"
            >
              Portofolio{" "}
              <span className="font-calligraphic font-medium italic lowercase normal-case">
                pilihan
              </span>
            </h2>
          </div>

          <div className="mt-12">
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
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full border-t border-neutral-300 py-32 px-6 bg-transparent relative z-[2]">
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Section Heading */}
          <div className="grid grid-cols-12 gap-6 items-baseline mb-24">
            <span className="col-span-12 lg:col-span-3 font-mono-spaced text-[11px] text-neutral-500">
              04 // INVESTMENT
            </span>
            <h2
              id="title-pricing"
              className="col-span-12 lg:col-span-9 font-editorial text-[3rem] md:text-[5rem] font-bold uppercase leading-none"
            >
              Pilihan{" "}
              <span className="font-calligraphic font-medium italic lowercase normal-case">
                paket
              </span>
            </h2>
          </div>

          {/* Pricing Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-neutral-300">
            {pricing.map((pkg, idx) => (
              <div
                key={pkg.name}
                className="pricing-column p-8 md:p-12 border-b border-neutral-300 md:border-r last:border-r-0 flex flex-col justify-between min-h-[500px] transition-all duration-500 hover:bg-neutral-100/50"
              >
                <div>
                  <div className="flex justify-between items-baseline mb-8">
                    <span className="font-mono-spaced text-[11px] text-neutral-400">
                      PLAN [0{idx + 1}]
                    </span>
                    <h3 className="font-mono-spaced text-[12px] font-bold text-neutral-900">
                      {pkg.name}
                    </h3>
                  </div>

                  <p
                    data-cursor="text"
                    className="font-editorial text-[2.2rem] md:text-[2.8rem] font-bold leading-none my-6 text-neutral-900"
                  >
                    {pkg.price}
                  </p>

                  <div className="border-t border-neutral-200 my-6 pt-6">
                    <ul className="space-y-4">
                      {pkg.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-[0.95rem] font-serif text-neutral-600"
                        >
                          <span className="text-neutral-900 font-bold mt-[-2px]">
                            •
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#contact"
                  data-cursor="link"
                  className="block text-center font-mono-spaced text-[11px] border border-neutral-900 px-6 py-4 mt-8 hover:bg-neutral-900 hover:text-[#F6F5F2] transition-colors duration-300"
                >
                  Pilih Paket
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full border-t border-neutral-300 py-32 px-6 bg-transparent relative z-[2]">
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Section Heading */}
          <div className="grid grid-cols-12 gap-6 items-baseline mb-24">
            <span className="col-span-12 lg:col-span-3 font-mono-spaced text-[11px] text-neutral-500">
              05 // FEEDBACK
            </span>
            <h2
              id="title-testimonials"
              className="col-span-12 lg:col-span-9 font-editorial text-[3rem] md:text-[5rem] font-bold uppercase leading-none"
            >
              Suara{" "}
              <span className="font-calligraphic font-medium italic lowercase normal-case">
                klien
              </span>
            </h2>
          </div>

          {/* Clean Quote Blocks List */}
          <div className="space-y-16 mt-16 max-w-[900px] mx-auto">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                data-cursor="text"
                className="testimonial-item border-b border-neutral-300 pb-12 last:border-0"
              >
                <span className="font-calligraphic text-[4rem] text-neutral-300 block h-6 leading-none">
                  “
                </span>
                <p className="text-[1.35rem] md:text-[1.65rem] font-serif leading-relaxed text-neutral-800 italic pr-8">
                  {t.text}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-mono-spaced text-[11px] font-bold text-neutral-900">
                      {t.name}
                    </p>
                    <p className="text-[12px] font-serif text-neutral-500">
                      {t.role}
                    </p>
                  </div>
                  <span className="font-mono-spaced text-[10px] text-neutral-300">
                    REF / 0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full border-t border-neutral-300 py-32 px-6 bg-[#121212] text-[#F6F5F2] relative z-[2]"
      >
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Section Heading */}
          <div className="grid grid-cols-12 gap-6 items-baseline mb-20">
            <span className="col-span-12 lg:col-span-3 font-mono-spaced text-[11px] text-neutral-400">
              06 // INQUIRIES
            </span>
            <h2
              id="title-contact"
              className="col-span-12 lg:col-span-9 font-editorial text-[3rem] md:text-[5rem] font-bold uppercase leading-none"
            >
              Mulai{" "}
              <span className="font-calligraphic font-medium italic text-neutral-400 lowercase normal-case">
                kolaborasi
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12">
            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between min-h-[300px]">
              <div>
                <p className="text-[1.2rem] md:text-[1.4rem] font-serif leading-relaxed text-neutral-300 max-w-[400px]">
                  Punya ide proyek atau pertanyaan? Mari diskusikan kebutuhan
                  digital Anda secara santai dan gratis.
                </p>
              </div>

              <div className="space-y-8 mt-12 lg:mt-0">
                <div>
                  <span className="font-mono-spaced text-[9px] text-neutral-500 block mb-1">
                    WHATSAPP
                  </span>
                  <a
                    href="https://wa.me/+6281338047308"
                    target="_blank"
                    data-cursor="link"
                    className="text-[1.1rem] font-serif text-[#F6F5F2] hover:opacity-75 transition-opacity underline decoration-[0.5px] underline-offset-4"
                  >
                    +62 813-3804-7308
                  </a>
                </div>
                <div>
                  <span className="font-mono-spaced text-[9px] text-neutral-500 block mb-1">
                    EMAIL
                  </span>
                  <a
                    href="mailto:gdrrey@gmail.com"
                    data-cursor="link"
                    className="text-[1.1rem] font-serif text-[#F6F5F2] hover:opacity-75 transition-opacity underline decoration-[0.5px] underline-offset-4"
                  >
                    gdrrey@gmail.com
                  </a>
                </div>
                <div className="flex gap-6 pt-2">
                  <span data-cursor="link">
                    <AnimatedLink
                      name="instagram"
                      link="https://www.instagram.com/_itzyaboirey/"
                      underlineColor="#F6F5F2"
                    />
                  </span>
                  <span data-cursor="link">
                    <AnimatedLink
                      name="github"
                      link="https://github.com/reymooy27"
                      underlineColor="#F6F5F2"
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <form
              action="#"
              className="lg:col-span-7 space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                const msg = `Halo Webminds Kupang,%0A%0ASaya *${name}*%0AEmail: ${email}%0A%0A${project}%0A%0ATolong infokan lebih lanjut. Terima kasih.`;
                window.open(
                  `https://wa.me/+6281338047308?text=${msg}`,
                  "_blank",
                );
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="font-mono-spaced text-[9px] text-neutral-400 mb-2">
                    NAMA LENGKAP
                  </label>
                  <input
                    type="text"
                    data-cursor="input"
                    placeholder="Masukkan nama Anda..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full py-4 bg-transparent border-b border-neutral-700 text-[#F6F5F2] placeholder:text-neutral-600 font-serif text-[1.1rem] focus:outline-none focus:border-neutral-200 transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-mono-spaced text-[9px] text-neutral-400 mb-2">
                    ALAMAT EMAIL
                  </label>
                  <input
                    type="email"
                    data-cursor="input"
                    placeholder="Masukkan email Anda..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-4 bg-transparent border-b border-neutral-700 text-[#F6F5F2] placeholder:text-neutral-600 font-serif text-[1.1rem] focus:outline-none focus:border-neutral-200 transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-mono-spaced text-[9px] text-neutral-400 mb-2">
                  PROYEK YANG INGIN DIBICARAKAN
                </label>
                <textarea
                  data-cursor="input"
                  placeholder="Ceritakan tentang kebutuhan bisnis Anda..."
                  rows={4}
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="w-full py-4 bg-transparent border-b border-neutral-700 text-[#F6F5F2] placeholder:text-neutral-600 font-serif text-[1.1rem] focus:outline-none focus:border-neutral-200 transition-colors resize-none"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  data-cursor="link"
                  className="font-mono-spaced text-[11px] border border-neutral-400 px-10 py-5 bg-[#F6F5F2] text-[#121212] hover:bg-transparent hover:text-[#F6F5F2] hover:border-[#F6F5F2] transition-all duration-300"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full px-6 py-12 bg-[#121212] text-[#F6F5F2] border-t border-neutral-800 relative z-[2]">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-mono-spaced text-[10px] text-neutral-500 mb-1">
              COPYRIGHT
            </span>
            <p className="text-[13px] font-serif text-neutral-400">
              © {new Date().getFullYear()} Webminds Kupang. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <span className="font-mono-spaced text-[10px] text-neutral-500 mb-1">
              ORIGIN
            </span>
            <p className="text-[13px] font-serif text-neutral-400">
              Kupang, Nusa Tenggara Timur
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BusinessLanding;
