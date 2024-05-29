import { motion } from "framer-motion";
import { CustomModal } from "../modals/modal";

import { AuthOptions } from "../auth/authOptions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/root/store";
import { LoaderCircle } from "lucide-react";
import { logoutUser } from "../../redux/actions/user/logoutUser";

export function Header() {
  const { user, loading } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
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
        {!user ? (
          <>
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
          </>
        ) : (
          <>
            <CustomModal
              title="Are you Absolutely sure"
              Trigger={
                <motion.div className="h-9 min-w-20 px-4 flex items-center justify-center text-white text-[14px] font-semibold text-sm capitalize rounded-md bg-[#3d3d3d]">
                  logout
                </motion.div>
              }
            >
              <motion.div className="w-full break-words text-black flex flex-col">
                <motion.div>
                  <p>this action rollback is not possible</p>
                </motion.div>
                <div className="w-full flex justify-end gap-2">
                  <button className="h-10 rounded-md px-4 min-w-24 flex items-center justify-center bg-green-500 text-white">
                    Cancel
                  </button>
                  <button
                    className={`h-10 rounded-md px-4 min-w-24 flex items-center justify-center bg-red-500 text-white gap-2 ${
                      loading && "pointer-events-none bg-red-300"
                    }`}
                    onClick={handleLogout}
                  >
                    Continue
                    {loading && <LoaderCircle className="w-5 animate-spin" />}
                  </button>
                </div>
              </motion.div>
            </CustomModal>
          </>
        )}
        {/* <motion.div className="h-9 min-w-20 flex items-center justify-center text-white text-[14px] font-semibold font-sm rounded-md bg-[#3d3d3d]">
          login
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
}
