import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PillNav({ activeHref = "#about" }) {
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);

  const items = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
  ];

  useEffect(() => {
    circleRefs.current.forEach((circle, i) => {
      if (!circle?.parentElement) return;
      const pill = circle.parentElement;
      const rect = pill.getBoundingClientRect();
      const { width: w, height: h } = rect;
      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` });

      const tl = gsap.timeline({ paused: true });
      tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.4, ease: "power3.out" }, 0);
      tlRefs.current[i] = tl;
    });
  }, []);

  const handleEnter = i => {
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tlRefs.current[i]?.tweenTo(tlRefs.current[i].duration(), {
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleLeave = i => {
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tlRefs.current[i]?.tweenTo(0, {
      duration: 0.2,
      ease: "power3.inOut",
    });
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-center gap-3 py-4 backdrop-blur-md">
      <ul className="flex gap-3 bg-green-950/70 rounded-full px-3 py-1">
        {items.map((item, i) => {
          const isActive = activeHref === item.href;
          return (
            <li key={item.href} className="relative">
              <a
                href={item.href}
                className="relative inline-flex items-center justify-center rounded-full px-5 py-2 font-mono text-sm font-semibold text-green-300 uppercase"
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave(i)}
              >
                <span
                  className="absolute left-1/2 bottom-0 rounded-full bg-green-500 pointer-events-none"
                  ref={el => (circleRefs.current[i] = el)}
                />
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <span className="absolute left-1/2 -bottom-1 w-2 h-2 -translate-x-1/2 rounded-full bg-green-400" />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
