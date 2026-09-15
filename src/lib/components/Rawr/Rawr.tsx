import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Rawr.css';

type Cloud = {
  gap: string;
  label: string;
  offset: string;
  src: string;
  width: string;
};

// small high slow lane drifting right.
const backClouds: Cloud[] = [
  {
    gap: '14em',
    label: '3',
    offset: '0em',
    src: '/rawr/clouds/3.svg',
    width: '13em',
  },
  {
    gap: '8em',
    label: '5',
    offset: '6em',
    src: '/rawr/clouds/5.svg',
    width: '10em',
  },
  {
    gap: '8em',
    label: '1',
    offset: '2em',
    src: '/rawr/clouds/1.svg',
    width: '11em',
  },
];

// big low lane drifting left.
const frontClouds: Cloud[] = [
  {
    gap: '16em',
    label: '3',
    offset: '1em',
    src: '/rawr/clouds/3.svg',
    width: '12em',
  },
  {
    gap: '12em',
    label: '2',
    offset: '0em',
    src: '/rawr/clouds/2.svg',
    width: '17em',
  },
  {
    gap: '14em',
    label: '5',
    offset: '3em',
    src: '/rawr/clouds/5.svg',
    width: '14em',
  },
];

// endless cloud sky card with the dino front and center.
export function Rawr() {
  const frameRef = useRef<HTMLDivElement>(null);
  const dinoRef = useRef<HTMLImageElement>(null);
  const meteorRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof window.matchMedia !== 'function') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const frame = frameRef.current;
    const dino = dinoRef.current;
    const meteor = meteorRef.current;
    if (!frame || !dino || !meteor) return;

    gsap.registerPlugin(ScrollTrigger);
    // css centers the dino with translateX(-50%); gsap reads that as pixel
    // x, so force x to 0 and keep only xPercent to avoid a double offset
    // when the cached image already has size at init.
    const pop = gsap.fromTo(
      dino,
      { scale: 0.95, x: 0, xPercent: -50, yPercent: 25 },
      {
        duration: 0.7,
        ease: 'back.out(1)',
        scale: 1,
        scrollTrigger: {
          start: 'top 60%',
          toggleActions: 'play none none reverse',
          trigger: frame,
        },
        transformOrigin: '50% 100%',
        x: 0,
        xPercent: -50,
        yPercent: 0,
      }
    );
    // scroll parallax on separate channels so it never fights the pop-up.
    const driftDino = gsap.fromTo(
      dino,
      { y: 60 },
      {
        ease: 'none',
        scrollTrigger: {
          end: 'bottom top',
          scrub: true,
          start: 'top bottom',
          trigger: frame,
        },
        y: -60,
      }
    );
    const driftMeteor = gsap.fromTo(
      meteor,
      { y: 30 },
      {
        ease: 'none',
        scrollTrigger: {
          end: 'bottom top',
          scrub: true,
          start: 'top bottom',
          trigger: frame,
        },
        y: -30,
      }
    );

    return () => {
      for (const tween of [pop, driftDino, driftMeteor]) {
        tween.scrollTrigger?.kill();
        tween.kill();
      }
      gsap.set([dino, meteor], { clearProps: 'transform' });
    };
  }, []);

  return (
    <div className="rawr__frame" ref={frameRef}>
      <div className="rawr__sky">
        <div className="rawr__lane rawr__lane--back">
          <div className="rawr__track">
            <div className="rawr__set">
              {backClouds.map(cloud => (
                <img
                  alt={`Cloud variant ${cloud.label}`}
                  className="rawr__cloud"
                  decoding="async"
                  key={cloud.src}
                  src={cloud.src}
                  style={{
                    marginRight: cloud.gap,
                    transform: `translateY(${cloud.offset})`,
                    width: cloud.width,
                  }}
                />
              ))}
            </div>
            <div aria-hidden="true" className="rawr__set">
              {backClouds.map(cloud => (
                <img
                  alt=""
                  className="rawr__cloud"
                  decoding="async"
                  key={cloud.src}
                  src={cloud.src}
                  style={{
                    marginRight: cloud.gap,
                    transform: `translateY(${cloud.offset})`,
                    width: cloud.width,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="rawr__lane rawr__lane--front">
          <div className="rawr__track">
            <div className="rawr__set">
              {frontClouds.map(cloud => (
                <img
                  alt={`Cloud variant ${cloud.label}`}
                  className="rawr__cloud"
                  decoding="async"
                  key={cloud.src}
                  src={cloud.src}
                  style={{
                    marginRight: cloud.gap,
                    transform: `translateY(${cloud.offset})`,
                    width: cloud.width,
                  }}
                />
              ))}
            </div>
            <div aria-hidden="true" className="rawr__set">
              {frontClouds.map(cloud => (
                <img
                  alt=""
                  className="rawr__cloud"
                  decoding="async"
                  key={cloud.src}
                  src={cloud.src}
                  style={{
                    marginRight: cloud.gap,
                    transform: `translateY(${cloud.offset})`,
                    width: cloud.width,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <img
          alt="Tarsi in a dino costume saying rawr"
          className="rawr__dino"
          decoding="async"
          loading="lazy"
          ref={dinoRef}
          src="/rawr/dino.svg"
        />
      </div>
      <img
        alt="Falling meteor"
        className="rawr__meteor"
        decoding="async"
        loading="lazy"
        ref={meteorRef}
        src="/rawr/meteor.svg"
      />
    </div>
  );
}
