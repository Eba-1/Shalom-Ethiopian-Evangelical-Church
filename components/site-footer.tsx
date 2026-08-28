const youtubeUrl = "https://www.youtube.com/@Shalom-w2h/streams";
const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=5501%20SE%20Thiessen%20Rd%2C%20Portland%2C%20OR%2097267";

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
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <GiveDialog className="site-footer-give">Give</GiveDialog>
        </nav>

        <div className="site-footer-column site-footer-services">
          <h2>Service Times</h2>
          <p><strong>Wednesday</strong><span>Midweek Service · 6:00–8:00 PM</span></p>
          <p><strong>Friday</strong><span>Online Prayer · 8:00–10:00 PM</span></p>
          <p><strong>Sunday</strong><span>Morning Prayer · 9:00–10:00 AM</span></p>
          <p><strong>Sunday</strong><span>Worship Service · 10:00 AM–12:30 PM</span></p>
          <p><strong>Sunday</strong><span>Young Adults · 1:30–3:00 PM</span></p>
        </div>

        <div className="site-footer-column site-footer-contact">
          <h2>Contact Us</h2>
          <a href={directionsUrl} target="_blank" rel="noreferrer">
            5501 SE Thiessen Rd<br />Portland, OR 97267
          </a>
          <h2 className="site-footer-follow-title">Follow Us</h2>
          <div className="site-footer-socials" aria-label="Social media links">
            <span>Facebook</span>
            <a href={youtubeUrl} target="_blank" rel="noreferrer">YouTube</a>
            <span>TikTok</span>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>© 2026 Shalom Ethiopian Evangelical Church</span>
        <span>Portland, Oregon</span>
      </div>
    </footer>
  );
}
import GiveDialog from "./give-dialog";
