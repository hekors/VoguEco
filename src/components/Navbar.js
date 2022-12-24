import heroImg from "../assets/heroImg.jpg";
function Navbar() {
  return (
    <div className="flex justify-around w-11/12 m-auto">
      <div className="w-2/12">
        <h1>VoguEco</h1>
      </div>
      <div className="w-5/12">
        <ul className="flex justify-around">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">Get in Touch</a>
          </li>
        </ul>
      </div>
      <div className="w-2/12">
        <button>Create an account</button>
      </div>
    </div>
  );
}

export default Navbar;
