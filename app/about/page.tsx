import SiteFooter from "../../components/site-footer";
import LiveStreamBanner from "../../components/live-stream-banner";
import SiteHeader from "../../components/site-header";

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

const pastors = [
  {
    name: "Melkamu Tadesse",
    title: "Senior Pastor",
    image: "/pastors/melkamu-tadesse.webp",
  },
  {
    name: "Tsegaw Fikadu",
    title: "Pastor",
    image: "/pastors/tsegaw-fikadu.webp",
  },
  {
    name: "Wossen Tefera",
    title: "Pastor",
    image: "/pastors/wossen-tefera.webp",
  },
  {
    name: "Wondwossen Belachew",
    title: "Pastor",
    image: "/pastors/wondwossen-belachew.webp",
  },
];

const boardMembers = [
  {
    role: "President",
    name: "Senior Pastor Melkamu Tadesse",
    image: "/board/melkamu-tadesse-president.webp",
    alt: "Senior Pastor Melkamu Tadesse, President of the church board",
  },
  {
    role: "Treasurer",
    name: "Hana B.",
    image: "/board/hana-b-treasurer.webp",
    alt: "Hana B., Treasurer of the church board",
  },
  {
    role: "Secretary",
    name: "Wossen Tefera",
    image: "/board/wossen-tefera-secretary.webp",
    alt: "Wossen Tefera, Secretary of the church board",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page" id="top">
      <LiveStreamBanner />
      <SiteHeader active="about" />

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
          {pastors.map((pastor) => (
            <article className="pastor-profile" key={pastor.name}>
              <div className="pastor-profile-image">
                <img src={pastor.image} alt={`${pastor.title} ${pastor.name}`} />
              </div>
              <p>{pastor.title}</p>
              <h3>{pastor.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="about-board" aria-labelledby="board-title">
        <span className="board-watermark" aria-hidden="true">LEADERSHIP</span>
        <div className="board-heading">
          <p className="about-kicker">CHURCH LEADERSHIP</p>
          <h2 id="board-title">Board &amp; Elders</h2>
          <div className="board-rule" aria-hidden="true"><span /></div>
        </div>

        <div className="board-members">
          {boardMembers.map((member) => (
            <article className="board-member" key={member.role}>
              <div className="board-photo">
                <img src={member.image} alt={member.alt} />
              </div>
              <p>{member.role}</p>
              <h3>{member.name}</h3>
            </article>
          ))}
        </div>

        <article className="elders-feature">
          <div className="elders-photo">
            <img src="/board/elders-group.webp" alt="The elders of Shalom Ethiopian Evangelical Church" />
          </div>
          <div className="elders-copy">
            <p>OUR ELDERS</p>
            <h3>Serving with<br />wisdom and care.</h3>
            <div className="elders-rule" aria-hidden="true"><span /></div>
            <p>Serving our church family through prayer, spiritual guidance, wisdom, and care.</p>
          </div>
        </article>
      </section>

      <section className="about-community" aria-labelledby="community-title">
        <img src="/gallery/all-generations.webp" alt="Different generations worshipping at Shalom" />
        <div className="about-community-overlay" />
        <div className="about-community-content">
          <p className="about-kicker">LIFE AT SHALOM</p>
          <h2 id="community-title">Find Your Place at Shalom</h2>
          <p className="about-community-copy">Whether you’re looking for fellowship, spiritual growth, a place to serve, or support, we would love to help you find where you belong.</p>
          <a className="about-community-cta" href="/contact">FIND YOUR PLACE <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
