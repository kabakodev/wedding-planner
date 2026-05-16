
import Hero from "./components/home/hero/hero";
import Story from "./components/home/story/story"
import Coverage from "./components/home/coverage/coverage"
import Weddings from "./components/home/wedding/wedding"
import Testimonial from "./components/home/testimony/testimony"
import Contact from "./components/home/contact/contact"
import Gallery from "./components/home/gallery/gallery";
export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#f5f1e8]">
    <Hero />
    <Story />
    <Weddings />
    <Coverage />
    <Gallery />
    <Testimonial />
    <Contact />
    </main>
  );
}
