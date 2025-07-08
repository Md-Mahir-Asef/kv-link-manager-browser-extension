import logo from "../assets/logo.png";

function Header() {
  return (
    <div
      className="flex flex-row cursor-pointer p-4 pb-0"
      onClick={() => window.location.reload()}
    >
      {" "}
      <img src={logo} alt="Logo" width={50} height={50} />
      <h1 className="font-[550] text-sm pr-7 pt-4">KV Link Manager</h1>{" "}
    </div>
  );
}

export default Header;
