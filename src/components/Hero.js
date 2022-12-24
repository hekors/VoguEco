import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="text-white flex flex-col pt-40 pb-40 w-9/12 m-auto">
      <h1 className="w-4/6 m-auto text-center text-6xl font-alice tracking-wide">
        Save the planet from your sense of style.
      </h1>
      <p className="w-11/12 m-auto text-lg text-center my-10 text-slate-200 tracking-wide">
        VogueEco is a project, which focusses on creating awareness about the
        rising issue of using Synthetic fibres for manufacturing of cheap
        clothes, which ultimately impacts our environment drastically without us
        knowing anything about it.
      </p>
      <div className="flex w-5/6 m-auto justify-center font-serif">
        <Link className="font-serif" to={"/plant"}>
          <button className="bg-slate-50 font-alice m-5 tracking-wide rounded-lg rounded-br-none border-2 border-slate-200 border-solid p-2 px-6 text-stone-800 hover:font-medium hover:bg-transparent hover:text-slate-50">
            Plant your first tree.
          </button>
        </Link>
        <button className="rounded-lg font-alice m-5 tracking-wide hover:font-medium rounded-br-none border-2 border-slate-200 border-solid p-2 px-10 hover:text-green-900 hover:bg-slate-50">
          Learn More.
        </button>
      </div>
    </div>
  );
}
export default Hero;
