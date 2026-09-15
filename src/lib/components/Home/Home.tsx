import { siteContent } from '../../data/content.ts';
import { StoreActions } from '../StoreActions/StoreActions.tsx';
import './Home.css';

// keeps the line break after "and" to match the design mock.
function renderTagline(text: string) {
  const [first = text, second = ''] = text.split(', and ');
  return (
    <>
      {first}
      {second ? ', and' : null}
      {second ? <br /> : null}
      {second ? second : null}
    </>
  );
}

export function Home() {
  return (
    <section className="home section-container">
      <div className="home__content">
        <h1 className="home__title">
          <img
            alt="Tarsi Buddies"
            className="home__title-image"
            src="/title.svg"
          />
        </h1>
        <p className="home__tagline">{renderTagline(siteContent.tagline)}</p>
        <img
          alt="Number one"
          className="home__number-image"
          src="/number-one.svg"
        />
        <StoreActions />
      </div>
      <div className="home__visual">
        <img alt="UFO" className="home__ufo-image" src="/ufo.svg" />
        <img
          alt="Floating Tarsi"
          className="home__tarsi-image"
          src="/tarsi-float.svg"
        />
      </div>
    </section>
  );
}
