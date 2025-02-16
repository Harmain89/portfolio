import { harmainLogo } from "../assets";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-24" src={harmainLogo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/harmainrizwan/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Harmain89" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        {/* <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaSquareTwitter />
        </a> */}
      </div>
    </nav>
  );
}

export default Navbar;
