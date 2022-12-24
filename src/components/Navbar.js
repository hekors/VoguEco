import tree from "../assets/tree.png";
import user from "../assets/user.svg";
function Navbar() {
  return (
    <div className="flex justify-around w-11/12 m-auto text-slate-300 p-5">
      <div className=" flex w-2/12 justify-around">
        <img className="w-12 mb-1" src={tree}></img>
        <h1 className="text-slate-50 font-poppins text-3xl">VogueEco</h1>
      </div>
      <div className="w-5/12">
        <ul className="flex justify-around p-2">
          <li>
            <a className="hover:font-semibold" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:font-semibold" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="hover:font-semibold" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="hover:font-semibold" href="#">
              How it works
            </a>
          </li>
          <li>
            <a className="hover:font-semibold" href="#">
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <button className=" flex p-3 text-slate-50 rounded border-2 border-slate-500 border-solid hover:bg-slate-100 hover:text-green-900">
          <img className="mr-2" src={user}></img> Create an account
        </button>
      </div>
    </div>
  );
}

export default Navbar;
