import React from "react";
import { HiMiniFilm } from "react-icons/hi2";
import { HiOutlineNewspaper } from "react-icons/hi2";

const Docs = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center px-4 mx-4 h-64 text-slate-800 dark:text-slate-200">
      <div className="flex flex-col w-full justify-center items-center mx-4 px-4 gap-10">
        
        <div className="flex w-full text-md md:text-2xl lg:text-xl px-4 mx-4 justify-center gap-20">
          <div className="flex flex-col gap-2 items-center justify-center md:text-left">
            <div>
              {" "}
              <HiMiniFilm size="50" />
            </div>
            <div>
              <h1 className="">Videos</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center md:text-left">
            <div>
              {" "}
              <HiOutlineNewspaper size="50" />
            </div>
            <div>Videos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
