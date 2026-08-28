import ContactForm from "../../components/contact-form";
import GiveDialog from "../../components/give-dialog";
import LiveStreamBanner from "../../components/live-stream-banner";
import SiteFooter from "../../components/site-footer";

export const metadata = {
  title: "Contact Shalom | Shalom Ethiopian Evangelical Church",
  description: "Contact Shalom Ethiopian Evangelical Church in Portland, Oregon.",
};

export default function ContactPage() {
  return (
    <main className="contact-page" id="top">
      <LiveStreamBanner />
      <nav className="nav contact-nav" aria-label="Main navigation">
        <a className="brand" href="/">
          <img className="brand-logo" src="/shalom-church-logo.png" alt="Shalom Ethiopian Evangelical Church logo" />
          <span>SHALOM ETHIOPIAN<br /> EVANGELICAL <br /><b>CHURCH</b></span>
        </a>
        <div className="links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/ministries">Ministries</a>
          <a href="/#gallery">Gallery</a>
          <a className="active" href="/contact" aria-current="page">Contact</a>
        </div>
        <GiveDialog className="give" />
      </nav>

      <section className="contact-main" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="contact-kicker">WE WOULD LOVE TO HEAR FROM YOU</p>
          <h1 id="contact-title">Let’s <em>connect.</em></h1>
          <p className="contact-intro">Whether you have a question, need prayer, or want to get involved, we’re here for you.</p>
          <ContactForm />
          <address>5501 SE Thiessen Rd, Portland, OR 97267</address>
        </div>
        <div className="contact-pattern" aria-hidden="true">
          <span className="contact-pattern-arch" />
          <span className="contact-pattern-orbit contact-pattern-orbit-one" />
          <span className="contact-pattern-orbit contact-pattern-orbit-two" />
          <span className="contact-pattern-word">CONNECT</span>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
