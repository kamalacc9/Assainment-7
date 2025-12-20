import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Footer";
import DataContainer from "./DataContainer";
import { Suspense } from "react";
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
        <Suspense fallback={<h3>Loading...</h3>}>
          <DataContainer promise={dataPromise}></DataContainer>
        </Suspense>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
