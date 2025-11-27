import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#282531] text-[#FFFFFF] text-base font-normal pt-12 pb-7 poppins">
      <div className="max-w-7xl mx-auto flex">
        <div className="max-w-[364px] mr-32">
          <p className=" text-gray-300">
            Millions of people of all ages and from around the world are
            improving their lives with us
          </p>
        </div>

        <div className=" w-full flex justify-between">
          <div>
            <h3 className="font-semibold text-sm mb-3">Course</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li className="hover:underline underline-offset-2 cursor-pointer">
                Graphic Design
              </li>
              <li className="hover:underline underline-offset-2 cursor-pointer">
                Web Development
              </li>
              <li className="hover:underline underline-offset-2 cursor-pointer">
                Business
              </li>
              <li className="hover:underline underline-offset-2 cursor-pointer">
                Marketing
              </li>
              <li className="hover:underline underline-offset-2 cursor-pointer">
                Engineering
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Terms</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li className="hover:underline underline-offset-2 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:underline underline-offset-2 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:underline underline-offset-2 cursor-pointer">
                Refund Policy
              </li>
              <li className="hover:underline underline-offset-2 cursor-pointer">
                Support
              </li>
              <li className="hover:underline underline-offset-2 cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Useful Links</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li className="hover:underline underline-offset-2 cursor-pointer">
                About Us
              </li>
              <li className="hover:underline underline-offset-2 cursor-pointer">
                Contact
              </li>
              <li className="hover:underline underline-offset-2 cursor-pointer">
                Blog
              </li>
              <li className="hover:underline underline-offset-2 cursor-pointer">
                Affiliate
              </li>
              <li className="hover:underline underline-offset-2 cursor-pointer">
                Careers
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-[#CDCDCD] text-xs mt-10">
        Copyright © 2020 E-School.com
      </div>
    </footer>
  );
};

export default Footer;
