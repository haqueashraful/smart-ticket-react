import seatGray from "../assets/images/seat-gray.png"
import seatGreen from "../assets/images/seat-green-filled.png"




const SeatHead = () => {
    return (
        <div>
            <div className="border-dashed border-b-2">
              <h1 className="py-3">Select Your Seat</h1>
            </div>
            <div
              className="border-dashed border-b-2 flex justify-between items-center"
            >
              <div className="lg:flex items-center gap-2 lg:py-3">
                <img src={seatGray} alt="" />
                <h1 className="font-medium text-lg inter-font text-gray-300">
                  Available
                </h1>
              </div>
              <div className="lg:flex items-center lg:py-3 gap-2">
                <img src={seatGreen} alt="" />
                <h1 className="color-prime font-medium text-lg inter-font">
                  selected
                </h1>
              </div>
            </div>
        </div>
    );
};

export default SeatHead;