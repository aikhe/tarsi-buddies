import './ScreenBlock.css';

// mobile and mid screens see the block screen instead of the homepage.
export const SCREEN_BLOCK_MEDIA_QUERY = '(max-width: 1024px)';

// centered placeholder shown instead of the homepage on small screens.
export function ScreenBlock() {
  return (
    <section aria-label="Tarsi Buddies coming soon" className="screen-block">
      <div className="screen-block__visual">
        <img
          alt="UFO"
          className="screen-block__ufo"
          decoding="async"
          src="/ufo.svg"
        />
        <img
          alt="Floating Tarsi"
          className="screen-block__tarsi"
          decoding="async"
          src="/tarsi-float.svg"
        />
      </div>
      <img
        alt="Tarsi Buddies"
        className="screen-block__title"
        decoding="async"
        src="/title.svg"
      />
      <p className="screen-block__description">
        This page is only available on <br />
        desktop screens for now.
      </p>
    </section>
  );
}
