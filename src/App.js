import Navbar from "./components/Navbar";
import heroImg from "./assets/heroImg.jpg";
function App() {
  return (
    <div className="App">
      <img src={heroImg}></img>
      <Navbar />
    </div>
  );
}

export default App;
