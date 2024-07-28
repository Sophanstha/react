import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
        const [data,setdata]=useState({});
    useEffect(()=>{
        fetch(` https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>{
            return res.json();
        }).then((val)=>{
            return setdata(val[currency]);
        })
        console.log(data);
    })
    return data;
}
export default useCurrencyInfo;