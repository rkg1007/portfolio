import Image from "next/image";
import profilePic from "../public/rohit.jpeg";
import { HiDownload } from "react-icons/hi";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { GoLocation } from "react-icons/go";

const SideBar = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mx-auto mt-5">
        <Image
          className="w-10 h-10 rounded-full"
          src={profilePic}
          alt="profile pic"
          width={100}
          height={100}
        />
      </div>
      <h3 className="mx-auto text-3xl font-medium my-3">
        <span>Rohit</span>
      </h3>
      <p className="py-2 bg-gray-200 rounded-full m-2 w-5/6 text-center">
        Software Developer Intern
      </p>
      <div className="py-2 bg-gray-200 rounded-full flex items-center justify-center w-5/6 hover:text-lg">
        <HiDownload />
        <p className="mx-1">Download Resume</p>
      </div>
      <div className="flex justify-around w-5/6 m-5 text-xl text-green">
        <a
          className="hover:text-2xl"
          href="https://github.com/rkg1007"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          className="hover:text-2xl"
          href="https://linkedin.com/in/rkg1007"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="hover:text-2xl"
          href="https://leetcode.com/rkg1007"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode />
        </a>
      </div>
      <div className="w-full bg-gray-200 rounded-lg flex flex-col items-center py-3 px-5">
        <div className="flex items-center mt-1">
          <a>
            <GoLocation />
          </a>
          <p className="mx-1">Hisar, Haryana</p>
        </div>
        <div className="flex items-center mt-1">
          <a>
            <AiFillMail />
          </a>
          <p className="mx-1">rkg10072000@gmail.com</p>
        </div>
        <div className="flex items-center my-1">
          <a>
            <AiFillPhone />
          </a>
          <p className="mx-1">+91-8607474239</p>
        </div>
      </div>
      <button
        className="w-5/6 bg-gradient-to-r from-green to-blue-400 my-5 rounded-full p-2 hover:text-lg"
        onClick={() => window.open("mailto:rkg10072000@gmail.com")}
      >
        Email me
      </button>
    </div>
  );
};

export default SideBar;
