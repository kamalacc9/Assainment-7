import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Footer";
import DataContainer from "./DataContainer";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
const loadData = () => fetch("/Data.json").then((res) => res.json());
function App() {
  const dataPromise = loadData();
  console.log(dataPromise);
  return (
    <>
      <header className="  mx-auto py-3  lg:shadow-lg  ">
        <Navbar></Navbar>
      </header>
      <section>
        <Suspense>
          <DataContainer promise={dataPromise}></DataContainer>
        </Suspense>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer />
    </>
  );
}

export default App;
