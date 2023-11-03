import { useState } from "react";
import "./App.css";
import DesktopView from "./views/DesktopView/DesktopView";
import MobileView from "./views/MobileView/MobileView";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);

  return (
    <div className="App">
      {screenSize > 550 ? <DesktopView /> : <MobileView />}
    </div>
  );
}

export default App;