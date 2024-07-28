import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [lenght, setlenght] = useState(8);
  const [password, setpassword] = useState("");
  const [allowNum, setAllownum] = useState(false);
  const [allowchar, setAllowchar] = useState(false);

  let passwordgenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let char = "!@#$%^&*()_+";
    if (allowNum) {
      str += num;
    }
    if (allowchar) {
      str += char;
    }
    for (let i = 1; i <= lenght; i++) {
      let createpass = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(createpass);
    }
    setpassword(pass);
  }, [lenght, allowNum, allowchar, setpassword]);
  let clicktocopypass = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,7)
  }, [password]);

  useEffect(() => {
    passwordgenerate();
  }, [lenght, allowNum, allowchar, passwordgenerate]);
  // useRef hook
  let passwordRef = useRef(null);
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-1/2 h-1/3 bg-white shadow-md rounded-md border-solid">
          <h1 className="text-center my-1 text-xl text-blue-600">
            Password Generator{" "}
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-2 p-6">
            <input
              type="text"
              placeholder="password"
              className="w-full outline-none py-5 px-3 bg-slate-800 text-white  text-xl"
              readOnly
              value={password}
              ref={passwordRef}
            />
            <button
              className="bg-blue-500 outline-none px-7 hover:bg-green-200"
              onClick={clicktocopypass}
            >
              {" "}
              Copy
            </button>
          </div>
          <div className="flex text-xs gap-x-2">
            <div className="flex items-center gap-3">
              <input
                type="range"
                max={100}
                min={8}
                value={lenght}
                className="cursor-pointer m-3"
                onChange={(e) => {
                  setlenght(e.target.value);
                }}
              />
              <label className="text-orange-600">lenght {lenght} </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultValue={allowNum}
                id="numberinput"
                onChange={() => {
                  setAllownum((prev) => !prev);
                }}
              />
              <label htmlFor="numberinput" className="text-orange-600">
                Number
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultValue={allowchar}
                id="charinput"
                onChange={() => {
                  setAllowchar((prev) => !prev);
                }}
              />
              <label htmlFor="charinput" className="text-orange-600">
                special character
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
