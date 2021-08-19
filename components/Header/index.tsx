import { Button, Link, Row, Text, useClickAway } from "@geist-ui/react";
import NextLink from "next/link";
// import Image from "next/image";
import { useState, useRef } from "react";
import { Popover } from "@geist-ui/react";
import HamburgerMenu from "react-hamburger-menu";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const popoverRef = useRef();
  useClickAway(popoverRef, () => setIsVisible(false));
  const menuContent = () => {
    return (
      <div className="w-full" ref={popoverRef}>
        <Popover.Item title className="-my-2">
          <p className="!px-6 text-lg font-semibold">Folio</p>
        </Popover.Item>
        <div className="hover:!bg-blue-100">
          <Link href="/login" className="">
            <Popover.Item className="-my-1">
              <p className="text-blue-600 !px-6">Sign In</p>
            </Popover.Item>
          </Link>
        </div>
        <Popover.Item line />
        <div className="hover:!bg-blue-100">
          <Link href="/login" className="">
            <Popover.Item className="-my-1">
              <p className="text-blue-600 !px-6">Sign Up</p>
            </Popover.Item>
          </Link>
        </div>
        <Popover.Item line />
        <div className="hover:!bg-blue-100">
          <NextLink href="/with">
            <Link href="/login" className="">
              <Popover.Item className="-my-1">
                <p className="text-blue-600 !px-6">Guides</p>
              </Popover.Item>
            </Link>
          </NextLink>
        </div>
        <Popover.Item line />
        <div className="hover:!bg-blue-100">
          <NextLink href="/docs/">
            <Link href="/login" className="">
              <Popover.Item className="-my-1">
                <p className="text-blue-600 !px-6">Docs</p>
              </Popover.Item>
            </Link>
          </NextLink>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-2 bg-gray-50 fixed top-0 left-0">
      <div className="flex items-center justify-between mx-auto max-w-5xl py-1">
        <div>
          <h1 className="text-2xl my-0 font-semibold">Folio</h1>
        </div>
        <div className="gap-x-3 flex items-center font-medium">
          <NextLink href="/api/auth/login">
            <div className="py-2 px-4 mx-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-md">
              Signup
            </div>
          </NextLink>
          <NextLink href="/api/auth/login">
            <div className="py-2 px-4 mx-2 text-blue-500 hover:text-blue-600 cursor-pointer rounded-md">
              Login
            </div>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
