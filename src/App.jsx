import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Makrdown from "./component/Makrdown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Makrdown />
    </div>
  );
}

export default App;
