import React from "react";

export default function TomoInfo() {
  return (
    <div className="md:border md:rounded-xl md:w-2/3 p-4 md:p-12 bg-gray-900 bg-opacity-20 mx-auto mt-12 text-xl">
      <div className="pb-4">
        Ovu aplikaciju napravio je Tomislav Damjanović u svrhu završnog projekta.
      </div>
      <div className="pb-4">
        Za bilo kakva pitanja ili komentare, javite se na tdamjanov@pmfst.hr.
      </div>
      <div className="pb-4">
        Link za izvorni kod je{" "}
        <a
          href="https://github.com/TomDam2210/NBA_app_final"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-500 hover:text-cyan-800"
        >
          ovdje.
        </a>
      </div>
      <div className="pb-4">
        Sva statistika preuzeta je sa:
        <a
          href="https://www.balldontlie.io/"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-500 hover:text-cyan-800"
        >
          {" "}
          https://www.balldontlie.io/
        </a>
      </div>
    </div>
  );
}
