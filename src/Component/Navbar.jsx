import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-white  w-11/12     lg:flex-row flex-col  lg:justify-between gap-5  ">
      <h3 className="text-3xl font-semibold pl-7 font-black ">
        CS — Ticket System
      </h3>
      <nav>
        <ul className="flex gap-3.5 lg:gap-7 lg:flex-row flex-col items-start ml-5 ">
          <li>
            <a className="text-black" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-black" href="#">
              FAQ
            </a>
          </li>
          <li>
            <a className="text-black" href="#">
              Changelog
            </a>
          </li>
          <li>
            <a className="text-black" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="text-black" href="#">
              Download
            </a>
          </li>
          <li>
            <a className="text-black" href="#">
              Contact
            </a>
          </li>
          <li>
            <button
              className="text-white w-25.25  lg:w-36.25 h-8 rounded-lg"
              style={{
                background:
                  "linear-gradient(125.07deg, rgba(99, 46, 227, 1),rgba(159, 98, 242, 1) 100%)",
              }}
            >
              <span>+</span> New Ticket
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
