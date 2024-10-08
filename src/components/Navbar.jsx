import logo from '../assets/apex_webdev_logo.png';

import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-1/2" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a target="_blank" href="https://github.com/apex-webdev">
          <FaGithub className="cursor-pointer hover:opacity-50" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nowshad-islam-fweb-dev"
        >
          <FaLinkedin className="cursor-pointer hover:opacity-50" />
        </a>
        <a target="_blank" href="#">
          <FaSquareTwitter className="cursor-pointer hover:opacity-50" />
        </a>
        <a target="_blank" href="https://www.instagram.com/____sha_won___/">
          <FaInstagram className="cursor-pointer hover:opacity-50" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
