import GiveDialog from "../../components/give-dialog";
import SiteFooter from "../../components/site-footer";

export const metadata = {
  title: "Ministries | Shalom Ethiopian Evangelical Church",
  description:
    "Explore the ministries and fellowship groups of Shalom Ethiopian Evangelical Church in Portland, Oregon.",
};

const ministries = [
  {
    id: "evangelism",
    title: "Evangelism & Holistic Ministry",
    shortTitle: "Evangelism &\nHolistic Ministry",
    image: "/ministries/holistic-ministry.webp",
    imageAlt: "Church members preparing food together as an act of service",
    intro:
      "Sharing the hope of Christ in word and action while caring for the whole person—body, mind, and spirit.",
    paragraphs: [
      "At the heart of our mission is a commitment to spreading the good news of Jesus Christ while addressing the whole person—body, mind, and spirit. Evangelism is not just about sharing the gospel message but also living it out through acts of love, service, and compassion in our communities. Our goal is to help others experience the transformative power of Jesus in every aspect of their lives.",
      "We believe that the message of Jesus is one of hope, redemption, and new life for everyone. Our ministry empowers individuals to share this message in both word and action through personal relationships, outreach programs, and global missions—reaching people regardless of background, culture, or circumstance.",
      "Holistic ministry reflects the example set by Jesus, who preached the gospel, healed the sick, fed the hungry, and cared for the marginalized. Through service projects, counseling, healthcare initiatives, and community outreach, we seek to meet physical, emotional, social, and spiritual needs.",
      "Through evangelism and holistic care, we believe lives can be transformed, communities strengthened, and God’s kingdom expanded. Together, we are called to be the hands and feet of Jesus, bringing hope and healing wherever it is needed most.",
    ],
  },
  {
    id: "children",
    title: "Children’s Ministry",
    shortTitle: "Children’s\nMinistry",
    image: "/ministries/childrens-ministry.webp",
    imageAlt: "Children spending time together at Shalom",
    intro:
      "Nurturing the next generation to know God’s love and grow in faith, joy, character, and purpose.",
    paragraphs: [
      "We believe that every child is a beloved creation of God, designed with purpose and potential. We are committed to guiding children in their spiritual journey, helping them discover the love of Jesus Christ, and teaching them to live out their faith with joy and compassion.",
      "Our mission is to nurture a safe, inclusive, and engaging environment where children can grow in knowledge, character, and faith. Through intentional teaching, worship, prayer, and relationships, we seek to instill biblical truth and help children understand God’s Word, His grace, and His plan for their lives.",
    ],
  },
  {
    id: "women",
    title: "Women’s Fellowship",
    shortTitle: "Women’s\nFellowship",
    image: "/ministries/womens-fellowship.webp",
    imageAlt: "Women worshiping together at Shalom",
    intro:
      "Encouraging women to grow in faith, build meaningful relationships, and live out God’s purpose together.",
    paragraphs: [
      "Shalom Ethiopian Church Women’s Fellowship is a vibrant and empowering community of women who come together to grow in faith, build meaningful relationships, and support one another in every season of life. Our fellowship provides a safe, nurturing space to strengthen our spiritual journeys, share experiences, and encourage each other in Christ.",
      "Through Bible studies, prayer groups, social events, and service opportunities, women can deepen their understanding of God’s Word, grow in their relationship with Jesus, and be equipped to live out their faith. We walk alongside each other in times of joy and struggle, fostering friendships that uplift, inspire, and hold one another accountable.",
      "Our fellowship also focuses on serving others. From community outreach to supporting women in need, we come together to reflect God’s love in practical ways and bring hope to those around us.",
      "We invite all women to be part of this sisterhood, where we can laugh, learn, serve, and grow together as we seek to honor God in every area of our lives.",
    ],
  },
  {
    id: "brothers",
    title: "Brothers’ Fellowship",
    shortTitle: "Brothers’\nFellowship",
    image: "/ministries/brothers-fellowship.webp",
    imageAlt: "A man worshiping during a Shalom gathering",
    intro:
      "Building godly men who lead with integrity, serve with humility, and encourage one another in Christ.",
    paragraphs: [
      "The Brothers’ Fellowship of Shalom Ethiopian Church is a dynamic and supportive community of men committed to growing in faith, building strong relationships, and serving God together. We believe men are called to be spiritual leaders in their homes, communities, and church.",
      "Through meetings every other month, Bible studies, prayer groups, and social events, the fellowship provides a place for men to connect, share struggles, celebrate victories, and strengthen one another in their walk with Christ. We focus on developing godly character, cultivating integrity, and being a positive influence in every area of life.",
      "Our fellowship includes opportunities for service, outreach, mentoring, and ministry. We are committed to supporting one another while showing the love of Christ in practical ways.",
      "We invite all men to join us in building a strong and vibrant brotherhood where we challenge and encourage one another to live out our faith boldly and with purpose.",
    ],
  },
  {
    id: "worship",
    title: "Choir & Worship Team",
    shortTitle: "Choir &\nWorship Team",
    image: "/ministries/choir-worship.webp",
    imageAlt: "The Shalom choir leading worship",
    intro:
      "Lifting our voices and hearts as we lead the church into heartfelt, biblical, and Spirit-filled worship.",
    paragraphs: [
      "Shalom’s Choir and Worship Team are integral parts of our ministry, dedicated to leading the congregation in powerful and heartfelt worship. We believe music is a gift from God and a profound way to connect with Him, express our praise, and welcome His presence into our services.",
      "The choir is a vibrant group of singers who create an atmosphere of worship through song. Using their voices to glorify God and inspire the congregation, they play an important role in uplifting hearts and guiding the worship experience.",
      "Our worship team consists of musicians and singers who lead in a variety of worship styles grounded in biblical and New Testament truth. Together, they create a Spirit-filled environment where worshipers can encounter God through lively praise and intimate moments of reflection and prayer.",
      "If you are passionate and gifted in music and worship, we invite you to join as a singer, musician, or volunteer. Together, we can lift up His name and worship in spirit and truth.",
    ],
  },
  {
    id: "young-adults",
    title: "Young Adults Ministry",
    shortTitle: "Young Adults\nMinistry",
    image: "/ministries/young-adults.webp",
    imageAlt: "A young adult worshiping with the church community",
    intro:
      "Connecting young adults to Christ, community, friendship, and purpose through every season of adulthood.",
    paragraphs: [
      "Welcome to the Young Adults Ministry! Our mission is to create a vibrant and supportive community where young adults can grow in their relationship with Jesus Christ, build lasting friendships, and live out their faith with purpose.",
      "Whether you are in college, starting your career, or navigating a new season of adulthood, we are here to walk alongside you in your spiritual journey. We believe young adulthood is a time of discovering who you are in Christ and embracing God’s calling for your life.",
      "Through Bible studies, worship, social events, and service projects, our ministry creates opportunities to grow deeper in faith and make a positive impact in the world around us.",
    ],
  },
];

export default function MinistriesPage() {
  return (
    <main className="ministries-page" id="top">
      <div className="notice">Live worship at 10:00 AM</div>
      <nav className="nav ministries-nav" aria-label="Main navigation">
        <a className="brand" href="/">
          <img className="brand-logo" src="/shalom-church-logo.png" alt="Shalom Ethiopian Evangelical Church logo" />
          <span>SHALOM ETHIOPIAN<br /> EVANGELICAL <br /><b>CHURCH</b></span>
        </a>
        <div className="links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a className="active" href="/ministries" aria-current="page">Ministries</a>
          <a href="/#gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
        <GiveDialog className="give" />
      </nav>

      <section className="ministries-hero" aria-labelledby="ministries-title">
        <span className="ministries-watermark" aria-hidden="true">MINISTRIES</span>
        <div className="ministries-hero-copy">
          <p className="ministries-kicker">LIFE TOGETHER</p>
          <h1 id="ministries-title">Find Your<br />Place at Shalom</h1>
          <i aria-hidden="true" />
          <p>We’re a family of faith called to love God, love people, and make disciples—together.</p>
          <a href="#ministry-navigation" aria-label="Explore our ministries">EXPLORE <span>↓</span></a>
        </div>
        <figure className="ministry-photo ministry-hero-photo">
          <img src="/ministries/ministry-community.webp" alt="Shalom members sharing the hope of Jesus in the community" />
        </figure>
      </section>

      <nav className="ministries-index" id="ministry-navigation" aria-label="Ministry sections">
        {ministries.map((ministry, index) => (
          <a href={`#${ministry.id}`} key={ministry.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{ministry.shortTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</strong>
            <i aria-hidden="true" />
          </a>
        ))}
      </nav>

      <div className="ministries-list">
        {ministries.map((ministry, index) => (
          <section className="ministry-feature" id={ministry.id} key={ministry.id} aria-labelledby={`${ministry.id}-title`}>
            <div className="ministry-copy">
              <div className="ministry-number"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
              <h2 id={`${ministry.id}-title`}>{ministry.title}</h2>
              <p>{ministry.intro}</p>
              <details>
                <summary><span>Read More</span><b aria-hidden="true" /></summary>
                <div className="ministry-details">
                  {ministry.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  <a href={`/contact?ministry=${ministry.id}`}>CONTACT THIS MINISTRY <span>→</span></a>
                </div>
              </details>
            </div>
            <figure className="ministry-photo ministry-feature-photo">
              <img src={ministry.image} alt={ministry.imageAlt} />
            </figure>
          </section>
        ))}
      </div>

      <SiteFooter />
    </main>
  );
}
