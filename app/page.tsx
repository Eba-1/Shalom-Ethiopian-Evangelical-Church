import WhatsHappening from "../components/whats-happening";
import PastorWelcome from "../components/pastor-welcome";
import GalleryShowcase from "../components/gallery-showcase";
import SiteFooter from "../components/site-footer";
import GiveDialog from "../components/give-dialog";

export default function Home(){return <main>
<div className="notice">Live worship at 10:00 AM </div>
<nav className="nav">
    <a className="brand" href="#top">
        <img className="brand-logo" src="/shalom-church-logo.png" alt="Shalom Ethiopian Evangelical Church logo"/>
        <span>SHALOM ETHIOPIAN<br></br> EVANGELICAL <br/><b>CHURCH</b></span>
    </a>
    <div className="links">
        <a href="#top">Home</a>
        <a href="/about">About</a>
        <a href="/ministries">Ministries</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a></div>
        <GiveDialog className="give" /></nav>
<section className="hero" id="top">
    <div className="hero-slideshow" aria-hidden="true">
        <img className="hero-slide hero-slide-one" src="/shalom-hero-community.jpg" alt=""/>
        <img className="hero-slide hero-slide-two" src="/shalom-hero-worship.jpg" alt=""/>
    </div>
    <div className="hero-overlay"/>
    <div className="hero-shape hero-a"/>
    <div className="hero-shape hero-b"/>
    <div className="hero-content">
        <p className="eyebrow">MILWAUKIE, OREGON · ALL NATIONS WELCOME</p>
        <h1>A place to<br/><em>belong.</em></h1><p className="intro"><em>"And all thy children shall be taught of the LORD; and great shall be the peace of thy children."</em> Isaiah 54:13</p><div className="actions">
            <a className="primary" href="#visit">LEARN MORE <span>→</span></a>
            <a className="secondary" href="https://www.youtube.com/@Shalom-w2h/streams">WATCH LIVE</a></div></div>
</section>
<WhatsHappening />
<PastorWelcome />
<GalleryShowcase />
<section className="closing-invitation" id="connect" aria-labelledby="closing-invitation-title">
    <span className="closing-word" aria-hidden="true">WELCOME</span>
    <div className="closing-copy">
        <p className="eyebrow gold">COME AS YOU ARE</p>
        <h2 id="closing-invitation-title">There’s a place<br/>for you <em>here.</em></h2>
        <p>Join us this Sunday, worship with us online, or reach out. We would love to welcome you and help you take your next step.</p>
    </div>
    <div className="closing-actions">
        <a className="closing-primary" href="https://www.google.com/maps/search/?api=1&query=5501%20SE%20Thiessen%20Rd%2C%20Portland%2C%20OR%2097267" target="_blank" rel="noreferrer">GET DIRECTIONS <span>↗</span></a>
        <a href="https://www.youtube.com/@Shalom-w2h/streams" target="_blank" rel="noreferrer">WATCH LIVE <span>→</span></a>
        <a href="#contact">CONTACT US <span>→</span></a>
    </div>
</section>
<SiteFooter />
</main>}
