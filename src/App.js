import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from "react-typed";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        {/* <div className="MyApp min-vh-100 bg-dark bg-opacity-75 text-center p-5 ">
          <h1 className="text-warning fst-italic mt-5">
            {" "}
            <Typed
              strings={[
                "Application en construction",
                "Yara Cosmo Production",
                "Je t'aime Racha",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></Typed>
          </h1>
        </div> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
