import previewOne from '../../assets/preview/1.webp';
import previewTwo from '../../assets/preview/2.webp';
import previewThree from '../../assets/preview/3.webp';
import './Preview.css';

export function Preview() {
  return (
    <section aria-label="App previews" className="preview section-container">
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
