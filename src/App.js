import Navbar from "./components/Navbar";
import heroImg from "./assets/heroImg.jpg";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="App font-poppins">
      <div style={{ backgroundImage: `url(${heroImg})` }}>
        <Navbar />
        <Hero />
      </div>
      <div>
        <h1>Card</h1>
      </div>
    </div>
  );
}

export default App;
