import { createContext, useContext, useState, useEffect, useRef } from "react";
import div from "./Ticket";

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
  const [clicked, setClicked] = useState(true);
  const [prevSeat, setPrevSeat] = useState([]);
  const [seatSelect, setSeatSelect] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState("");
  const ticketDiv = useRef(null);

  console.log(seatSelect.length)
  console.log(name,phone,email);

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
      const total = (prev) => prev + 550
    setTotalPrice(total);
    setGrandTotal(total)
    incrementSeatCount();
    decrement();
  };

  const applyCoupon = () => {
    if (couponValue === "Couple 20") {
      const discount = totalPrice * 0.2;
      // const discountedPrice = totalPrice - discount;
      setDiscountValue(Math.ceil(discount));
      setGrandTotal(totalPrice - Math.ceil(discount));
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

  const resetInputFields = () => {
    document.getElementById('name').value = ''; 
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
  };

  useEffect(() => {
    if (!clicked) {
      resetInputFields();
      setClicked(true)
    }
  }, [clicked]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "phone") {
      setPhone(value);
    } else if (id === "name") {
      setName(value);
    } else {
      setEmail(value);
    }
  };

  const handleBuyTicketClick = () => {
    if (ticketDiv.current) { 
      ticketDiv.current.scrollIntoView({ behavior: 'smooth' });
    }else{
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (
      phone.length !== 11 ||
      name === "" ||
      email === "" ||
      seatSelect.length === 0 ||
      seatTotal < 0
    ) {
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
      setSeatSelect([])
      setSeatCount(0);
      setName("")
      setPhone([])
      setEmail("")
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
        handleNext,
        showModal,
        setShowModal,
        handleChange,
        setClicked,
        clicked,
        discountValue,
        handleBuyTicketClick,
        ticketDiv,
      }}
    >
      { children }
    </SeatContext.Provider>
  );
};
