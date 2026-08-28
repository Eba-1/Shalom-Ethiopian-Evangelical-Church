import GiveDialog from "./give-dialog";

const youtubeUrl = "https://www.youtube.com/@Shalom-w2h/streams";

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

        <div className="site-footer-column site-footer-contact">
          <h2>Connect</h2>
          <a href="/contact">
            5501 SE Thiessen Rd<br />Portland, OR 97267
          </a>
          <a href={youtubeUrl} target="_blank" rel="noreferrer">YouTube</a>
        </div>

        <div className="site-footer-invitation">
          <p>There is a<br />place for <em>you</em> here.</p>
          <GiveDialog className="site-footer-give">GIVE <span aria-hidden="true">→</span></GiveDialog>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>© 2026 Shalom Ethiopian Evangelical Church</span>
        <a className="site-footer-top" href="#top" aria-label="Back to top">↑</a>
        <span>Portland, Oregon</span>
      </div>
    </footer>
  );
}
