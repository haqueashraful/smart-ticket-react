import { useSeatContext } from "./Context";
import CouponInput from "./CouponInput";
import Form from "./Form";

const PayTotal = () => {
    const { discountValue, seatCount, totalPrice, grandTotal, couponApplied} = useSeatContext()
  return (
    <section className="w-full">
      <div className="border-dashed border-b-2">
        <h1 className="py-3">Pay Grand Total</h1>
      </div>

      <section className="bg-[#F7F8F8] p-2 lg:p4 mt-5 rounded-xl">
        <div>
          <table className="w-full text-left">
            <thead className="border-dashed border-b-4">
              <tr>
                <th className="py-1">
                  Seat
                  <span
                    id="seatPurchase"
                    className="bg-[#1DD100] text-white px-1 py-0 border-none rounded-lg"
                  >
                    {seatCount}
                  </span>
                </th>
                <th>Class</th>
                <th className="text-right">Price</th>
              </tr>
            </thead>
            <tbody id="ticketTable" className="border-solid border-b-4 text-left"></tbody>
          </table>

          <div className="flex justify-between items-center py-2">
            <h1 className="inter-font font-medium">Total Price:</h1>
            <h1 className="inter-font font-medium">
              BDT <span id="totalPrice">{totalPrice}</span>
            </h1>
          </div>
        </div>
        {couponApplied ? (
      <div id="discountArea" className="flex justify-between items-center ">
        <h2 className="inter-font font-medium">
          You got a discount of (tk.)
        </h2>
        <h2 className="inter-font font-medium">
          BDT <span id="discountMoney">{discountValue}</span>
        </h2>
      </div>
    ) : (
      <CouponInput seatCount={seatCount} />
    )}
        <div className="flex justify-between items-center py-5">
          <h1 className="inter-font font-medium">Grand total:</h1>
          <h2 className="inter-font font-medium">
            BDT <span id="grandTotal">{grandTotal}</span>
          </h2>
        </div>
      </section>

      <Form />

      <div className="flex justify-around items-center">
        <h2 className="underline">
          <a href="">Term and Conditions</a>
        </h2>
        <h2 className="underline">
          <a href="">Cancellation Policy</a>
        </h2>
      </div>
    </section>
  );
};

export default PayTotal;
