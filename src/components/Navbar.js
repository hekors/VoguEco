import tree from "../assets/tree.svg";
import user from "../assets/user.svg";
function Navbar() {
  return (
    <div className="flex justify-around w-11/12 m-auto text-slate-300 p-5">
      <div className=" flex w-2/12">
        <img className="w-10 mb-1" src={tree}></img>
        <h1 className="text-slate-50 font-sans text-4xl">VoguEco</h1>
      </div>
      <div className="w-5/12">
        <ul className="flex justify-around p-2">
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
      <div className="">
        <button className=" flex p-2 text-slate-50 rounded border-2 border-slate-500 border-solid">
          <img className="mr-2" src={user}></img> Create an account
        </button>
      </div>
    </div>
  );
}

export default Navbar;
