import { createContext, useContext, useState } from "react";

const SeatContext = createContext();

export const useSeatContext = () => useContext(SeatContext);

export const SeatProvider = ({ children }) => {
  const [seat, setSeat] = useState("");
  const [seatCount, setSeatCount] = useState(0);
  const [seatTotal, setSeatTotal] = useState(40);
  const [couponValue, setCouponValue] = useState("");
  const [discountValue, setDiscountValue] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [prevSeat, setPrevSeat] = useState([]);
  const [seatSelect, setSeatSelect] = useState([]);

  const handleSeatClick = (event) => {
    if (
      seatCount >= 5 ||
      seatSelect.includes(event.target.innerText) ||
      prevSeat.includes(event.target.innerText)
    ) {
      return;
    }

    const clickedSeat = event.target.innerText;
    setSeatSelect((prevSelectedSeats) => [...prevSelectedSeats, clickedSeat]); // Push clicked seat into seatSelect

    const seatBg = document.getElementById(clickedSeat);
    seatBg.classList.add("bg-[#1DD100]");

    const price = 550;

    const newRow = document.createElement("tr");

    const seatCell = document.createElement("td");
    seatCell.textContent = clickedSeat;

    const seatClass = document.createElement("td");
    seatClass.textContent = "economy";

    const priceCell = document.createElement("td");
    priceCell.classList.add("text-right");
    priceCell.textContent = price;

    newRow.appendChild(seatCell);
    newRow.appendChild(seatClass);
    newRow.appendChild(priceCell);
    document.getElementById("ticketTable").appendChild(newRow);

    setTotalPrice((prev) => prev + 550);
    incrementSeatCount();
    decrement();
  };
  console.log(seatSelect);

  const applyCoupon = () => {
    if (couponValue === "Couple 20") {
      const discount = totalPrice * 0.2;
      const discountedPrice = totalPrice - discount;
      setDiscountValue(Math.ceil(discount));
      setGrandTotal(Math.ceil(discountedPrice));
      setCouponApplied(true);
    } else if (couponValue === "NEW15") {
      const discount = totalPrice * 0.15;
      const discountedPrice = totalPrice - discount;
      setDiscountValue(Math.ceil(discount));
      setGrandTotal(Math.floor(discountedPrice));
      setCouponApplied(true);
    }
  };

  const incrementSeatCount = () => {
    setSeatCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setSeatTotal((prevCount) => prevCount - 1);
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  console.log(formData);
  const handleNext = (e) => {
    e.preventDefault();
    const { phone, name, email } = formData;
    if (phone.length !== 11 || name === "" || email === "" || seatSelect.length === 0) {
      alert("Fill in all required fields and select at least one seat");
      return;
    } else {
      setShowModal(true);
      const selectedSeat = [...seatSelect];
      selectedSeat.forEach((seat) => {
        const seatId = document.getElementById(seat);
        seatId.classList.add("bg-orange-300");
        setPrevSeat(seat);
      });
      setSeatCount(0);
    }
  };
  
  
  

  return (
    <SeatContext.Provider
      value={{
        seat,
        seatCount,
        setSeat,
        setSeatCount,
        handleSeatClick,
        incrementSeatCount,
        decrement,
        seatTotal,
        setSeatTotal,
        setCouponValue,
        applyCoupon,
        totalPrice,
        grandTotal,
        couponApplied,
        discountValue,
        handleNext,
        showModal,
        handleChange,
      }}
    >
      {children}
    </SeatContext.Provider>
  );
};
