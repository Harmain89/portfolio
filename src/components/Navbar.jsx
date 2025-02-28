import { harmainLogo } from "../assets";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import mypdf from '../assets/harmain rizwan.pdf';

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-24" src={harmainLogo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">

        <div className="flex gap-2 mt-4 mb-3 items-end justify-start">
          <a
            href={mypdf}
            download="harmain-rizwan.pdf"
            className="inline-flex gap-2 items-center px-3 py-1 border-1 border-primary-container border rounded-md font-semibold text-xs text-primary-100 uppercase tracking-wide hover:bg-primary-600/40 active:bg-primary-800/80 focus:outline-none transition ease-in-out duration-150"
          >
            <FaFileAlt size={18} />
            Resume
          </a>
        </div>

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
