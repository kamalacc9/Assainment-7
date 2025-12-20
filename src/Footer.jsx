import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-5 mx-auto py-10 ">
        {/* 1st div */}
        <div className="pl-20 grid  gap-3">
          <h2 className="text-2xl font-bold">CS — Ticket System</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* 2nd div */}
        <div className="pl-20   ">
          <h1 className="pb-3 font-bold">Company</h1>
          <ul>
            <li className="pb-3">About Us</li>
            <li className="pb-3">Our Mission</li>
            <li className="pb-3">Contact Saled</li>
          </ul>
        </div>

        {/* 3rd div */}
        <div className="pl-20   ">
          <h2 className="pb-3 font-bold">Services</h2>
          <ul>
            <li className="pb-3">Products & Services</li>
            <li className="pb-3">Customer Stories</li>
            <li className="pb-3"></li>Download Apps
          </ul>
        </div>
        {/* 4th div */}
        <div className="pl-20   ">
          <h2 className="pb-3 font-bold">Information</h2>
          <ul>
            <li className="pb-3">Privacy Policy</li>
            <li className="pb-3">Terms & Conditions</li>
            <li className="pb-3">Join Us</li>
          </ul>
        </div>
        {/* 5th div */}
        <div className="pl-20   ">
          <h2 className="pb-3 font-bold">Social Links</h2>
          <ul>
            <li className="pb-3">
              <i class="fa-brands fa-x-twitter"></i>
              <span>@CS — Ticket System</span>
            </li>
            <li className="pb-3">
              <span>
                <i class="fa-brands fa-linkedin"></i>
              </span>
              @CS — Ticket System
            </li>
            <li className="pb-3">
              {" "}
              <span>
                <i class="fa-brands fa-facebook"></i>
              </span>
              @CS — Ticket System
            </li>
            <li className="pb-3">
              {" "}
              <span>
                <i class="fa-solid fa-message"></i>
              </span>
              support@cst.com
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-15 px-5  border-t-2 text-center items-center border-gray-900">
        <p className="py-5">© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
