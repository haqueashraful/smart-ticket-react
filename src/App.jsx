import { useSeatContext } from "./Components/Context";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainBody from "./Components/MainBody";
import Modal from "./Components/Modal";

function App() {
  return (
    <>
      <div>
        <div>
          <div className=" mx-32">
            <Header />
          </div>
          <div className="mx-0">
            <MainBody />
          </div>
          <div>
            <Footer />
          </div>
        </div>
        <div>
          <Modal />
        </div>
      </div>
    </>
  );
}

export default App;
