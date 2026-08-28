import { MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer-grid">
        <div className="site-footer-brand">
          <a className="site-footer-logo-link" href="#top" aria-label="Return to the homepage">
            <img
              className="site-footer-logo"
              src="/shalom-church-logo.png"
              alt="Shalom Ethiopian Evangelical Church logo"
            />
          </a>
          <p>
            A Christ-centered community growing in faith, serving one another,
            and sharing the hope of the gospel.
          </p>
        </div>

        <nav className="site-footer-column" aria-label="Footer navigation">
          <h2>Quick Links</h2>
          <a href="#top">Home</a>
          <a href="/about">About</a>
          <a href="#visit">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="site-footer-column site-footer-contact">
          <h2>Connect</h2>
          <a href="/contact">
            5501 SE Thiessen Rd<br />Portland, OR 97267
          </a>
          <a
            className="site-footer-map-link"
            href="https://www.google.com/maps/search/?api=1&query=5501+SE+Thiessen+Rd+Portland+OR+97267"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin aria-hidden="true" />
            <span>Open in Maps</span>
          </a>
          <a className="site-footer-social-link" href="https://www.youtube.com/@Shalom-w2h/" target="_blank" rel="noreferrer">
            <svg className="site-footer-brand-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
            </svg>
            <span>YouTube</span>
          </a>
          <a className="site-footer-social-link" href="https://www.facebook.com/people/Shalom-Church/61576299283930/#" target="_blank" rel="noreferrer">
            <svg className="site-footer-brand-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4h-3V12h3V9.3c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12Z" />
            </svg>
            <span>Facebook</span>
          </a>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>© 2026 Shalom Ethiopian Evangelical Church</span>
        <a className="site-footer-top" href="#top" aria-label="Back to top">↑</a>
        <span>Milwaukie, Oregon</span>
      </div>
    </footer>
  );
}
