import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiBars3BottomLeft, HiBars3BottomRight } from "react-icons/hi2";

function DocsNavBar() {
  const [isOpen, setIsOpen] = useState(false); // Track the sidebar state
  const [isActive, setIsActive] = useState(null); // Track the status of the navlinks

  // Toggle function to open/close sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Toggle function to open/close the navlinks
  const toggleNavLinks = (index) => {
    setIsActive(isActive === index ? null : index); // Toggle between open and close
  };

  // Define the links and sublinks
  const menuItems = [
    {
      name: "Introduction",
      path: "/",
    },
    {
      name: "Getting started",
      path: "/gettingStarted",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Customers",
      path: "/customers",
      subLinks: [
        {
          name: "Manage Customers",
        },
        {
          name: "Customer Ledger",
          path: "/customerLedger",
        },
      ],
    },
    {
      name: "Supplies",
      path: "/supplies",
      subLinks: [
        {
          name: "Manage suppliers",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="text-slate-800 dark:text-white fixed top-4 left-0 z-50 md:hidden"
      >
        <HiBars3BottomLeft className={`w-14 ${isOpen ? "hidden" : "block"}`} />
        <HiBars3BottomRight className={`w-14 ${isOpen ? "block" : "hidden"}`} />
      </button>

      {/* Background overlay when the sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
          onClick={toggleSidebar} // Close the sidebar when the background is clicked
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full 
              ${isOpen ? "block" : "hidden"}  md:block
              md:w-64 text-slate-800 dark:text-slate-300 p-2 flex-col z-50 dark:bg-slate-950`} // Adjust z-index to ensure it stays above the overlay
      >
        <nav className={`block ${isOpen ? "block" : "hidden"} md:block mt-8`}>
          <ul className="flex flex-col">
            {menuItems.map((item, index) => (
              <li key={index} className="p-2">
                <Link
                  className="py-4 hover:underline"
                  to={item.subLinks ? "#" : item.path} // Prevent path navigation if there are sublinks
                  onClick={(e) => {
                    // If the item has sublinks, toggle visibility
                    if (item.subLinks) {
                      e.preventDefault(); // Prevent default navigation
                      toggleNavLinks(index); // Toggle the sublinks visibility
                    }
                  }}
                >
                  {item.name}
                </Link>

                {/* Render sublinks if the parent is active */}
                {item.subLinks && isActive === index && (
                  <ul className="flex flex-col pl-6 gap-3 my-4">
                    {item.subLinks.map((subItem, subIndex) => (
                      <li className="hover:underline" key={subIndex}>
                        <Link className="" to={subItem.path || "#"}>
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default DocsNavBar;
