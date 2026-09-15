import linkedin from "../assets/images/linkedin.png";
import medium from "../assets/images/medium.png";
import twitter from "../assets/images/twitter.png";
import gmail from "../assets/images/gmail.png";
import { motion } from "motion/react";
import Sidebar from "./sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className=" h-25 ">
      {/* Sidebar */}
      <Sidebar />
      <div className=" max-w-341.5 m-auto flex items-center justify-between h-full">
        <motion.span
          className="font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lana Dev
        </motion.span>
        {/* Social */}
        <div className=" flex gap-5">
          <a href="" className="">
            <img src={linkedin} alt="" className=" w-4.5 h-4.5" />
          </a>
          <a href="" className="">
            <img src={twitter} alt="" className="w-4.5 h-4.5" />
          </a>
          <a href="" className="">
            <img src={medium} alt="" className="w-4.5 h-4.5" />
          </a>
          <a href="" className="">
            <img src={gmail} alt="" className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
