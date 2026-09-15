import './Footer.css';

// minimal footer with brand text on the left and links plus copyright grouped on the right.
export function Footer() {
  return (
    <footer className="footer section-container">
      <div className="footer__top">
        <p className="footer__brand">Tarsi Buddies</p>
        <div className="footer__right">
          <nav aria-label="Footer" className="footer__nav">
            <a className="footer__link" href="/">
              Support
            </a>
            <a className="footer__link" href="/">
              Privacy
            </a>
            <a className="footer__link" href="/">
              Terms
            </a>
          </nav>
          <p className="footer__copyright">
            © {new Date().getFullYear()} Tarsi Buddies. Save better, together.
          </p>
        </div>
      </div>
    </footer>
  );
}
