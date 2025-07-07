import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to={"/"}>
      {" "}
      <h1 className="font-[550] text-sm px-7 pt-4">KV Link Manager</h1>{" "}
    </Link>
  );
}

export default Header;
