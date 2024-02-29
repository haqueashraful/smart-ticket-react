import people from "../assets/images/people.png"
import ticketCoupon from "../assets/images/ticket-cupon.png"
import stoppage from "../assets/images/stoppage.png"
import banner from "../assets/images/banner.png"
import { useSeatContext } from "./Context";


const Banner = () => {
  const { handleBuyTicketClick } = useSeatContext()
  return (
    <div>
      <section className="static lg:relative">
        <section className=" bg-cover bg-no-repeat bg-center border rounded-3xl lg:px-48 lg:py-16 py-4 lg:my-8 w-full"   style={{ backgroundImage: `url(${banner})` }}>
      
          {/* <!-- banner-content --> */}
          <div className="text-center space-y-4">
            <h1 className="font-raleway text-white text-2xl lg:text-6xl font-extrabold">
              End-to-End Travel with <br />
              <span className=" text-[#1DD100]">P Paribahan</span>
            </h1>
            <p className="font-inter text-lg font-normal text-white text-center">
              Yes, you can run unit tests and view the results directly within
              the app. The <br />
              integrated testing features allow for a streamlined .
            </p>
            <button
            onClick={handleBuyTicketClick}
            //   onclick="buyTicket()"
              className="bg-[#1DD100] p-3 border-none rounded-lg raleway-font font-bold text-black"
            >
              Buy Ticket
            </button>
          </div>
        </section>
        <div className="lg:flex justify-center items-center gap-1 lg:gap-6 static lg:relative left-0 right-0 lg:-top-20 w-full lg:w-[80%] mx-auto">
          {/* <!-- card-one --> */}
          <div className="flex justify-center items-center bg-white border-t lg:border-t-0 border-b-4 border-[#1DD100] rounded-3xl px-2 lg:px-4 py-1 lg:py-3 mt-4 lg:mt-0 w-full lg:w-80">
            <div>
              <img src={people} alt="popl" />
            </div>
            <div>
              <h1 className="font-raleway font-bold text-3xl">500K+</h1>
              <p className="font-inter font-normal">Registered users</p>
            </div>
          </div>
          {/* <!-- card-two --> */}
          <div className="flex justify-center items-center bg-white border-t lg:border-t-0 border-b-4 border-[#1DD100] rounded-3xl px-2 lg:px-4 py-1 lg:py-3 mt-4 lg:mt-0 w-full lg:w-80">
            <div>
              <img src={ticketCoupon} alt="popl" />
            </div>
            <div>
              <h1 className="font-raleway font-bold text-3xl">1.7 lacks</h1>
              <p className="font-inter font-normal">Tickets sold</p>
            </div>
          </div>
          {/* <!-- card-three --> */}
          <div className="flex justify-center items-center bg-white border-t lg:border-t-0 border-b-4 border-[#1DD100] rounded-3xl px-2 lg:px-4 py-1 lg:py-3 mt-4 lg:mt-0 w-full lg:w-80">
            <div>
              <img src={stoppage} alt="popl" />
            </div>
            <div>
              <h1 className="font-raleway font-bold text-3xl">80K+</h1>
              <p className="font-inter font-normal">Rental partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
