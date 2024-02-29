import ticketDivider from "../assets/images/info-devider.png"
import fare from "../assets/images/fare.png"
import busLogo from "../assets/images/bus-logo.png"
import seatGreen from "../assets/images/seat-green.png"
import { useSeatContext } from "./Context";



const TicketDesign = () => {
  const {seatTotal} = useSeatContext();
    return (
        <div>
             <section className="lg:flex items-center bg-white rounded-3xl mt-12">
          <div className="lg:flex-1 p-2 lg:p-8">
            <div className="flex items-center justify-between mb-9">
              <div className="lg:flex justify-center items-center gap-4">
                <img
                  className="w-5 h-5 lg:w-auto lg:h-auto"
                  src={busLogo}
                  alt=""
                />
                <div>
                  <h1 className="text-sm lg:text-base">Greenline Paribahan</h1>
                  <p className="text-sm lg:text-base">
                    Coach-009-WEB ! AC_Business
                  </p>
                </div>
              </div>
              <div
                className="bg-[#1DD10026] p-2 border-none rounded-lg lg:flex justify-center items-center gap-2"
              >
                <img src={seatGreen} alt="" />
                <h1><span id="available-seat">{seatTotal}</span> Seats left</h1>
              </div>
            </div>

            <div className="bg-[#F7F8F8] lg:p-6 rounded-3xl">
              <div
                className="flex justify-between items-center border-dashed border-b-2"
              >
                <h1 className="p-3">Route</h1>
                <h2 className="p-3">Dhaka - Sylhet</h2>
              </div>
              <div
                className="flex justify-between items-center border-dashed border-b-2"
              >
                <h1 className="p-3">Departure Time</h1>
                <h2 className="p-3">9:00 PM</h2>
              </div>
              <div className="lg:flex justify-between items-center mt-3">
                <div className="bg-[#0307120D] px-4 py-2 rounded-xl mb-2 lg:mb-0">
                  <h1>Boarding Point - Laxmipur</h1>
                </div>
                <div className="bg-[#0307120D] px-6 py-2 rounded-xl mb-2 lg:mb-0">
                  <h1>Dropping Point - Bogura</h1>
                </div>
                <div className="bg-[#0307120D] px-6 py-2 rounded-xl mb-2 lg:mb-0">
                  <h1>Est.Time - 11 Hour</h1>
                </div>
              </div>
            </div>
          </div>
          <img className="hidden lg:block" src={ticketDivider} alt="" />
          <div className="flex flex-col justify-center items-center p-8">
            <img src={fare} alt="" />
            <h1 className="font-raleway text-2xl font-semibold">550 Taka</h1>
            <p>Per Seat</p>
          </div>
        </section>
        </div>
    );
};

export default TicketDesign;