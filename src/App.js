import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import { useState } from "react";
import Router from "./components/Router/Router";

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full min-h-screen relative" >
      <Navbar active={active} setActive={setActive} />
      <Router setActive={setActive} />
    </div>
  );
}

export default App;
