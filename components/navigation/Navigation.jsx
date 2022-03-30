import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/img/LOGO.png";
import bannerShark from "./../../public/img/banner-shark.png";

const Navigation = () => {
  return (
    <nav className="nav-section w-full bg-no-repeat bg-cover">
      <div className="w-9/12 mx-auto pt-5 ">
        <div className="lg:grid lg:grid-cols-4">
          <div className="">
            <Image className="w-5/12" src={logo} alt="brand logo" />
          </div>
          <div className="col-span-2 ">
            <ul className="flex float-right space-x-10 mt-2">
              <li>
                <Link href="/">
                  <a className="text-lg font-base text-white text-center">
                    Discord
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-lg font-base text-white text-center">
                    Twitter
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-lg font-base text-white text-center">
                    Instagram
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto mt-1">
            <button className="text-base bg-lime-500 text-white rounded-lg px-12 py-2 shadow-lg">
              Member
            </button>
          </div>
        </div>
        {/* <!-- ==============BANNNER=========== --> */}
        <div className="lg:grid lg:grid-cols-2 gap-4 py-24 justify-center items-center ">
          <div className="banner-title">
            <h1 className="text-[5rem] font-[GROBOLD] leading-[7rem] tracking-wide text-white font-black">
              Wavy Sharks Society
            </h1>
            <p className="text-white py-6 text-base">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque quo
              minus id quod maxime placeat facere possimus
            </p>
            <button className="text-blue-800 bg-white py-2 px-10 rounded-lg">
              Enter The Society
            </button>
          </div>
          <div>
            <div className="mt-10 sm:mt-0 bannerShark">
              <Image src={bannerShark} alt="banner Shark" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
