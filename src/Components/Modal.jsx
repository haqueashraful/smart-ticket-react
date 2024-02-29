import success from "../assets/images/success.png";
import { useSeatContext } from "./Context";

const Modal = () => {
  const { showModal, setShowModal, setClicked } = useSeatContext();

  return (
    <>
      {showModal && (
        <div className="fixed z-50 inset-0 flex items-center justify-center">
          <div className="modal-overlay absolute w-full h-full bg-black opacity-50"></div>
          <div className="modal-container bg-white w-3/5 h-2/4 lg:h-3/4 mx-auto rounded-lg z-50 p-5 lg:p-14 flex flex-col items-center space-y- lg:space-y-6">
            <div>
              <img
                className="w-14 h-14 lg:w-auto lg:h-auto"
                src={success}
                alt=""
              />
            </div>
            <h2 className="text-prime font-extrabold text-xl lg:text-2xl">
              Success
            </h2>
            <p className="text-xs lg:text-base text-justify lg:text-center">
              Thank you for Booking Our Bus Seats.
              <br />
              We are working hard to find the best service and deals for you.
            </p>
            <p className="text-xs lg:text-base text-sky-300">
              Shortly you will find a confirmation in your email.
            </p>
            <div className="w-full flex justify-center">
              <button
                onClick={() => {
                  setShowModal();
                  setClicked(false);
                }}
                className="btn w-auto lg:w-3/6 bg-green-600 px-5 lg:p-3 border-none rounded-full text-white font-bold my-2 lg:my-6"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
