import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { axiosInstance } from "../../constants/axioInstance";
import { AxiosProgressEvent } from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

export const AuthOptions = () => {
  const [load, setLoad] = useState<boolean>(false);
  const [progress, setProgress] = useState<string>("0%");
  const HandleAuth = async () => {
    try {
      setLoad(true);
      const response = await axiosInstance.get(`/api/oauth`, {
        onDownloadProgress: (event: AxiosProgressEvent) => {
          const percentCompleted = Math.round(
            (event?.loaded * 100) / Number(event?.total)
          );
          setProgress(`${percentCompleted}%`);
        },
      });

      console.log("🚀 ~ HandleAuth ~ response:", response.data);
      console.log("🚀 ~ HandleAuth ~ response:", response.data);

      setLoad(false);
      if (response.data.url) {
        window.location.href = response.data.url;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoad(false);
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full flex flex-col min-h-40 gap-4 ">
      <motion.button
        className="w-full h-14 flex px-4 justify-center relative gap-2 bg-slate-100 rounded-md items-center text-black"
        onClick={HandleAuth}
        disabled={load}
      >
        <motion.div
          className={`absolute left-0 top-0 bg-slate-50 h-full opacity-75 z-30 `}
          style={{ width: progress }}
        ></motion.div>
        <FcGoogle className="text-2xl" />
        <motion.span className="text-[15px]">continue with google</motion.span>
      </motion.button>
      <motion.button className="w-full h-14 flex px-4 justify-center gap-2 bg-slate-100 rounded-md items-center text-black">
        <FaFacebook className="text-2xl" />
        <motion.span className="text-[15px]">
          continue with facebook
        </motion.span>
      </motion.button>
    </div>
  );
};
