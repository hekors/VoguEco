import {Link} from 'react-router-dom';


function Hero() {
  return (
    <div className="text-white flex flex-col py-52 w-7/12 m-auto">
      <h1 className="w-7/6 m-auto text-center text-5xl font-sans tracking-wide">
      Save the planet from your sense of style.
      </h1>
      <p className="w-12/12 m-auto text-xl text-center my-10 text-slate-200 tracking-wide">
        VoguEco is a project, which focusses on creating awareness about the
        rising issue of using Synthetic fibres for manufacturing of cheap
        clothes, which ultimately impacts our environment drastically without us
        knowing anything about it.
      </p>
      <div className="flex justify-around font-serif">
      <Link className="font-serif" to={"/plant"}>
        <button className="px-28 bg-slate-50 rounded-md  border-[3px] border-slate-200 border-solid p-2 text-stone-800 font-bold">
          Plant your first tree.
        </button>
        </Link>
        <button className="w-2/6 rounded-lg rounded-br-none border-[3px] border-slate-200 border-solid p-2">
          Learn More.
        </button>
      </div>
    </div>
  );
}
export default Hero;
