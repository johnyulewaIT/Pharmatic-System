import React from "react";
import DocsNavBar from "./DocsNavbar";
import DocsHero from "./DocsHero";
import  DocsBody  from "./DocsBody";

const Docs = () => {
  return (
    <div className="relative">
      {/* Main content wrapper */}
      <div className="flex flex-col md:flex-row w-full z-10">
        {/* DocsNavBar side */}
        <div className="md:w-64 p-0 ">
          <DocsNavBar />
        </div>

        {/*The body*/}
        <div className="flex flex-col gap-3 w-full">
          {/* DocsHero side */}
          <div className="flex-1 ">
            <DocsHero />
          </div>

          {/* DocsBody side */}
          <div className="flex-1 ">
            <DocsBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
