import { useSeatContext } from "./Context";

const SeatSerial = (props) => {
  const { first, first1, first2, first3, first4 } = props;
  const { incrementSeatCount, setSeatCount, handleSeatClick, seatCount, decrement, setSeatTotal } = useSeatContext();

  return (
    <div>
      <div className="flex w-full mb-5">
        <div className="flex justify-center items-center">
          <h1 className="items-center p-4 inter-font uppercase">{first}</h1>
        </div>
        <div className="flex justify-between gap-2 lg:gap-12 items-center flex-1">
          <div className="w-full flex justify-between items-center gap-2 lg:gap-5">
            <div className="w-full">
              <button
                id={first1}
                className="btn w-full hover:bg-white hover:border-[#1dd100] inter-font uppercase"
                onClick={(event) => {
                  if (seatCount < 5) {
                    handleSeatClick(event);
                  }
                }}
              >
                {first1}
              </button>
            </div>
            <div className="w-full">
              <button
                id={first2}
                className="btn w-full hover:bg-white hover:border-[#1dd100] inter-font uppercase"
                onClick={(event) => {
                  if (seatCount < 5) {
                    handleSeatClick(event);
                  }
                }}
              >
                {first2}
              </button>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-2 lg:gap-5">
            <div className="w-full">
              <button
                id={first3}
                className="btn w-full hover:bg-white hover:border-[#1dd100] inter-font uppercase"
                onClick={(event) => {
                  if (seatCount < 5) {
                    handleSeatClick(event);
                  }
                }}
              >
                {first3}
              </button>
            </div>
            <div className="w-full">
              <button
                id={first4}
                className="btn w-full hover:bg-white hover:border-[#1dd100] inter-font uppercase"
                onClick={(event) => {
                  if (seatCount < 5) {
                    handleSeatClick(event);
                  }
                }}
              >
                {first4}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSerial;
