"use client";

import { useState } from "react";

export default function PastorWelcome() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="pastor-welcome" id="about" aria-labelledby="pastor-welcome-title">
      <span className="pastor-watermark" aria-hidden="true">WELCOME</span>
      <div className="pastor-orbit" aria-hidden="true" />
      <div className="pastor-copy">
        <p className="pastor-label">A MESSAGE FROM OUR SENIOR PASTOR</p>
        <h2 id="pastor-welcome-title">You are<br />welcome<br />here.</h2>
        <p className="pastor-lead">
          It is a joy to have you with us—whether this is your first visit or Shalom
          has been home for years.
        </p>
        <p className="pastor-byline"><strong>Pastor Melkamu Tadesse</strong><span>SENIOR PASTOR</span></p>

        <button
          className="pastor-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="pastor-full-message"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span>{isOpen ? "CLOSE MESSAGE" : "READ THE FULL WELCOME"}</span>
          <b aria-hidden="true">{isOpen ? "−" : "+"}</b>
        </button>
      </div>

      <div className="pastor-portrait-wrap">
        <img
          className="pastor-portrait"
          src="/pastor-melkamu-and-wife-welcome.webp"
          alt="Pastor Melkamu Tadesse and his wife"
        />
      </div>

      <div className={`pastor-message ${isOpen ? "open" : ""}`} id="pastor-full-message">
        <div>
          <div className="pastor-message-inner">
              <p>
                Welcome to our Shalom Ethiopian Evangelical Church Portland community! It is a joy
                to have you with us, whether you are visiting for the first time or have been part
                of our church family for years. As Senior Pastor, my heart is to lead and serve
                alongside all of you, to guide our church in growing deeper in faith, stronger in
                relationships, and more passionate about sharing the love of Jesus Christ with our world.
              </p>
              <p>
                In our church, we are committed to creating a welcoming, inclusive environment where
                people of all ages can encounter God&apos;s love, experience His grace, and be transformed
                by His truth. Our mission is to make disciples who will impact the world with the hope
                of the gospel.
              </p>
              <p>
                I believe God has an incredible plan for each of us, and together, we are called to
                serve, grow, and impact our communities for Christ. We are excited for what God is
                doing in our midst, and we invite you to be a part of it. You can follow us on social
                media, Facebook, YouTube, and TikTok. Thank you for visiting our site, and I hope to
                connect with you in person soon.
              </p>
              <p>May God bless you abundantly as you walk in His love and grace.</p>
              <p className="pastor-signoff">In Christ&apos;s service,<br /><strong>Pastor Melkamu Tadesse</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}
