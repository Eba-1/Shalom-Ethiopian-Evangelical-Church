import FullGallery from "../../components/full-gallery";
import LiveStreamBanner from "../../components/live-stream-banner";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";

export const metadata = {
  title: "Gallery | Shalom Ethiopian Evangelical Church",
  description: "Explore moments of worship, community, fellowship, outreach, and life at Shalom Ethiopian Evangelical Church.",
};

export default function GalleryPage() {
  return (
    <main className="gallery-page" id="top">
      <LiveStreamBanner />
      <SiteHeader active="gallery" />

      <FullGallery />
      <SiteFooter />
    </main>
  );
}
