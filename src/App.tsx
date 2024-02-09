// for using darkMode

import { useState } from "react";
import ReactLogo from "./components/reactLogo/ReactLogo";
import Main from "./containers/Main";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <>
    <div className=" flex justify-center items-center h-screen w-screen">

    <h1 className="text-xl font-bold underline bg-red-500">
      Hello world!
    </h1>
      
    </div>
    
    </>
  );
}

export default App;
