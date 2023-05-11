import { ToastOptions, toast } from "react-toastify";
import { toasterInterface } from "../interface/global.interface";

const toasterConfig:ToastOptions<toasterInterface> = {
   position: "top-right",
   autoClose: 2000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "colored",
};


export const ToastifySuccess = (message:string) => {
   toast.success(message, toasterConfig);
}

export const ToastifyWarning = (message:string) => {
   toast.warning(message, toasterConfig);
}

export const ToastifyError = (message:string) => {
   toast.error(message, toasterConfig);
}

