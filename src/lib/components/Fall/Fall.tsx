import { StoreActions } from '../StoreActions/StoreActions.tsx';
import tarsiFall from '../../assets/fall/tarsi-fall.svg';
import tarsiFallShadow from '../../assets/fall/tarsi-fall-shadow.svg';
import './Fall.css';

// falling tarsi finale with the store actions and ground shadow.
export function Fall() {
  return (
    <section aria-label="Falling Tarsi" className="fall">
      <img
        alt="Tarsi falling from the sky"
        className="fall__character"
        decoding="async"
        loading="lazy"
        src={tarsiFall}
      />
      <div className="fall__actions">
        <StoreActions />
      </div>
      <img
        alt=""
        className="fall__shadow"
        decoding="async"
        loading="lazy"
        src={tarsiFallShadow}
      />
    </section>
  );
}
