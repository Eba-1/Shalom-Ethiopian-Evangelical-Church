import FullGallery from "../../components/full-gallery";
import GiveDialog from "../../components/give-dialog";
import LiveStreamBanner from "../../components/live-stream-banner";
import SiteFooter from "../../components/site-footer";

export const metadata = {
  title: "Gallery | Shalom Ethiopian Evangelical Church",
  description: "Explore moments of worship, community, fellowship, outreach, and life at Shalom Ethiopian Evangelical Church.",
};

export default function GalleryPage() {
  return (
    <main className="gallery-page" id="top">
      <LiveStreamBanner />
      <nav className="nav gallery-nav" aria-label="Main navigation">
        <a className="brand" href="/">
          <img className="brand-logo" src="/shalom-church-logo.png" alt="Shalom Ethiopian Evangelical Church logo" />
          <span>SHALOM ETHIOPIAN<br /> EVANGELICAL <br /><b>CHURCH</b></span>
        </a>
        <div className="links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/ministries">Ministries</a>
          <a className="active" href="/gallery" aria-current="page">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
        <GiveDialog className="give" />
      </nav>

      <FullGallery />
      <SiteFooter />
    </main>
  );
}
