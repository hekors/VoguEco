function Hero() {
  return (
    <div className="text-white flex flex-col py-52 w-7/12 m-auto">
      <h1 className="w-5/6 m-auto text-center text-5xl font-alice tracking-wide">
        Save the planet from your Fashion Sense.
      </h1>
      <p className="w-11/12 m-auto text-center my-5 text-slate-200 tracking-wide">
        VoguEco is a project, which focusses on creating awareness about the
        rising issue of using Synthetic fibres for manufacturing of cheap
        clothes, which ultimately impacts our environment drastically without us
        knowing anything about it.
      </p>
      <div className="flex justify-around m-10 font-alice">
        <button className="w-2/6 bg-slate-50 rounded-lg rounded-br-none border-[3px] border-slate-200 border-solid p-2 text-stone-800 font-bold">
          Plant your first tree.
        </button>
        <button className="w-2/6 rounded-lg rounded-br-none border-[3px] border-slate-200 border-solid p-2">
          Learn More.
        </button>
      </div>
    </div>
  );
}
export default Hero;
