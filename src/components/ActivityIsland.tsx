import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(Flip);

interface Repo {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  languageColor: string | null;
  pushedAt: string;
  stars: number;
}

const rtf = new Intl.RelativeTimeFormat("id", { numeric: "auto" });

function relTime(iso: string): string {
  const t = new Date(iso).getTime();
  if (isNaN(t)) return "";
  const mins = Math.max(1, Math.round((Date.now() - t) / 60000));
  if (mins < 60) return rtf.format(-mins, "minute");
  const hours = Math.round(mins / 60);
  if (hours < 24) return rtf.format(-hours, "hour");
  return rtf.format(-Math.round(hours / 24), "day");
}

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ActivityIsland() {
  // null = loading, [] = nothing active / fetch failed -> stay hidden forever
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [index, setIndex] = useState(0);

  const islandRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const expandedRef = useRef(false);
  const flipState = useRef<ReturnType<typeof Flip.getState> | null>(null);
  const collapseTimer = useRef<number | undefined>(undefined);

  const setExpandedAnimated = useCallback((v: boolean) => {
    window.clearTimeout(collapseTimer.current);
    if (expandedRef.current === v) return;
    expandedRef.current = v;
    if (islandRef.current && !reducedMotion()) {
      flipState.current = Flip.getState(islandRef.current, {
        props: "borderRadius,backgroundColor",
      });
    }
    setExpanded(v);
  }, []);

  useEffect(() => {
    const ac = new AbortController();
    fetch("/api/activity", { signal: ac.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("bad status"))))
      .then((d: { repos?: Repo[] }) =>
        setRepos(Array.isArray(d.repos) ? d.repos.slice(0, 5) : [])
      )
      .catch(() => {
        if (!ac.signal.aborted) setRepos([]);
      });
    return () => {
      ac.abort();
      window.clearTimeout(collapseTimer.current);
    };
  }, []);

  // rotate the compact label while collapsed
  useEffect(() => {
    if (expanded || !repos || repos.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % repos.length),
      5000
    );
    return () => window.clearInterval(id);
  }, [repos, expanded]);

  useEffect(() => {
    if (reducedMotion() || !labelRef.current) return;
    gsap.fromTo(
      labelRef.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
    );
  }, [index]);

  // entrance + GSAP-centered (same pattern as the cursor ball in App.tsx)
  useLayoutEffect(() => {
    if (!repos?.length || !islandRef.current) return;
    gsap.set(islandRef.current, { xPercent: -50 });
    if (reducedMotion()) return;
    gsap.from(islandRef.current, {
      y: 24,
      opacity: 0,
      scale: 0.85,
      duration: 0.55,
      ease: "back.out(1.7)",
    });
  }, [repos]);

  // FLIP back to the recorded box whenever expanded flips
  useLayoutEffect(() => {
    if (!flipState.current) return;
    Flip.from(flipState.current, { duration: 0.45, ease: "power3.out" });
    flipState.current = null;
  }, [expanded]);

  // touch: tap outside closes
  useEffect(() => {
    if (!expanded) return;
    const onDown = (e: PointerEvent) => {
      if (!islandRef.current?.contains(e.target as Node)) {
        setExpandedAnimated(false);
      }
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [expanded, setExpandedAnimated]);

  const scheduleClose = () => {
    window.clearTimeout(collapseTimer.current);
    collapseTimer.current = window.setTimeout(
      () => setExpandedAnimated(false),
      3000
    );
  };

  if (!repos?.length) return null;
  const shown = repos[index % repos.length];

  return (
    <div
      ref={islandRef}
      className="fixed bottom-6 left-1/2 z-[2] overflow-hidden bg-black/90 text-white shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md"
      style={{ borderRadius: expanded ? 28 : 9999 }}
      onMouseEnter={() => setExpandedAnimated(true)}
      onMouseLeave={scheduleClose}
    >
      {/* compact pill (always mounted; absolute+transparent while expanded so CSS crossfades) */}
      <div
        className={
          expanded
            ? "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150"
            : "opacity-100 transition-opacity delay-150 duration-200"
        }
      >
        <button
          type="button"
          onClick={() => setExpandedAnimated(true)}
          aria-expanded={false}
          aria-label="Proyek GitHub yang sedang dikerjakan"
          className="flex h-10 max-w-[86vw] items-center gap-2 px-4"
        >
          <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400" />
          <span
            ref={labelRef}
            className="truncate font-mono text-xs text-white/90"
          >
            sedang mengerjakan: {shown.name}
          </span>
        </button>
      </div>

      {/* expanded activity card */}
      <div
        role="region"
        aria-label="Proyek GitHub yang sedang dikerjakan"
        className={
          expanded
            ? "opacity-100 transition-opacity delay-150 duration-200"
            : "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150"
        }
      >
        <div className="w-[min(380px,90vw)] p-3">
          <p className="mb-1 px-1 font-mono text-[10px] uppercase tracking-widest text-white/40">
            sedang mengerjakan
          </p>
          <ul>
            {repos.map((r) => (
              <li key={r.name}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={r.description ?? r.name}
                  className="block rounded-2xl px-2 py-2 hover:bg-white/10"
                >
                  <div className="flex items-center gap-2">
                    <span className="truncate text-sm font-bold">{r.name}</span>
                    {r.language && (
                      <span className="flex shrink-0 items-center gap-1 text-[10px] text-white/60">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: r.languageColor ?? "#888" }}
                        />
                        {r.language}
                      </span>
                    )}
                    <span className="ml-auto shrink-0 text-[10px] text-white/40">
                      ★ {r.stars} · push {relTime(r.pushedAt)}
                    </span>
                  </div>
                  {r.description && (
                    <p className="truncate text-[11px] text-white/50">
                      {r.description}
                    </p>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
