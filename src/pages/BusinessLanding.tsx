import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useLayoutEffect, useRef } from "react";
import { data } from "../generated/projectData";
import AnimatedLink from "../components/AnimatedLink";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

const services = [
  {
    title: "Web Development",
    desc: "Website company profile, landing page, toko online, dan portal berita — responsive & modern.",
    icon: "🌐",
  },
  {
    title: "Mobile Apps",
    desc: "Aplikasi Android & iOS menggunakan React Native untuk bisnis, layanan, dan komunitas.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    desc: "Desain antarmuka yang bersih, intuitif, dan fokus pada pengalaman pengguna terbaik.",
    icon: "🎨",
  },
  {
    title: "CMS Development",
    desc: "Sistem manajemen konten custom atau berbasis WordPress agar Anda bisa update sendiri.",
    icon: "⚙️",
  },
];

const pricing = [
  {
    name: "Basic",
    price: "Rp 2 - 5 Juta",
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
    price: "Rp 5 - 10 Juta",
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
    price: "Rp 10 - 25 Juta",
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

  gsap.registerPlugin(TextPlugin, ScrollTrigger);

  const tl = gsap.timeline();
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.15;

  const mouseEnter = (siteLink: string | undefined) => {
    gsap.to(ballRef.current, {
      width: 100,
      height: 100,
      backgroundColor: "white",
    });
    ballRef.current?.classList.remove("mix-blend-difference");
    gsap.to(ballTextRef.current, { opacity: 1 });

    if (ballTextRef.current != null && ballRef.current != null) {
      ballTextRef.current.style.marginTop = "40px";
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
    ballRef.current?.classList.add("mix-blend-difference");
    gsap.to(ballRef.current, { width: 20, height: 20 });
    gsap.to(ballTextRef.current, { opacity: 0 });
    if (!siteLink && ballTextRef.current != null) {
      ballTextRef.current.style.marginTop = "0px";
      gsap.to(ballRef.current, { backgroundColor: "white" });
      ballTextRef.current.style.color = "black";
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
        duration: 1,
        transformOrigin: "right",
        ease: "sine",
        delay: 1,
      })
        .to(
          "#loader2",
          { scaleX: 0, duration: 1, transformOrigin: "right", ease: "sine" },
          "-=0.1"
        )
        .from(
          ".slider",
          { scaleX: 0, duration: 1, transformOrigin: "left", ease: "sine" },
          "+=0.4"
        )
        .to(
          ".slider",
          { scaleX: 0, duration: 0.3, transformOrigin: "right", ease: "sine" },
          "+=0.1"
        )
        .fromTo(
          ".children",
          { opacity: 0, y: 10 },
          { opacity: 1, stagger: 0.1, y: 0, duration: 0.6, ease: "sine" },
          "-=0.8"
        );

      const scrollFade = (selector: string, extra = {}) => {
        gsap.fromTo(
          selector,
          { opacity: 0, y: 50 },
          {
            scrollTrigger: { trigger: selector, start: "top 85%" },
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            ...extra,
          }
        );
      };

      scrollFade("#title-services");
      scrollFade("#title-portfolio");
      scrollFade("#title-pricing");
      scrollFade("#title-testimonials");
      scrollFade("#title-contact");

      scrollFade(".service-card");
      scrollFade(".pricing-card");
      scrollFade(".testimonial-card");

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

  return (
    <div ref={ref}>
      <div
        id="loader1"
        className="fixed top-0 left-0 bg-black w-full h-full z-[5]"
      />
      <div
        id="loader2"
        className="fixed bottom-0 left-0 bg-[#ECECEC] w-full h-full z-[4]"
      />
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
          />
        </div>
      </div>

      <Navbar />

      {/* Hero */}
      <section className="w-full min-h-screen flex items-center px-4 pt-[3.5rem]">
        <div className="w-full max-w-[1200px] lg:mx-auto">
          <h1 className="text-[3rem] md:text-[6rem] lg:text-[8rem] font-bold leading-[0.9]">
            Bangun Digital
            <br />
            Presence Anda
          </h1>
          <p className="text-[1.2rem] md:text-[1.5rem] mt-6 max-w-[600px]">
            Webminds Kupang — solusi website & aplikasi untuk bisnis Anda.
            Dari landing page hingga e-commerce, kami bantu Anda go digital.
          </p>
          <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="inline-block bg-black text-[#ECECEC] px-8 py-3 rounded-full font-bold hover:opacity-80 transition"
              >
                Hubungi Kami
              </a>
              <a
                href="#portfolio"
                className="inline-block border border-black px-8 py-3 rounded-full font-bold hover:bg-black hover:text-[#ECECEC] transition"
              >
                Lihat Portfolio
              </a>
            </div>
        </div>
      </section>

      {/* Services */}
      <div className="w-full bg-[#ECECEC] text-black px-4 py-28">
        <div className="w-full max-w-[1200px] lg:mx-auto">
          <h1
            id="title-services"
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold leading-none text-center"
          >
            services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {services.map((s) => (
              <div
                key={s.title}
                className="service-card bg-white rounded-2xl p-8 shadow-[5px_8px_10px_5px_rgba(0,0,0,0.05)] hover:shadow-[5px_8px_10px_5px_rgba(0,0,0,0.15)] transition"
              >
                <span className="text-[3rem]">{s.icon}</span>
                <h3 className="text-[1.5rem] font-bold mt-4">{s.title}</h3>
                <p className="text-[0.9rem] mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="w-full bg-white text-black px-4 py-28">
        <div className="w-full max-w-[1200px] lg:mx-auto">
          <h1
            id="title-portfolio"
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold leading-none text-center"
          >
            portfolio
          </h1>
          <div className="flex flex-col mt-16" id="portfolio">
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
      </div>

      {/* Pricing */}
      <div className="w-full bg-[#ECECEC] text-black px-4 py-28">
        <div className="w-full max-w-[1200px] lg:mx-auto">
          <h1
            id="title-pricing"
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold leading-none text-center"
          >
            pricing
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {pricing.map((pkg) => (
              <div
                key={pkg.name}
                className="pricing-card bg-white rounded-2xl p-8 shadow-[5px_8px_10px_5px_rgba(0,0,0,0.05)] flex flex-col"
              >
                <h3 className="text-[1.5rem] font-bold">{pkg.name}</h3>
                <p className="text-[2rem] font-bold mt-2">{pkg.price}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[0.9rem]">
                      <span className="text-green-600 font-bold mt-[1px]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center bg-black text-[#ECECEC] px-6 py-3 rounded-full font-bold mt-8 hover:opacity-80 transition"
                >
                  Pilih Paket
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full bg-white text-black px-4 py-28">
        <div className="w-full max-w-[1200px] lg:mx-auto">
          <h1
            id="title-testimonials"
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold leading-none text-center"
          >
            testimonials
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="testimonial-card border border-black/20 rounded-2xl p-8"
              >
                <p className="text-[0.95rem] leading-relaxed italic">"{t.text}"</p>
                <div className="mt-6">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-[0.85rem] opacity-60">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div
        id="contact"
        className="w-full bg-black text-[#ECECEC] px-4 py-28"
      >
        <div className="w-full max-w-[1200px] lg:mx-auto">
          <h1
            id="title-contact"
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold leading-none text-center"
          >
            contact
          </h1>
          <p className="text-center text-[1.2rem] mt-4 max-w-[500px] mx-auto">
            Mulai proyek Anda bersama Webminds Kupang. Diskusikan kebutuhan Anda
            — gratis!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6">
              <div>
                <p className="font-bold text-[1.2rem]">WhatsApp</p>
                <a
                  href="https://wa.me/+6281338047308"
                  target="_blank"
                  className="text-[0.95rem] opacity-80 hover:opacity-100 transition underline"
                >
                  +62 813-3804-7308
                </a>
              </div>
              <div>
                <p className="font-bold text-[1.2rem]">Email</p>
                <a
                  href="mailto:gdrrey@gmail.com"
                  className="text-[0.95rem] opacity-80 hover:opacity-100 transition underline"
                >
                  gdrrey@gmail.com
                </a>
              </div>
              <div className="flex gap-3">
                <AnimatedLink
                  name="instagram"
                  link="https://www.instagram.com/_itzyaboirey/"
                  underlineColor="#ECECEC"
                />
                <AnimatedLink
                  name="github"
                  link="https://github.com/reymooy27"
                  underlineColor="#ECECEC"
                />
              </div>
            </div>

            <form
              action="#"
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Nama"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-[#ECECEC] placeholder:text-[#ECECEC]/50 focus:outline-none focus:border-white/50"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-[#ECECEC] placeholder:text-[#ECECEC]/50 focus:outline-none focus:border-white/50"
              />
              <textarea
                placeholder="Ceritakan kebutuhan Anda..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-[#ECECEC] placeholder:text-[#ECECEC]/50 focus:outline-none focus:border-white/50 resize-none"
              />
              <button
                type="submit"
                className="bg-[#ECECEC] text-black px-8 py-3 rounded-full font-bold hover:opacity-80 transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full px-4 py-8">
        <div className="w-full max-w-[1200px] lg:mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[0.85rem] opacity-60">
          <p>© {new Date().getFullYear()} Webminds Kupang</p>
          <p>Kupang, Nusa Tenggara Timur</p>
        </div>
      </footer>
    </div>
  );
}

export default BusinessLanding;
