import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function PillNav() {
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);

  // this is going to track the active location/section the user is on. (example: The dot will appear under the projects header in the nav bar if the user is currently looking at my projects)
  const [activeSection, setActiveSection] = useState("#about");

  const items = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
  ];

  // Scroll spy (the small bubble under the active section)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  // Hover bubble animation
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
      // ⬇️ Shrink bubble size a bit (you can tweak 0.85 → 0.9 to taste)
      tl.to(circle, { scale: 0.85, xPercent: -50, duration: 0.4, ease: "power3.out" }, 0);
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
          const isActive = activeSection === item.href; 
          return (
            <li key={item.href} className="relative">
              <a
                href={item.href}
                className="relative inline-flex items-center justify-center rounded-full px-5 py-2 font-mono text-sm font-semibold text-green-300 uppercase"
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave(i)}
              >
                {/* Hover bubble */}
                <span
                  className="absolute left-1/2 bottom-0 rounded-full bg-green-500 pointer-events-none"
                  ref={el => (circleRefs.current[i] = el)}
                />
                <span className="relative z-10">{item.label}</span>
                {/* Active dot */}
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
