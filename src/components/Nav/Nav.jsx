import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div>
      <header className="flex logo border-b border-black  py-3 px-4 sm:px-10 bg-orange-400 font-[sans-serif] min-h-[65px] tracking-wide relative z-50  items-center">
        <div className="flex flex-wrap justify-between items-center gap-4 max-w-screen-xl mx-auto w-full">
          <div>
            <Link to="" className="max-sm:hidden ">
              <h4 className="text-xl font-mono font-bold text-black-400">
                Kareem Shalan
              </h4>
            </Link>
          </div>

          <div
            className={`${
              isMenuOpen ? "max-lg:block" : "max-lg:hidden"
            } lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:w-full max-lg:h-full max-lg:p-6 max-lg:shadow-md max-lg:overflow-hidden z-50 `}
          >
            <ul className="lg:flex lg:items-center lg: lg:ml-40 lg:gap-x-5 max-lg:space-y-3 ">
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <NavLink
                  to=""
                  className="lg:hover:text-[#007bff] text-[#007bff]  block text-[15px] "
                >
                  Home
                </NavLink>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <NavLink
                  to="About"
                  className="lg:hover:text-[#007bff] text-gray-800 block text-[15px]"
                >
                  About
                </NavLink>
              </li>

              <li className="max-lg:border-b max-lg:py-3 px-3">
                <NavLink
                  to="Portfolio"
                  className="lg:hover:text-[#007bff] text-gray-800 block text-[15px]"
                >
                  Portfolio
                </NavLink>
              </li>

              <li className="max-lg:border-b max-lg:py-3 px-3">
                <NavLink
                  to="Contact"
                  className="lg:hover:text-[#007bff] text-gray-800 block text-[15px]"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 ml-auto ">
            <button
              id="toggleOpen"
              onClick={toggleMenu}
              className="lg:hidden text-white  "
            >
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="lg:hidden bg-transparent p-6 shadow-md fixed top-0 left-0 w-full h-full z-50"
          onClick={toggleMenu}
        >
          <div
            className="absolute top-2 bg-white rounded-full right-2  p-2 cursor-pointer"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 fill-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 7.586l4.293-4.293a1 1 0 111.414 1.414L11.414 9l4.293 4.293a1 1 0 11-1.414 1.414L10 10.414l-4.293 4.293a1 1 0 11-1.414-1.414L8.586 9 4.293 4.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <ul onClick={(e) => e.stopPropagation()} className="items-center  space-x-4 m-auto sm:w-24 sm:h-24 sm:flex sm:space-x-4 absolute top-[3%]
          min-[320px]:w-24
          min-[320px]:h-24
          min-[320px]:flex
          min-[320px]:space-x-4
          ">
            <li >
              <NavLink to="" className="block py-3 text-lg text-gray-800 rounded-3xl bg-slate-500 ">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="About" className="block py-3 text-lg text-gray-800 rounded-3xl bg-slate-500">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Portfolio"
                className="block py-3 text-lg text-gray-800 rounded-3xl bg-slate-500"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Contact"
                className="block py-3 text-lg text-gray-800 rounded-3xl bg-slate-500"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
