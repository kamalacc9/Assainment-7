import "./App.css";
import Navbar from "./Component/Navbar";
import States from "./states";

function App() {
  return (
    <>
      <header className="  mx-auto py-3  lg:shadow-lg  ">
        <Navbar></Navbar>
      </header>
      <section>
        <States></States>
      </section>
    </>
  );
}

export default App;
