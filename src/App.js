import "./App.css";
import Home from "./Page/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#0a012a] w-full h-full relative">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
