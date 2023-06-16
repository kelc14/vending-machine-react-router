import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Milkyway from "./Milkyway";
import Airhead from "./Airhead";
import Apple from "./Apple";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route exact path="/" element={<VendingMachine />} />
          </Route>

          <Route exact path="/apple" element={<Apple />} />

          <Route exact path="/airhead" element={<Airhead />} />

          <Route exact path="/milkyway" element={<Milkyway />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
