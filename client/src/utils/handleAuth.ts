import toast from "react-hot-toast";
import { axiosInstance } from "../constants/axioInstance";
import { AxiosProgressEvent } from "axios";

export const HandleAuth = async () => {
  try {
    console.log("Reached");

    const response = await axiosInstance.get(`/api/oauth`, {
      onDownloadProgress: (event: AxiosProgressEvent) => {
        
        const percentCompleted = Math.round((event?.loaded * 100) / Number(event?.total));
        console.log(`Progress: ${percentCompleted}%`); // You can replace this with any progress UI update logic
      },
    });

    console.log("🚀 ~ HandleAuth ~ response:", response.data);
    console.log("🚀 ~ HandleAuth ~ response:", response.data);

    if (response.data.url) {
      window.location.href = response.data.url;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    toast.error(error.message);
  }
};
