import Link from "next/link";

const Header = ({ auth0user }) => {
  return (
    <div className="flex items-center justify-between px-16 py-3 min-h-[6vh]">
      <h2 className="font-semibold text-2xl w-full flex-[2]">Chatbotish</h2>
      <nav className="flex-1 flex justify-between w-full items-center">
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
