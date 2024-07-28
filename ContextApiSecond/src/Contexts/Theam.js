import { useContext,createContext } from "react";

export const TheamContext = createContext({
    theamMode : "light",
    darkMode : ()=>{},
    lightMode : ()=>{},
})

export const Theamprovider = TheamContext.Provider
// custom hook 
export const UseTheam= ()=>{
return useContext(TheamContext);
}