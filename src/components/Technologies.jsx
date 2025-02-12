import { RiReactjsLine } from "react-icons/ri";

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="https://skillicons.dev/icons?i=laravel" alt="Laravel" className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="https://skillicons.dev/icons?i=react" alt="React" className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="https://skillicons.dev/icons?i=vue" alt="Vue.js" className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="https://skillicons.dev/icons?i=mysql" alt="Mysql" className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="https://skillicons.dev/icons?i=nodejs" alt="NodeJs" className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="https://skillicons.dev/icons?i=redux" alt="Redux" className="text-7xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
