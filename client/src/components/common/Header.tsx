import { motion } from "framer-motion";
import { CustomModal } from "../modals/modal";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
export function Header() {
  return (
    <motion.div className="flex justify-between h-16 mx-auto w-[75%] sticky top-0 left-0 z-10">
      <motion.div
        initial={{ opacity: 0, translateX: 100, color: "wheat" }}
        animate={{ opacity: 1, translateX: 0, color: "white" }}
        className="flex items-center font-semibold text-white"
      >
        <span>B</span>
        <span className="font-thin">O</span>
        <span>R</span>
        <span className="font-thin">D</span>
        <span className="w-1"></span>
        <span className="rotate-2">M</span>
        <span className="font-thin -rotate-2">A</span>
        <span className="rotate-2">T</span>
        <span className="font-thin -rotate-2">E</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: -100, color: "wheat" }}
        animate={{ opacity: 1, translateX: 0, color: "white" }}
        className="flex gap-2 items-center"
      >
        <CustomModal
          title="Signup"
          Trigger={
            <motion.div className="h-9 min-w-20 px-4 flex items-center justify-center text-white text-[14px] font-semibold text-sm capitalize rounded-md bg-[#3d3d3d]">
              my account
            </motion.div>
          }
        >
          <div className="w-full flex flex-col min-h-40 gap-4 ">
            <motion.button className="w-full h-14 flex px-4 justify-center gap-2 bg-slate-100 rounded-md items-center text-black">
              <FcGoogle className="text-2xl" />
              <motion.span className="text-[15px]">
                continue with google
              </motion.span>
            </motion.button>
            <motion.button className="w-full h-14 flex px-4 justify-center gap-2 bg-slate-100 rounded-md items-center text-black">
              <FaFacebook className="text-2xl" />
              <motion.span className="text-[15px]">
                continue with facebook
              </motion.span>
            </motion.button>
          </div>
        </CustomModal>
        {/* <motion.div className="h-9 min-w-20 flex items-center justify-center text-white text-[14px] font-semibold font-sm rounded-md bg-[#3d3d3d]">
          login
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
}
