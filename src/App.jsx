import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/layouts/header";
import Register from "./components/templates/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Register />
    </>
  );
}

export default App;
