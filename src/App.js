import "./App.css";

import { Navbar } from "./Components/Navbar";
import { Footer } from "./Pages/Footer";
import { Routes } from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes></Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
