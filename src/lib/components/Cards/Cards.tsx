import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cardOne from '../../assets/cards/1.webp';
import cardTwo from '../../assets/cards/2.webp';
import cardThree from '../../assets/cards/3.webp';
import './Cards.css';

// card designs in a horizontal row.
export function Cards() {
  const sectionRef = useRef<HTMLElement>(null);

  // staggered pop as the cards scroll into view.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof window.matchMedia !== 'function') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const section = sectionRef.current;
    if (!section) return;
    const cards = section.querySelectorAll('.cards__card-image');
    if (cards.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.from(cards, {
      duration: 0.7,
      ease: 'back.out(1)',
      opacity: 0,
      scale: 0.95,
      scrollTrigger: {
        start: 'top 60%',
        toggleActions: 'play none none reverse',
        trigger: section,
      },
      stagger: 0.12,
      transformOrigin: '50% 100%',
      y: 40,
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(cards, { clearProps: 'transform,opacity' });
    };
  }, []);

  // gentle cursor push plus a short drag with a spring back.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof window.matchMedia !== 'function') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;
    const section = sectionRef.current;
    if (!section) return;
    const floats = Array.from(
      section.querySelectorAll<HTMLElement>('.cards__float')
    );
    if (floats.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);
    // hover uses fresh tweens every move so nothing persistent can break.
    // quickTo helpers were removed because any kill/overwrite of their
    // internal tween corrupts the cache and hover dies after the first drag.
    const floatSet = new Set(floats);
    // spring-back tweens keyed by float so hover/drag only kill their own.
    const restTweens = new Map<HTMLElement, gsap.core.Tween>();
    // active drags keyed by float with pointer start and id.
    const drags = new Map<
      HTMLElement,
      { pointerId: number; startX: number; startY: number }
    >();
    // pushes each card slightly away from the cursor within a radius.
    // fresh tweens with overwrite auto so hover always takes over cleanly.
    const hoverTo = (float: HTMLElement, x: number, y: number, r: number) => {
      gsap.to(float, {
        duration: 0.4,
        ease: 'power3.out',
        overwrite: 'auto',
        x,
        y,
      });
      gsap.to(float, {
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
        overwrite: 'auto',
        rotation: r,
      });
    };
    const onMove = (event: PointerEvent) => {
      if (drags.size > 0) return;
      const radius = 220;
      for (const float of floats) {
        // let the release spring play out untouched so it stays visible.
        if (restTweens.has(float)) continue;
        const rect = float.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = cx - event.clientX;
        const dy = cy - event.clientY;
        const dist = Math.hypot(dx, dy);
        if (dist === 0 || dist > radius) {
          hoverTo(float, 0, 0, 0);
          continue;
        }
        const force = 1 - dist / radius;
        const push = force * 18;
        hoverTo(
          float,
          (dx / dist) * push,
          (dy / dist) * push,
          gsap.utils.clamp(-6, 6, (-dx / dist) * force * 6)
        );
      }
    };
    const onLeave = () => {
      if (drags.size > 0) return;
      for (const float of floats) {
        if (restTweens.has(float)) continue;
        hoverTo(float, 0, 0, 0);
      }
    };
    const onDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      const float = event.currentTarget as HTMLElement;
      if (!floatSet.has(float)) return;
      drags.set(float, {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
      });
      // drag takes over: kill hover motion and pending spring-back.
      // safe because hover always creates fresh tweens on the next move.
      gsap.killTweensOf(float);
      restTweens.get(float)?.kill();
      restTweens.delete(float);
      try {
        float.setPointerCapture(event.pointerId);
      } catch {
        // noop when capture is unavailable.
      }
    };
    // rubber-bands past the free range instead of hitting a hard wall.
    const rubber = (value: number) => {
      const free = 70;
      const stiffness = 180;
      const abs = Math.abs(value);
      if (abs <= free) return value;
      const extra = abs - free;
      return (
        Math.sign(value) * (free + (stiffness * extra) / (stiffness + extra))
      );
    };
    // direct 1:1 drag tracking on window so moves never get lost.
    const onDragMove = (event: PointerEvent) => {
      for (const [float, drag] of drags) {
        if (drag.pointerId !== event.pointerId) continue;
        const dx = rubber(event.clientX - drag.startX);
        const dy = rubber(event.clientY - drag.startY);
        // fresh hover tweens are killed on drag start, so set is safe.
        gsap.set(float, {
          rotation: gsap.utils.clamp(-8, 8, dx * 0.08),
          x: dx,
          y: dy,
        });
      }
    };
    // springs the released card back to rest.
    const onUp = (event: PointerEvent) => {
      for (const [float, drag] of Array.from(drags)) {
        if (drag.pointerId !== event.pointerId) continue;
        drags.delete(float);
        restTweens.get(float)?.kill();
        // bouncy spring back to rest; hover stays off this card until
        // onComplete clears it so the overshoot is fully visible.
        const rest = gsap.to(float, {
          duration: 0.8,
          ease: 'elastic.out(1, 0.75)',
          onComplete: () => {
            if (restTweens.get(float) === rest) restTweens.delete(float);
          },
          overwrite: 'auto',
          rotation: 0,
          x: 0,
          y: 0,
        });
        restTweens.set(float, rest);
      }
    };

    section.addEventListener('pointermove', onMove);
    section.addEventListener('pointerleave', onLeave);
    window.addEventListener('pointermove', onDragMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    for (const float of floats) {
      float.addEventListener('pointerdown', onDown);
    }
    return () => {
      section.removeEventListener('pointermove', onMove);
      section.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointermove', onDragMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      for (const float of floats) {
        float.removeEventListener('pointerdown', onDown);
      }
      drags.clear();
      for (const rest of restTweens.values()) rest.kill();
      restTweens.clear();
      for (const float of floats) gsap.set(float, { clearProps: 'all' });
    };
  }, []);

  return (
    <section
      aria-label="Card designs"
      className="cards section-container"
      ref={sectionRef}
    >
      <h2 className="cards__title">
        See what’s happening across all your cards
      </h2>
      <p className="cards__subtitle">
        Link your physical, virtual, and e-money cards to track balances and
        activity in one view.
      </p>
      <div className="cards__track">
        <div className="cards__float">
          <img
            alt="Tarsi card design in green with tarsier mascot"
            className="cards__card-image"
            decoding="async"
            draggable={false}
            height={553}
            loading="lazy"
            src={cardOne}
            width={849}
          />
        </div>
        <div className="cards__float">
          <img
            alt="Tarsi card design in dark with tarsier mascot"
            className="cards__card-image"
            decoding="async"
            draggable={false}
            height={537}
            loading="lazy"
            src={cardTwo}
            width={839}
          />
        </div>
        <div className="cards__float">
          <img
            alt="Tarsi card design in light with tarsier mascot"
            className="cards__card-image"
            decoding="async"
            draggable={false}
            height={565}
            loading="lazy"
            src={cardThree}
            width={856}
          />
        </div>
      </div>
    </section>
  );
}
