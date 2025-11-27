import pay from "../assets/pay.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className="flex justify-between items-center py-5 px-5 max-w-[1200px] m-auto relative">

        <nav className="flex gap-10 items-center">
          <NavLink to={"/"}>
            <img src={pay} alt="" />
          </NavLink>


          <NavLink className="hidden sm:block text-[#36536B]" to={"/pricing"}>
            Pricing
          </NavLink>
          <NavLink className="hidden sm:block text-[#36536B]" to={"/about"}>
            About
          </NavLink>
          <NavLink className="hidden sm:block text-[#36536B]" to={"/contact"}>
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
          {isOpen ? "✖" : "☰"}
        </button>
      </header>

      {isOpen && (
        <div className="sm:hidden bg-[#1B262F] h-[50%] shadow p-5 flex flex-col gap-8 text-center w-[70%] z-10 rounded-xl absolute top-20 right-0">
          <NavLink
            className="text-[white]"
            to={"/pricing"}
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </NavLink>
          <NavLink
            className="text-[white]"
            to={"/about"}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className="text-[white]"
            to={"/contact"}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            className="bg-[#BA4270] text-white py-2 px-4 rounded-3xl hover:bg-[#DA6D97] duration-300 inline-block"
            to={"/contact"}
            onClick={() => setIsOpen(false)}
          >
            Schedule a Demo
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Header;
