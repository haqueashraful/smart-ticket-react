import playStore from "../assets/images/playstore.png";

const Footer = () => {
  return (
    <footer className="lg:p-28 p-2 bg-[#030712] text-white">
      <section className="flex justify-between items-center">
        <div className="space-y-3">
          <h1 className="raleway-font text-xl lg:text-4xl font-extrabold text-white">
            P-Ticket
          </h1>
          <p className="inter-font text-sm lg:text-lg font-normal text-[#FFFFFFCC]">
            P-Ticket is a digital platform to make your <br />
            daily commuting better.
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="text-sm lg:text-base">Download Our APP</h1>
          <div className="lg:flex justify-center items-center gap-2 border border-white p-2 rounded-lg">
            <img
              className="w-7 h-7 lg:w-auto lg:h-auto:"
              src={playStore}
              alt=""
            />
            <div>
              <h5 className="text-xs">Get it on</h5>
              <h2 className="text-sm">Google Play</h2>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-6 border-gray-300 border-dashed" />
      <section className="lg:flex justify-between items-center">
        <div>
          <h1>@all rights reserved, P-Ticket services limited.2024</h1>
        </div>
        <div className="flex justify-between items-center gap-1 lg:gap-6">
          <h1>
            <a href="">Terms & condition</a>
          </h1>
          <h1>
            <a href="">Return & refund policy</a>
          </h1>
          <h1>
            <a href="">Privacy policy</a>
          </h1>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
