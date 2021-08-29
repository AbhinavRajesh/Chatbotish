import NextLink from "next/link";
import Image from "next/image";

import logo from "@public/Logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full py-2 bg-gray-50 fixed top-0 left-0 px-2 z-50">
      <div className="flex items-center justify-between mx-auto max-w-5xl py-1">
        <Link href="/">
          <a className="flex items-center">
            <Image src={logo} alt="C" height="40" width="40" />
            <h1 className="text-black text-2xl my-0 font-semibold ml-2">
              Chatbotish
            </h1>
          </a>
        </Link>
        <div className="lg:gap-x-3 flex items-center font-medium">
          <NextLink href="/api/auth/login">
            <div className="py-2 px-4 md:mx-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-md">
              Signup
            </div>
          </NextLink>
          <NextLink href="/api/auth/login">
            <div className="py-2 px-4 md:mx-2 text-blue-500 hover:text-blue-600 cursor-pointer rounded-md">
              Login
            </div>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
