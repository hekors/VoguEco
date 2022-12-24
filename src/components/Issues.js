import IssuesArr from "./IssuesArr";
function IssueCard(props) {
  return (
    <div className="w-2/6 m-2 rounded-2xl drop-shadow-2xl bg-greenishtxt hover:scale-105">
      <img className="h-4/6 w-full rounded-2xl" src={props.img}></img>
      <div>
        <p className="p-5 text-sm text-green-900 font-semibold">{props.desc}</p>
      </div>
    </div>
  );
}

function Issues() {
  const issuesEl = IssuesArr.map((issue) => {
    return <IssueCard key={issue.key} img={issue.img} desc={issue.desc} />;
  });
  return (
    <div className="flex w-11/12 m-auto flex-col  mb-24">
      <div className="mb-10">
        <h2 className="text-5xl text-white tracking-wide font-alice text-center my-4">
          What's the Issue actually?
        </h2>
        <p className="text-center text-lg text-slate-200">
          These are some of the issues, which can simply convince us, where we
          are going wrong.
        </p>
      </div>
      <div className="flex w-11/12 m-auto">{issuesEl}</div>
      <button className="w-2/12 m-auto mt-32 mb-20 hover:font-medium rounded-lg font-alice tracking-wide text-green-100 rounded-br-none border-2 shadow-lg border-green-100 border-solid p-2 px-10 hover:bg-slate-100 hover:text-green-900">
        Discover More
      </button>
    </div>
  );
}
export default Issues;
