import { kevinRushLogo } from "../assets";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="mb—20 flex items-center justify-between py—6">
      <div className="flex flex-shrink-0 items—center">
        <img className="mx-2 w-10" src={kevinRushLogo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareTwitter />
      </div>
    </nav>
  );
}

export default Navbar;
