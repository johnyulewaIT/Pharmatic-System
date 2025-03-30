import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import { HiSun } from "react-icons/hi2";
import { HiMiniMoon } from "react-icons/hi2";

function NavBar() {
  // State to track if dark theme is enabled
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle the theme
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Apply dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex fixed mt-3 top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] bg-slate-50 dark:bg-slate-900 z-50 shadow-md mx-auto px-8 items-center justify-between flex-wrap p-4 border border-slate-400 dark:border-slate-700 rounded-lg">
      <div className="flex flex-shrink-0 text-white mr-6 lg:mr-72">
        <a className="flex title-font font-medium items-center text-white mb-4">
          Logo
        </a>
      </div>

      <div
        className={`w-full block text-white flex-grow lg:flex flex-wrap 
          lg:items-center lg:w-auto
          ${isOpen ? "block" : "hidden"}`}
      >
        <div className="text-md lg:flex-grow">
          {["Home", "Features", "Highlights", "Pricing", "Contact"].map(
            (item, id) => (
              <ScrollLink
                className="block text-slate-800 dark:text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 cursor-pointer px-4 hover:text-green-500"
                key={id}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
              >
                {item}
              </ScrollLink>
            )
          )}
        </div>
      </div>

      <div className="flex gap-2 ml-auto">
        <div className="flex gap-3">
          <RouterLink
            to="/docs"
            className="hidden lg:inline-flex cursor-pointer text-green-500 border-0 px-3 py-2 rounded-md"
          >
            Docs
          </RouterLink>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex px-3 py-3 rounded text-slate-800 dark:text-white hover:text-slate-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`text-slate-400 h-5 w-5 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="text-white">
          {isDarkTheme ? (
            <HiSun className="w-6 h-6" />
          ) : (
            <HiMiniMoon className="w-6 h-6 text-slate-900" />
          )}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
