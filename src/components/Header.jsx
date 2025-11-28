import pay from "../assets/pay.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="flex justify-between items-center py-5 px-5 max-w-[1200px] m-auto relative">
        <nav className="flex gap-10 items-center">
          <NavLink to={"/"}>
            <img src={pay} alt="" />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `hidden sm:block ${
                isActive ? "text-[#BA4270] underline" : "text-[#36536B]"
              }`
            }
            to={"/pricing"}
          >
            Pricing
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `hidden sm:block ${
                isActive ? "text-[#BA4270] underline" : "text-[#36536B]"
              }`
            }
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hidden sm:block ${
                isActive ? "text-[#BA4270] underline" : "text-[#36536B]"
              }`
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
        </nav>

        <NavLink
          className="hidden sm:block bg-[#BA4270] text-white py-2 px-4 rounded-3xl shadow hover:bg-[#DA6D97] duration-300"
          to={"/contact"}
        >
          Schedule a Demo
        </NavLink>

        <button
          className="sm:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "" : "☰"}
        </button>
      </header>

      <div
        className={`
    fixed top-0 right-0 h-screen w-[80%] bg-[#1B262F] shadow p-5 z-10
    flex flex-col gap-5 text-center rounded-b-xl sm:hidden
    transform transition-transform duration-300 ease-in-out pt-20
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path
              fillRule="evenodd"
              d="M18.3 5.71a1 1 0 0 0-1.41-1.42L12 9.17 7.11 4.29A1 1 0 1 0 5.7 5.7l4.88 4.88-4.88 4.88a1 1 0 1 0 1.41 1.41L12 11.41l4.88 4.88a1 1 0 0 0 1.41-1.41L13.41 10.6l4.88-4.88Z"
            />
          </svg>
        </button>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white bg-[#120e3f] border-2 border-[#000000] rounded-2xl py-2"
              : "text-white border border-black rounded-2xl py-2"
          }
          to="/pricing"
          onClick={() => setIsOpen(false)}
        >
          Pricing
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white bg-[#120e3f] border-2 border-[#000000] rounded-2xl py-2"
              : "text-white border border-black rounded-2xl py-2"
          }
          to="/about"
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white bg-[#120e3f] border-2 border-[#000000] rounded-2xl py-2"
              : "text-white border border-black rounded-2xl py-2"
          }
          to="/contact"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>

        <NavLink
          className="bg-[#BA4270] text-white py-2 px-4 rounded-3xl hover:bg-[#DA6D97] duration-300 inline-block border border-black"
          to="/contact"
          onClick={() => setIsOpen(false)}
        >
          Schedule a Demo
        </NavLink>
      </div>
    </>
  );
};

export default Header;
