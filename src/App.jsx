import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Quote from "./components/Quote";
import Location from "./components/Location";
import DressCode from "./components/DressCode";
import RSVP from "./components/RSVPForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#FFF6EF]">
      <Hero />
      <Schedule />
      <Quote />
      <Location />
      <DressCode />
      <RSVP />
      <Footer />
    </div>
  );
}
