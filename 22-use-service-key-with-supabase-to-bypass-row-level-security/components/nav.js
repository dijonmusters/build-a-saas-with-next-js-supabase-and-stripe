import Link from "next/link";
import { useUser } from "../context/user";

const Nav = () => {
  const { user } = useUser();

  return (
    <nav className="flex py-4 px-6 border-b border-gray-200">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/pricing">
        <a className="ml-2">Pricing</a>
      </Link>
      <Link href={user ? "/logout" : "/login"}>
        <a className="ml-auto">{user ? "Logout" : "Login"}</a>
      </Link>
    </nav>
  );
};

export default Nav;
