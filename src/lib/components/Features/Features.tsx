import featureOne from '../../assets/features/1.webp';
import featureTwo from '../../assets/features/2.webp';
import featureThree from '../../assets/features/3.webp';
import featureFour from '../../assets/features/4.webp';
import './Features.css';

// feature cards in a two-column stack matching the design mock.
export function Features() {
  return (
    <section aria-label="App features" className="features section-container">
      <h2 className="features__title">
        Everything Tarsi does to keep your money on track
      </h2>
      <p className="features__subtitle">
        Track spending, build budgets, stay ahead of bills, and see every
        balance in one place.
      </p>
      <div className="features__grid">
        <div className="features__column">
          <img
            alt="Home dashboard greeting Lumi with Tarsi's insight, budget shortcuts, spending and activity summaries"
            className="features__card-image"
            decoding="async"
            height={939}
            loading="lazy"
            src={featureOne}
            width={751}
          />
          <img
            alt="Assets overview showing total balance, quick actions, flow and balance chart"
            className="features__card-image"
            decoding="async"
            height={706}
            loading="lazy"
            src={featureTwo}
            width={751}
          />
        </div>
        <div className="features__column">
          <img
            alt="Upcoming bills and payments due list with next payday summary"
            className="features__card-image"
            decoding="async"
            height={783}
            loading="lazy"
            src={featureThree}
            width={751}
          />
          <img
            alt="T-wallet card with available balance, bank accounts and e-wallet balances"
            className="features__card-image"
            decoding="async"
            height={862}
            loading="lazy"
            src={featureFour}
            width={751}
          />
        </div>
      </div>
    </section>
  );
}
