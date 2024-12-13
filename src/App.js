import "./App.css";
import Home from "./Page/Home";
import Lodding from "./Components/Lodding/Lodding";
import { useState } from "react";

function App() {
  const [showLodding, setshowLodding] = useState(true);
  setTimeout(() => {
    setshowLodding(false);
  }, 2500);

  return (
    <div className="bg-[#0a012a] w-full h-full relative">
      {showLodding ? <Lodding /> : <Home />}
    </div>
  );
}

export default App;
