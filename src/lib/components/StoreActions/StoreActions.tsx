import './StoreActions.css';

// shared download and open store buttons for the hero and finale.
export function StoreActions() {
  return (
    <div className="store-actions">
      <button
        className="store-actions__action store-actions__action--primary"
        type="button"
      >
        Download on the App Store
        <svg
          aria-hidden="true"
          className="store-actions__action-icon store-actions__action-icon--apple"
          focusable="false"
          viewBox="0 0 384 512"
        >
          <path
            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        className="store-actions__action store-actions__action--secondary"
        type="button"
      >
        Open in the browser
        <svg
          aria-hidden="true"
          className="store-actions__action-icon"
          fill="none"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </svg>
      </button>
    </div>
  );
}
