import WhatsHappening from "../components/whats-happening";
import PastorWelcome from "../components/pastor-welcome";

const galleries = [["Kids Ministry","Learning, joy & faith","kids"],["Sunday Service","Worship together","service"],["Young Adults","Growing in community","young"],["Outreach","Serving our neighbors","outreach"],["Choir","One voice in worship","choir"],["Retreats","Rest, reflect, renew","retreat"],["Women’s Fellowship","Faith & friendship","women"],["Men’s Fellowship","Brotherhood & purpose","men"],["Media Team","Stories behind the scenes","media"],["Pastoral Team","Meet our shepherds","pastors"]];
const events = [["30","AUG","Sunday Worship","10:00 AM · Main Sanctuary"],["05","SEP","Community Welcome Dinner","6:00 PM · Fellowship Hall"],["12","SEP","Young Adults Gathering","7:00 PM · Community Room"]];
export default function Home(){return <main>
<div className="notice">Live worship at 10:00 AM </div>
<nav className="nav">
    <a className="brand" href="#top">
        <img className="brand-logo" src="/shalom-church-logo.png" alt="Shalom Ethiopian Evangelical Church logo"/>
        <span>SHALOM ETHIOPIAN<br></br> EVANGELICAL <br/><b>CHURCH</b></span>
    </a>
    <div className="links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#community">Community</a>
        <a href="#lessons">Lessons</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a></div>
        <a className="give" href="#give">GIVE</a></nav>
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
<section className="gallery-section" id="gallery"><div className="section-head"><div><p className="eyebrow dark">LIFE AT OUR CHURCH</p><h2>See faith in <em>motion.</em></h2></div><p>Explore moments of worship, friendship, service, and growth across our church community.</p></div><div className="gallery-grid">{galleries.map(([title,subtitle,cls],i)=><a className={`gallery-card ${cls} ${i<2?"large":""}`} href="#" key={title}><div className="placeholder"><span>PHOTO</span><b>{String(i+1).padStart(2,"0")}</b></div><div className="card-label"><div><h3>{title}</h3><p>{subtitle}</p></div><span>↗</span></div></a>)}</div><div className="center"><a className="outline" href="#">VIEW THE FULL GALLERY <span>→</span></a></div></section>
<section className="community" id="community"><div className="community-copy"><p className="eyebrow gold">HERE FOR OUR CITY</p><h2>New here?<br/>You’re not <em>alone.</em></h2><p>Whether you just arrived or have called this city home for years, our community is ready to walk beside you.</p><a className="primary gold-btn" href="#">EXPLORE COMMUNITY SUPPORT →</a></div><div className="resource-grid"><article><span>01</span><h3>Newcomer support</h3><p>Local orientation, transportation, schools, and practical guidance.</p></article><article><span>02</span><h3>Work & education</h3><p>Employment resources, language classes, and skill-building support.</p></article><article><span>03</span><h3>Family connection</h3><p>Groups, youth programs, childcare information, and community care.</p></article><article><span>04</span><h3>Request support</h3><p>A private and respectful way to tell us how we can help.</p></article></div></section>
<section className="events" id="services"><div className="section-head"><div><p className="eyebrow dark">COMING UP</p><h2>Gather with <em>us.</em></h2></div><a href="#">VIEW ALL EVENTS →</a></div>{events.map(e=><article className="event" key={e[2]}><div className="date"><b>{e[0]}</b><span>{e[1]}</span></div><h3>{e[2]}</h3><p>{e[3]}</p><button aria-label={`View ${e[2]}`}>→</button></article>)}</section>
<footer id="contact"><div className="footer-brand"><img className="footer-logo" src="/shalom-church-logo.png" alt="Shalom Ethiopian Evangelical Church logo"/><h2>EVERY NATION.<br/>ONE FAMILY.</h2></div><div><small>VISIT</small><p>Portland, Oregon<br/>Sundays at 10:00 AM</p></div><div><small>CONNECT</small><p>Plan Your Visit<br/>Request Prayer<br/>Volunteer</p></div><div><small>FOLLOW</small><p>Instagram<br/>YouTube<br/>Facebook</p></div><div className="footer-bottom">© 2026 Shalom Ethiopian Evangelical Church <span>Made for our community.</span></div></footer>
</main>}
