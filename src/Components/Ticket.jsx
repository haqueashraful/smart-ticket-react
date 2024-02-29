import { useSeatContext } from "./Context";
import PayTotal from "./PayTotal";
import SeatDesign from "./SeatDesign";
import TicketDesign from "./TicketDesign";
import TicketHead from "./TicketHead";

const Ticket = () => {
  const {ticketDiv} = useSeatContext()

  return (
    <div ref={ticketDiv} className="bg-[#F7F8F8] border-t-2 border-[#1dd100] rounded-t-[44px] lg:rounded-t-[88px] px-2 lg:px-28 lg:py-20 py-5">
      <TicketHead />
      <div>
        <TicketDesign />
      </div>
      <div className="bg-white rounded-3xl p-1 lg:p-6 mt-5 lg:flex justify-between w-full">
        <div className="lg:w-4/6 w-full">
          <SeatDesign />
        </div>
        <div className="h-auto border border-dashed border-r-2 border-[#1dd100] mx-4"></div>
        <div className="w-full lg:w-2/6">
          <PayTotal />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
