import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import previewOne from '../../assets/preview/1.webp';
import previewTwo from '../../assets/preview/2.webp';
import previewThree from '../../assets/preview/3.webp';
import './Preview.css';

export function Preview() {
  const sectionRef = useRef<HTMLElement>(null);

  // spreads the phones on entry then stacks back as the section leaves.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof window.matchMedia !== 'function') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(min-width: 641px)', () => {
      // single scrubbed timeline so scrolling back and forth never snaps.
      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          end: 'bottom top',
          scrub: 1,
          start: 'top 85%',
          trigger: sectionRef.current,
        },
      });
      timeline.to(
        '.preview__phone--left',
        { duration: 1, marginRight: '2rem', rotation: 0, y: '-0.5rem' },
        0
      );
      timeline.to(
        '.preview__phone--right',
        { duration: 1, marginLeft: '2rem', rotation: 0, y: '-0.5rem' },
        0
      );
      timeline.from('.preview', { duration: 1, y: 12 }, 0);
      timeline.from('.preview__phone--center', { duration: 1, y: 6 }, 0);

      // longer partial collapse as it leaves view.
      timeline.to(
        '.preview__phone--left',
        { duration: 1.8, marginRight: '-2rem', rotation: -5, y: '1rem' },
        1.2
      );
      timeline.to(
        '.preview__phone--right',
        { duration: 1.8, marginLeft: '-2rem', rotation: 5, y: '1rem' },
        1.2
      );
    });
    media.add('(max-width: 640px)', () => {
      // single scrubbed timeline so scrolling back and forth never snaps.
      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          end: 'bottom top',
          scrub: 1,
          start: 'top 85%',
          trigger: sectionRef.current,
        },
      });
      timeline.to(
        '.preview__phone--left',
        { duration: 1, marginRight: '0.75rem', rotation: 0, y: '-0.5rem' },
        0
      );
      timeline.to(
        '.preview__phone--right',
        { duration: 1, marginLeft: '0.75rem', rotation: 0, y: '-0.5rem' },
        0
      );
      timeline.from('.preview', { duration: 1, y: 12 }, 0);
      timeline.from('.preview__phone--center', { duration: 1, y: 6 }, 0);

      // longer partial collapse as it leaves view.
      timeline.to(
        '.preview__phone--left',
        { duration: 1.8, marginRight: '-1.25rem', rotation: -3, y: '0.75rem' },
        1.2
      );
      timeline.to(
        '.preview__phone--right',
        { duration: 1.8, marginLeft: '-1.25rem', rotation: 3, y: '0.75rem' },
        1.2
      );
    });

    return () => {
      media.revert();
    };
  }, []);

  return (
    <section
      aria-label="App previews"
      className="preview section-container"
      ref={sectionRef}
    >
      <div className="preview__phone preview__phone--left">
        <img
          alt="Tarsi Card screen showing account balance and premium upsell"
          className="preview__phone-image"
          decoding="async"
          height={2779}
          loading="lazy"
          src={previewOne}
          width={1352}
        />
      </div>
      <div className="preview__phone preview__phone--center">
        <img
          alt="Money Buddies screen inviting users to save with buddies"
          className="preview__phone-image"
          decoding="async"
          height={2779}
          loading="lazy"
          src={previewTwo}
          width={1352}
        />
      </div>
      <div className="preview__phone preview__phone--right">
        <img
          alt="Avatar customization screen with outfits and accessories"
          className="preview__phone-image"
          decoding="async"
          height={2779}
          loading="lazy"
          src={previewThree}
          width={1352}
        />
      </div>
    </section>
  );
}
