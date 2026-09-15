import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Buddies.css';

type BuddiesProps = {
  children?: ReactNode;
};

// buddies title with a duo row of cards below it.
export function Buddies({ children }: BuddiesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof window.matchMedia !== 'function') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    gsap.registerPlugin(ScrollTrigger);
    // the characters drift against the static floor as you scroll.
    const tween = gsap.fromTo(
      image,
      { y: 50 },
      {
        ease: 'none',
        scrollTrigger: {
          end: 'bottom top',
          scrub: true,
          start: 'top bottom',
          trigger: section,
        },
        y: -50,
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(image, { clearProps: 'transform' });
    };
  }, []);

  return (
    <section
      aria-label="Meet your buddies"
      className="buddies"
      ref={sectionRef}
    >
      <div className="buddies__content section-container">
        <h2 className="buddies__title">Save better, together with Buddies</h2>
      </div>
      <div className="buddies__row">
        <div className="buddies__stage">
          <img
            alt="Tarsi buddies characters grouped together"
            className="buddies__image"
            decoding="async"
            loading="lazy"
            ref={imageRef}
            src="/group.svg"
          />
        </div>
        {children}
      </div>
    </section>
  );
}
