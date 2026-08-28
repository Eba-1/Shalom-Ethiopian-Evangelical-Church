import SiteFooter from "../../components/site-footer";

export const metadata = {
  title: "About Shalom | Shalom Ethiopian Evangelical Church",
  description:
    "Learn about the story, mission, beliefs, pastors, and community of Shalom Ethiopian Evangelical Church in Portland, Oregon.",
};

const beliefs = [
  {
    title: "The Bible",
    copy: "We believe the Bible is the inspired Word of God and the trustworthy foundation for faith, truth, and daily life.",
  },
  {
    title: "God and the Trinity",
    copy: "We believe in one God, eternally existing as Father, Son, and Holy Spirit.",
  },
  {
    title: "Jesus Christ",
    copy: "We believe Jesus Christ is the Son of God, fully God and fully human, who died for our sins and rose again.",
  },
  {
    title: "Salvation",
    copy: "We believe salvation is God’s gift of grace, received through faith in Jesus Christ.",
  },
  {
    title: "The Holy Spirit",
    copy: "We believe the Holy Spirit lives in believers, guides the Church, and empowers us to live for Christ.",
  },
  {
    title: "The Church",
    copy: "We believe the Church is the family of God, called to worship, grow, serve, and share the hope of the gospel.",
  },
];

const ministries = [
  ["01", "Children"],
  ["02", "Young Adults"],
  ["03", "Men’s Fellowship"],
  ["04", "Women’s Fellowship"],
  ["05", "Prayer & Care"],
  ["06", "Worship & Media"],
];

export default function AboutPage() {
  return (
    <main className="about-page" id="top">
      <div className="notice">Live worship at 10:00 AM</div>
      <nav className="nav about-nav" aria-label="Main navigation">
        <a className="brand" href="/">
          <img className="brand-logo" src="/shalom-church-logo.png" alt="Shalom Ethiopian Evangelical Church logo" />
          <span>SHALOM ETHIOPIAN<br /> EVANGELICAL <br /><b>CHURCH</b></span>
        </a>
        <div className="links">
          <a href="/">Home</a>
          <a className="active" href="/about" aria-current="page">About</a>
          <a href="/#services">Services</a>
          <a href="/#community">Community</a>
          <a href="/#gallery">Gallery</a>
          <a href="/#contact">Contact</a>
        </div>
        <a className="give" href="/#give">GIVE</a>
      </nav>

      <section className="about-hero" aria-labelledby="about-title">
        <span className="about-hero-watermark" aria-hidden="true">SHALOM</span>
        <div className="about-hero-copy">
          <p className="about-kicker">OUR CHURCH</p>
          <h1 id="about-title">More than a church.<br /><em>A family in Christ.</em></h1>
          <div className="about-rule"><span /></div>
          <p>Rooted in Christ and growing together as one community.</p>
        </div>
        <div className="about-hero-art" aria-label="Life at Shalom">
          <div className="about-arch-frame">
            <img src="/gallery/sunday-worship.webp" alt="The Shalom church family worshipping together" />
          </div>
          <div className="about-overlap-frame">
            <img src="/gallery/church-family.webp" alt="Members of the Shalom church family" />
          </div>
          <span className="about-art-box" aria-hidden="true" />
          <span className="about-art-dot" aria-hidden="true" />
        </div>
      </section>

      <section className="about-story" aria-labelledby="story-title">
        <figure className="about-story-image">
          <img src="/gallery/worship-team.webp" alt="Worship at Shalom Ethiopian Evangelical Church" />
          <span aria-hidden="true" />
        </figure>
        <div className="about-story-copy">
          <p className="about-kicker">WHO WE ARE</p>
          <h2 id="story-title">Our Story</h2>
          <p>Shalom Ethiopian Evangelical Church is a Christ-centered community in Portland, Oregon. We gather across generations to worship God, grow in His Word, care for one another, and share the love of Jesus with our community.</p>
          <p>What began as a place of fellowship continues to grow as a spiritual home where people can belong, be transformed by God’s grace, and use their gifts to serve.</p>
          <span className="about-since" aria-hidden="true">TOGETHER</span>
        </div>
      </section>

      <section className="about-purpose" aria-label="Our mission and vision">
        <article className="about-mission">
          <span className="purpose-icon" aria-hidden="true">✝</span>
          <h2>Mission</h2>
          <i aria-hidden="true" />
          <p>To make disciples who know God, love others, grow in faith, and carry the hope of the gospel into the world.</p>
        </article>
        <article className="about-vision">
          <span className="purpose-icon" aria-hidden="true">◎</span>
          <h2>Vision</h2>
          <i aria-hidden="true" />
          <p>A Christ-centered community transformed by God’s truth and serving every generation with love.</p>
        </article>
      </section>

      <section className="about-beliefs" aria-labelledby="beliefs-title">
        <div className="about-section-title">
          <p className="about-kicker">OUR FOUNDATION</p>
          <h2 id="beliefs-title">What<br />We Believe</h2>
          <span aria-hidden="true" />
        </div>
        <div className="belief-list">
          {beliefs.map((belief, index) => (
            <details key={belief.title} open={index === 2}>
              <summary><span>{belief.title}</span><b aria-hidden="true" /></summary>
              <p>{belief.copy}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="about-pastors" aria-labelledby="pastors-title">
        <div className="pastors-heading">
          <p className="about-kicker">OUR LEADERSHIP</p>
          <h2 id="pastors-title">Meet Our Pastors</h2>
          <p>Serving together with one heart for Christ and His Church.</p>
        </div>
        <div className="pastor-profiles">
          <article className="pastor-profile pastor-profile-featured">
            <div className="pastor-profile-image">
              <img src="/pastor-melkamu-tadesse.jpg" alt="Pastor Melkamu Tadesse" />
            </div>
            <p>Senior Pastor</p>
            <h3>Pastor Melkamu Tadesse</h3>
          </article>
          {[2, 3].map((number) => (
            <article className="pastor-profile pastor-profile-pending" key={number}>
              <div className="pastor-profile-placeholder" aria-hidden="true">
                <span>{String(number).padStart(2, "0")}</span>
              </div>
              <p>Pastor</p>
              <h3>Profile coming soon</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="about-community" aria-labelledby="community-title">
        <img src="/gallery/all-generations.webp" alt="Different generations worshipping at Shalom" />
        <div className="about-community-overlay" />
        <div className="about-community-content">
          <p className="about-kicker">LIFE AT SHALOM</p>
          <h2 id="community-title">Find Your Place at Shalom</h2>
          <div className="ministry-links">
            {ministries.map(([number, name]) => (
              <a href="/about#community-title" key={name}><span>{number}</span><strong>{name}</strong></a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
