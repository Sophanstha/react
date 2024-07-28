import { useEffect, useState } from "react";

import "./App.css";
import { Theamprovider } from "./Contexts/Theam";
import ThemeBtn from "./compoments/TheamBtn";
import Cards from "./compoments/Cards";

function App() {
const [theamMode,settheam]= useState("light");

 const lightMode= ()=>{
  settheam("light");
}
 const darkMode= ()=>{
  settheam("dark");
}
// actual change in theam 
useEffect(()=>{
  let htmlbody = document.querySelector("html")
  htmlbody.classList.remove("light","dark")
  htmlbody.classList.add(theamMode)
},[theamMode])

  return (
    <>
  <Theamprovider value={{theamMode,lightMode,darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theambtn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
    <Cards />
          </div>
        </div>
      </div>
      </Theamprovider>
    </>
  );
}

export default App;
