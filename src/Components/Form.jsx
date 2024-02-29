import { useSeatContext } from "./Context";

const Form = () => {
  const { handleNext, handleChange } = useSeatContext();
  return (
    <div>
      <form action="">
        <label className="inter-font font-semibold text-base text-black">
          Passenger Name*
        </label>
        <input
          required
          id="name"
          type="text"
          onChange={handleChange}
          placeholder="Enter Your Name"
          className="input w-full border-gray-300 border border-solid focus:outline-none focus:border-none my-2"
        />
        <label className="inter-font font-semibold text-base text-black">
          Phone Number*
        </label>
        <input
          required
          id="phone"
          type="tel"
          onChange={handleChange}
          placeholder="Enter your Phone Number"
          className="input w-full border-gray-300 border border-solid focus:outline-none focus:border-none my-2"
        />
        <label className="inter-font font-semibold text-base text-black">
          Email Id*
        </label>
        <input
          required
          id="email"
          type="email"
          onChange={handleChange}
          placeholder="Enter your Email ID"
          className="input w-full border-gray-300 border border-solid focus:outline-none focus:border-none mt-2"
        />
        <button
          onClick={handleNext}
          className="w-full bg-[#1dd100] p-3 rounded-lg raleway-font hover:bg-white hover:border-[#1dd100] hover:text-black hover:border font-bold text-white my-6"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Form;
