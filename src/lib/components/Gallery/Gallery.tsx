import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import screenOne from '../../assets/gallery/1.webp';
import screenTwo from '../../assets/gallery/2.webp';
import screenThree from '../../assets/gallery/3.webp';
import screenFour from '../../assets/gallery/4.webp';
import screenFive from '../../assets/gallery/5.webp';
import screenSix from '../../assets/gallery/6.webp';
import screenSeven from '../../assets/gallery/7.webp';
import './Gallery.css';

const screens = [
  { alt: 'Welcome screen with Get Started button', src: screenOne },
  { alt: 'Choose your Tarsi character screen', src: screenTwo },
  { alt: 'Home dashboard with insights and budgets', src: screenThree },
  { alt: 'Assets overview screen', src: screenFour },
  { alt: 'Tarsi card and Premium screen', src: screenFive },
  { alt: 'Money Buddies savings screen', src: screenSix },
  { alt: 'Tarsi Buddies app screen', src: screenSeven },
];

// endless phone strip that follows the scroll direction and settles smoothly.
export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof window.matchMedia !== 'function') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const track = trackRef.current;
    if (!track) return;

    gsap.registerPlugin(ScrollTrigger);
    // css handles the loop when js is off; the ticker takes over when on.
    track.style.animation = 'none';

    let setWidth = 0;
    const measure = () => {
      const first = track.children[0];
      if (first instanceof HTMLElement) setWidth = first.offsetWidth;
    };
    measure();
    track.querySelectorAll('img').forEach(img => {
      if (!img.complete) img.addEventListener('load', measure, { once: true });
    });
    window.addEventListener('resize', measure);

    // 1 drifts right, -1 drifts left; the wrap keeps the loop seamless.
    let direction = 1;
    let offset = 0;
    let lastScroll = window.scrollY;
    const speed = 30;
    const drag = 0.1;
    const advance = (_time: number, deltaMS: number) => {
      if (setWidth <= 0) measure();
      offset = gsap.utils.wrap(
        -setWidth,
        0,
        offset + direction * speed * (deltaMS / 1000)
      );
      gsap.set(track, { x: offset });
    };
    gsap.ticker.add(advance);

    const trigger = ScrollTrigger.create({
      onUpdate(self) {
        const current = self.scroll();
        const travelled = current - lastScroll;
        lastScroll = current;
        if (setWidth > 0) {
          // drag the strip with the page: down pushes left, up pulls right.
          offset = gsap.utils.wrap(-setWidth, 0, offset - travelled * drag);
        }
        const velocity = self.getVelocity();
        // scrolling down drives the strip left, scrolling up drives it right.
        if (velocity > 100) direction = -1;
        else if (velocity < -100) direction = 1;
      },
    });

    return () => {
      trigger.kill();
      gsap.ticker.remove(advance);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <section aria-label="App gallery" className="gallery">
      <div className="gallery__viewport">
        <div ref={trackRef} className="gallery__track">
          <div className="gallery__set">
            {screens.map(screen => (
              <img
                alt={screen.alt}
                className="gallery__screen"
                decoding="async"
                height={1391}
                key={screen.src}
                loading="lazy"
                src={screen.src}
                width={643}
              />
            ))}
          </div>
          <div aria-hidden="true" className="gallery__set">
            {screens.map(screen => (
              <img
                alt=""
                className="gallery__screen"
                decoding="async"
                height={1391}
                key={screen.src}
                loading="lazy"
                src={screen.src}
                width={643}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
