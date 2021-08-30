import Image from "next/image";
import Link from "next/link";

import logo from "@public/Logo.svg";

const Header = ({ auth0user }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 min-h-[6vh]">
      <h2 className="font-semibold text-2xl w-full flex-[2]">
        <Link href="/dashboard">
          <a className="flex items-center">
            <Image src={logo} alt="C" height="40" width="40" />
            <h1 className="hidden md:flex text-black text-2xl my-0 font-semibold ml-2">
              Chatbotish
            </h1>
          </a>
        </Link>
      </h2>
      <nav className="flex-1 flex gap-2 justify-between w-full items-center">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/new">New</Link>
        <Link href="/api/auth/logout">
          <a className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded text-white">
            Logout
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
