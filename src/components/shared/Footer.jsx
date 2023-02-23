import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-[#232F3E] py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 place-items-center items-start px-6 gap-5">
            <div className="w-full">
              <h3 to="/" className="text-white text-base font-semibold mb-3">
                Get to Know Us
              </h3>
              <ul className="flex flex-col gap-2 font-radio-canada">
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Careers
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Blog
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  About Amazon
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Investor Relations
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Amazon Devices
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Amazon Science
                </Link>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="font-titleFont text-white text-base font-semibold mb-3">
                Make Money with Us
              </h3>
              <ul className="flex flex-col gap-2 font-radio-canada">
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Sell products on Amazon
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Sell on Amazon Business
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Sell apps on Amazon
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Become an Affiliate
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Advertise Your Products
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Sell Product with Us
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Host an Amazon Hub
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  See More Make Money with Us
                </Link>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="font-titleFont text-white text-base font-semibold mb-3">
                Amazon Payment Products
              </h3>
              <ul className="flex flex-col gap-2 font-radio-canada">
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Amazon Business Card
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Shop with Points
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Reload Your Balance
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Amazon Currency Converter
                </Link>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="font-titleFont text-white text-base font-semibold mb-3">
                Let Us Help You
              </h3>
              <ul className="flex flex-col gap-2 font-radio-canada">
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Amazon and COVID-19
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Your Account
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Your Orders
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Shipping Rates &amp; Policies
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Returns &amp; Replacements
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Manage Your Content and Devices
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  Amazon Assistant
                </Link>
                <Link
                  to="/"
                  className="hover:underline text-[14px] text-[#ddd]"
                >
                  FAQ &amp; Help
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-secondary py-8">
        <div className="max-w-5xl mx-auto">
          <div className="w-full grid grid-cols-3 md:grid-cols-5 lgl:grid-cols-7 gap-3 px-6 place-content-center items-start text-gray-400">
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Amazon Music
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Stream millions of songs
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Amazon Advertising
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Find, attract, and engage customers
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Amazon Drive
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Cloud storage from Amazon
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                6pm
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Score deals on fashion brands
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                AbeBooks
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Books, art &amp; collectibles
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                ACX
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Audio book Publishing Made Easy
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Sell on Amazon
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Start a Selling Account
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Amazon Business
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Everything For Your Business
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                AmazonGlobal
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Ship Orders Internationally
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Home Services
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Experienced Pros appiness Guarantee
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Amazon Ignite
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Sell your original Digital Educational Resources
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Amazon Web Services
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Scalable Cloud Computing Services
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Audible
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Listen to Books &amp; Original Audio Performances
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Book Depository
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Books With Free Delivery Worldwide
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Box Office Mojo
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Find Movie Box Office Data
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                ComiXology
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Thousands of Digital Comics
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                DPReview
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Digital Photography
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Fabric
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Sewing, Quilting &amp; Knitting
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Goodreads
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Book reviews &amp; recommendations
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                IMDb
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Movies, TV &amp; Celebrities
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                {" "}
                IMDbPro
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Get Info Entertainment Professionals Need
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Kindle Direct Publishing
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Indie Digital &amp; Print Publishing Made Easy
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Prime Video Direct
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Video Distribution Made Easy
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Shopbop
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Designer Fashion Brands
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Woot!
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Deals and Shenanigans
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Zappos
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Shoes &amp; Clothing
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Ring
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Smart Home Security Systems
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                eero WiFi
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Stream 4K Video in Every Room
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Blink
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Smart Security for Every Home
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Neighbors App
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Real-Time Crime &amp; Safety Alerts
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                Amazon Subscription Boxes
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Top subscription boxes - right to your doo
              </Link>
            </div>
            <div className="group cursor-pointer leading-[14px]">
              <Link
                to="/"
                className="text-[13px] font-medium text-[#ddd] group-hover:underline w-3/4"
              >
                PillPack
              </Link>
              <br />
              <Link
                to="/"
                className="text-[12px] group-hover:underline text-[#999] w-3/5"
              >
                Pharmacy Simplified
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-4">
          <div>
            <ul className="text-gray-300 text-sm gap-2 md:gap-4 py-2 mt-4 flex">
              <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
                Conditions of Use
              </li>
              <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
                Privacy Notice
              </li>
              <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
                Your Ads Privacy Choices
              </li>
            </ul>
          </div>
          <div>
            <p className="font-normal text-[11px] text-[#DDD] leading-3">
              © 1996-{new Date().getFullYear()},
              <Link to="/" className="ml-1">
                Amazon.com
              </Link>
              , Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
