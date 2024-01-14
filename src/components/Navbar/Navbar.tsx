import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";

type Props = {};

const Navbar = (props: Props) => {
  const headerStyle = {
    button: ` flex justify-between items-center text-black px-2 py-2 rounded-sm hover:bg-gray-100 border border-black mx-2 text-base font-[500] transation-all duration-500 ease-in-out transform}`,
  };
  return (
    <div>
      {" "}
      <header className="flex justify-between items-center p-5 bg-white shadow-md md:px-10 z-20">
        <Link href="https://niftybookkeepers.com/">
          <div>
            <Image
              src="/assets/Logo/Logo.png"
              alt="Company Logo"
              width={150}
              height={60}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
        </Link>

        <div className={`flex items-center justify-center`}>
          <Link href={`tel:${948752948574}`} target="_blank">
            <button className={headerStyle.button}>
              <FiPhone className="w-7 h-7 mx-1 " />
              <p className="hidden lg:block">{983475347894}</p>
            </button>
          </Link>

          <Link href={`mailto:${"lkgjdkjghdsjkfads"}`} target="_blank">
            <button className={headerStyle.button}>
              <MdMailOutline className="w-7 h-7 mx-1" />
              <p className="hidden lg:block">info@niftybookkeepers.com</p>
            </button>
          </Link>
          <Link
            href="https://www.linkedin.com/company/nifty-bookkeepers-llc/"
            target="_blank"
          >
            <button className={headerStyle.button}>
              <CiInstagram className="w-7 h-7 mx-1" />
              <p className="hidden lg:block">LinkedIn</p>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
