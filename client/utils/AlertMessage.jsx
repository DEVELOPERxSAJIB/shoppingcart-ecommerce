import { toast } from "react-toastify";

const AlertMessage = ({ type = 'success', msg }) => {

  return toast[type](
     msg,{
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }
  );
};

export default AlertMessage;
