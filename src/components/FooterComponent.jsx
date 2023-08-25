import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaDhl,
} from "react-icons/fa";
import { PiHandCoinsLight } from "react-icons/pi";
import { BiLogoMastercard, BiLogoVisa } from "react-icons/bi";
import payLogo from "../assets/images/pay-logo.png";
import logisticsLogo from "../assets/images/logistics-logo.png";
import foodLogo from "../assets/images/food-logo.png";

const FooterComponent = () => {
  return (
    <div className="w-full flex flex-col py-7 text-xs px-5 bg-[#535357] text-white justify-between items-between">
      <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col ">
          <h4 className="uppercase font-bold pb-4">Need Help?</h4>
          <a className="pb-1" href="">
            Chat with us
          </a>
          <a className="pb-1" href="">
            Help Center
          </a>
          <a className="pb-1" href="">
            Contact Us
          </a>
          <h4 className="uppercase font-bold py-4">Useful Links</h4>
          <a href="" className="pb-1">
            How to shop on Jumia
          </a>
          <a href="" className="pb-1">
            Delivery options and timelines
          </a>
          <a href="" className="pb-1">
            How to return a product on Jumia
          </a>
          <a href="" className="pb-1">
            Corporate and bulk purchases
          </a>
          <a href="" className="pb-1">
            Report a Product
          </a>
          <a href="" className="pb-1">
            Ship your package anywhere in Nigeria
          </a>
          <a href="" className="pb-1">
            Dispute Resolution Policy
          </a>
          <a href="" className="pb-1">
            Return Policy
          </a>
        </div>
        <div className="flex flex-col">
          <h4 className="uppercase font-bold pb-4">About Jumia</h4>
          <a className="pb-1" href="">
            About us
          </a>
          <a className="pb-1" href="">
            Jumia Careers
          </a>
          <a className="pb-1" href="">
            Jumia Express
          </a>
          <a className="pb-1" href="">
            Terms and Conditions
          </a>
          <a className="pb-1" href="">
            Privacy Notice
          </a>
          <a className="pb-1" href="">
            Jumia Store Credit Terms & Conditions
          </a>
          <a className="pb-1" href="">
            Cookie Notice
          </a>
          <a className="pb-1" href="">
            Jumia Global
          </a>
          <a className="pb-1" href="">
            Official Stores
          </a>
          <a href="" className="pb-1">
            Flash Sales
          </a>
        </div>
        <div className="flex flex-col">
          <h4 className="uppercase font-bold pb-4">Make Money with Jumia</h4>
          <a className="pb-1" href="">
            Sell on Jumia
          </a>
          <a className="pb-1" href="">
            Vendor Hiub
          </a>
          <a className="pb-1" href="">
            Become a Sales Consultant
          </a>
          <a className="pb-1" href="">
            Become a Logistics Service Partner
          </a>
          <a className="pb-1" href="">
            Join the Jumia DA Academy
          </a>
          <a className="pb-1" href="">
            Join the Jumia KOL Program
          </a>
        </div>
        <div>
          <h4 className="uppercase font-bold pb-4">Jumia International</h4>
          <div className="grid gap-2 grid-cols-2">
            <div className="flex flex-col">
              <a className="pb-1" href="">
                Algeria
              </a>
              <a className="pb-1" href="">
                Egypt
              </a>
              <a className="pb-1" href="">
                Ghana
              </a>
              <a className="pb-1" href="">
                Ivory Coast
              </a>
              <a className="pb-1" href="">
                Kenya
              </a>
            </div>
            <div className="flex flex-col">
              <a className="pb-1" href="">
                Morocco
              </a>
              <a className="pb-1" href="">
                Senegal
              </a>
              <a className="pb-1" href="">
                Tunisia
              </a>
              <a className="pb-1" href="">
                Uganda
              </a>
              <a className="pb-1" href="">
                Zando
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Logos and all */}
      <div className="grid grid-cols-4 gap-6 pt-6">
        <div className="flex flex-col">
          <h4 className="uppercase font-bold pb-4">Join us on</h4>
          <div className="flex justify-around items-center h-12">
            <FaFacebookF
              className="cursor-pointer hover:text-orange-400"
              size={20}
            />
            <FaYoutube
              className="cursor-pointer hover:text-orange-400"
              size={20}
            />
            <FaInstagram
              className="cursor-pointer hover:text-orange-400"
              size={20}
            />
            <FaTwitter
              className="cursor-pointer hover:text-orange-400"
              size={20}
            />
          </div>
        </div>
        <div className="flex flex-col col-span-3">
          <h4 className="uppercase font-bold pb-4">
            PAYMENT METHODS & DELIVERY PARTNERS
          </h4>

          <div className="flex items-center h-12">
            <PiHandCoinsLight
              className="mx-2 cursor-pointer hover:text-orange-400"
              size={30}
            />
            <BiLogoMastercard
              className="mx-2 cursor-pointer hover:text-orange-400"
              size={30}
            />
            <BiLogoVisa
              className="mx-2 cursor-pointer hover:text-orange-400"
              size={40}
            />
            <FaDhl
              className="mx-2 cursor-pointer hover:text-orange-400"
              size={50}
            />
          </div>
        </div>
      </div>
      <hr className="border-gray-500 mt-10 mb-2" />
      <div className="flex justify-center items-center">
        <img
          src={payLogo}
          className="px-1 w-[60px] filter grayscale hover:filter-none cursor-pointer"
          alt=""
        />
        <img
          src={foodLogo}
          className="px-1 w-[60px] filter grayscale  hover:filter-none cursor-pointer"
          alt=""
        />
        <img
          src={logisticsLogo}
          className="px-1 w-[80px] filter grayscale hover:filter-none cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
};

export default FooterComponent;
