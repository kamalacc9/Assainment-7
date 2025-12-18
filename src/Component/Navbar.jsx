import React from "react";

const Navbar = () => {
  return (
    <div>
      <h3 className="text-3xl font-semibold font-black">CS — Ticket System</h3>
      <nav>
        <ul className="flex gap-7">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Changelog</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Download</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            {" "}
            <button>
              <span>+</span> New Ticket
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
