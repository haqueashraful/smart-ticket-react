import couponDivider from "../assets/images/cupon-devider.png"


const CouponComponent = () => {
    return (
        <div>
               <section className="lg:mx-28 lg:mb-32">
        <h1
          className="font-raleway font-bold text-4xl text-black text-center mb-12"
        >
          Best offers for you
        </h1>

        {/* <!-- cuppon-card-section --> */}
        <section
          className="flex flex-col lg:flex lg:flex-row justify-center items-center w-full lg:gap-8 mb-16"
        >
          {/* <!-- cuppon-card-one --> */}
          <div
            className="bg-[#FFBF0F] border-none rounded-3xl w-full flex justify-around items-center mb-2 lg:mb-0"
          >
            <div className="font-inter p-4 lg:p-0">
              <h1 className="text-xl lg:text-4xl font-extrabold text-black">
                15% OFF
              </h1>
              <p className="text-lg lg:text-xl text-black">on your next purchase</p>
              <p className="text-base">use by January 2024</p>
            </div>
            <img src={couponDivider} alt="" />
            <div className="font-raleway lg:p-[21px] p-4">
              <h1 className="text-xl lg:text-3xl font-bold">NEW15</h1>
              <p className="text-base">Coupon Code</p>
            </div>
          </div>

          {/* <!-- cuppon-card-two --> */}
          <div
            className="bg-[#F78C9C] border-none rounded-3xl w-full flex justify-around items-center"
          >
            <div className="font-inter p-4 lg:p-0">
              <h1 className="text-xl lg:text-4xl font-extrabold text-black">
                20% OFF
              </h1>
              <p className="text-lg lg:text-xl text-black">on your next purchase</p>
              <p className="text-base">use by January 2024</p>
            </div>
            <img src={couponDivider} alt="" />
            <div className="font-raleway p-4 lg:p-0">
              <h1 className="text-xl lg:text-3xl font-bold">Couple 20</h1>
              <p className="text-base">Coupon Code</p>
            </div>
          </div>
        </section>

        <div className="text-center mb-5 lg:mb-0">
          <button
            className="border-[#1DD100] border rounded-xl text-[#1DD100] text-xl font-bold font-raleway px-3 lg:px-8 py-5"
          >
            See All Offers
          </button>
        </div>
      </section>
        </div>
    );
};

export default CouponComponent;