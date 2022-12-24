import Navbar from "../components/Navbar";
import bgImg from "../assets/bgimg.png";
import Hero from "../components/Hero";
import Issues from "../components/Issues";
import Solutions from "../components/Solutions";

function Landing() {
  return (
    <div className="App font-poppins">
      <div style={{ backgroundImage: `url(${bgImg})` }}>
        <Navbar />
        <Hero />
        <Issues />
        <Solutions />
      </div>
    </div>
  );
}

export default Landing;
