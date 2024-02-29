import { useSeatContext } from "./Context";

const CouponInput = ({seatCount}) => {
  
  const {couponValue, setCouponValue, applyCoupon} = useSeatContext();
    return (
        <div>
            <label
            id="coupon-label"
            className="input outline-none border-none focus:outline-none focus:border-none flex items-center lg:gap-2 mt-3"
          >
            <input
              id="couponInput"
              type="text"
              className="grow outline-none border-none focus:outline-none focus:border-none"
              placeholder="Have any coupon?"
              value={couponValue}
              onChange={(e) => setCouponValue(e.target.value)}
              disabled={seatCount !== 5}
            />
            <button
              id="couponBtn"
              className="badge badge-info p-4 rounded-lg bg-[#1DD100] text-white"
              disabled={seatCount !== 5}
              onClick={applyCoupon}
            >
              Apply
            </button>
          </label>
        </div>
    );
};

export default CouponInput;