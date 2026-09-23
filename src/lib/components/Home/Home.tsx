import { StoreActions } from '../StoreActions/StoreActions.tsx';
import numberOne from '../../assets/home/number-one.svg';
import tarsiFloat from '../../assets/home/tarsi-float.svg';
import title from '../../assets/home/title.svg';
import ufo from '../../assets/home/ufo.svg';
import './Home.css';

const tagline =
  'Track your spending, plan your budget, and make every peso work smarter for you.';

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
          <img alt="Tarsi Buddies" className="home__title-image" src={title} />
        </h1>
        <p className="home__tagline">{renderTagline(tagline)}</p>
        <img alt="Number one" className="home__number-image" src={numberOne} />
        <StoreActions />
      </div>
      <div className="home__visual">
        <img alt="UFO" className="home__ufo-image" src={ufo} />
        <img
          alt="Floating Tarsi"
          className="home__tarsi-image"
          src={tarsiFloat}
        />
      </div>
    </section>
  );
}
