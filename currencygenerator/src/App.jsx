import { useState } from 'react'
import  useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './Commponents';
// import './App.css'

function App() {
  const [amounnt,setamount] = useState(0);
  const [from,setfrom] = useState("usd")
  const [to,setto] = useState("npr")
  const [convertedamount , setconvertedamount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  let option = Object.keys(currencyInfo);

  const swap =()=>{
    setfrom(to);
    setto(from);
    setamount(convertedamount);
    setconvertedamount(amounnt);
  }

  const convert =()=>{
    setconvertedamount( amounnt * currencyInfo[to]);
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://t3.ftcdn.net/jpg/04/34/58/54/360_F_434585463_zpdtTpTEbqQFfsp6RVEW6IIxEM9dHf86.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amounnt={amounnt}
                            currenyOption={option}
                            onCurrencyChange={(currency)=>{
                              setamount(amounnt)
                            }}
                            selectCurrency={from}
                      onAmountChange={(amounnt)=>{
                              setamount(amounnt)
                            }}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amounnt={convertedamount}
                            currenyOption={option}
                            onAmountChange={(currency)=>{
                              setto(currency)
                            }}
                            selectCurrency={to}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}
export default App
