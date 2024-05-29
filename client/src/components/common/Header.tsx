import { motion } from "framer-motion";
import { CustomModal } from "../modals/modal";


import { AuthOptions } from "../auth/authOptions";

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
          title="Go to Account"
          Trigger={
            <motion.div className="h-9 min-w-20 px-4 flex items-center justify-center text-white text-[14px] font-semibold text-sm capitalize rounded-md bg-[#3d3d3d]">
              my account
            </motion.div>
          }
        >
          <AuthOptions />
        </CustomModal>
        {/* <motion.div className="h-9 min-w-20 flex items-center justify-center text-white text-[14px] font-semibold font-sm rounded-md bg-[#3d3d3d]">
          login
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
}
