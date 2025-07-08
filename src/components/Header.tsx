import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <Link to={"/"} className="flex flex-row">
      {" "}
      <img src={logo} alt="Logo" width={50} height={50} />
      <h1 className="font-[550] text-sm pr-7 pt-4">KV Link Manager</h1>{" "}
    </Link>
  );
}

export default Header;
