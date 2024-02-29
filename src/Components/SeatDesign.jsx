import SeatHead from "./SeatHead";
import SeatSerial from "./SeatSerial";
import drive from "../assets/images/drive.svg";
import { useSeatContext } from "./Context";

const SeatDesign = () => {
    const { incrementSeatCount, setSeatCount, decrement, setSeatTotal } = useSeatContext();
    return (
    <div>
      <SeatHead />
      <div>
        <div className="flex justify-end my-5">
          <button disabled className="btn w-28">
            <img src={drive} alt="" />
          </button>
        </div>
        <SeatSerial
          incrementSeatCount={incrementSeatCount}
          setSeatCount={setSeatCount}
          decrement={decrement}
          setSeatTotal={setSeatTotal}
          first={"A"}
          first1={"A1"}
          first2={"A2"}
          first3={"A3"}
          first4={"A4"}
        />
        <SeatSerial
          incrementSeatCount={incrementSeatCount}
          setSeatCount={setSeatCount}
          first={"C"}
          first1={"C1"}
          first2={"C2"}
          first3={"C3"}
          first4={"C4"}
        />
        <SeatSerial
          incrementSeatCount={incrementSeatCount}
          setSeatCount={setSeatCount}
          first={"E"}
          first1={"E1"}
          first2={"E2"}
          first3={"E3"}
          first4={"E4"}
        />
        <SeatSerial
          incrementSeatCount={incrementSeatCount}
          setSeatCount={setSeatCount}
          first={"B"}
          first1={"B1"}
          first2={"B2"}
          first3={"B3"}
          first4={"B4"}
        />
        <SeatSerial
          incrementSeatCount={incrementSeatCount}
          setSeatCount={setSeatCount}
          first={"F"}
          first1={"F1"}
          first2={"F2"}
          first3={"F3"}
          first4={"F4"}
        />
        <SeatSerial
          incrementSeatCount={incrementSeatCount}
          setSeatCount={setSeatCount}
          first={"D"}
          first1={"D1"}
          first2={"D2"}
          first3={"D3"}
          first4={"D4"}
        />
        <SeatSerial
          incrementSeatCount={incrementSeatCount}
          setSeatCount={setSeatCount}
          first={"G"}
          first1={"G1"}
          first2={"G2"}
          first3={"G3"}
          first4={"G4"}
        />
        <SeatSerial
          incrementSeatCount={incrementSeatCount}
          setSeatCount={setSeatCount}
          first={"H"}
          first1={"H1"}
          first2={"H2"}
          first3={"H3"}
          first4={"H4"}
        />
        <SeatSerial
          incrementSeatCount={incrementSeatCount}
          setSeatCount={setSeatCount}
          first={"I"}
          first1={"I1"}
          first2={"I2"}
          first3={"I3"}
          first4={"I4"}
        />
        <SeatSerial
          incrementSeatCount={incrementSeatCount}
          setSeatCount={setSeatCount}
          first={"J"}
          first1={"J1"}
          first2={"J2"}
          first3={"J3"}
          first4={"J4"}
        />
      </div>
    </div>
  );
};

export default SeatDesign;
