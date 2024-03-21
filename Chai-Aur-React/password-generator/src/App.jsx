import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_{}-[]";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numAllowed, charAllowed, setPassword, PasswordGenerator]);

  //useRef Hook
  const passwordRef = useRef(null);

  //function to copy password to clipboard
  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <>
      <main className="bg-slate-400 h-full">
        <header className="shadow-xl">
          <h1 className="bg-black text-4xl font-semibold text-white h-[15vh] flex items-center justify-center shadow-md">
            Password Generator
          </h1>
        </header>
        <div className=" h-[85vh] w-full">
          <div className="w-full max-w-xl mx-auto shadow-lg rounded-lg px-8 py-10 text-white text-xl font-sans my-8 flex flex-col gap-6">
            <div className="flex shadow rounded-lg overflow-hidden mb-4 text-black">
              <input
                type="text"
                value={Password}
                className="outline-none w-full px-3 py-2"
                placeholder="password..."
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                ref={passwordRef}
              />
              <button
                onClick={copyPasswordToClip}
                className="bg-black hover:bg-blue-700  text-white font-semibold px-3 py-2 shrink-0"
              >
                Copy
              </button>
            </div>
            <div className="flex justify-around text-lg gap-x-4">
              <div className="flex items-center gap-x-1">
                <input
                  type="range"
                  min={6}
                  max={100}
                  value={length}
                  className="cursor-pointer transform-150 accent-slate-600"
                  onChange={(e) => {
                    setlength(e.target.value);
                  }}
                />
                <label className="text-lg font-semibold">Length:{length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  className="transform scale-150 accent-slate-600"
                  defaultChecked={numAllowed}
                  id="numberInput"
                  onChange={(e) => {
                    setnumAllowed((prev) => !prev);
                  }}
                />
                <label className="text-lg font-semibold">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  className="transform scale-150 accent-slate-600"
                  defaultChecked={charAllowed}
                  id="charInput"
                  onChange={() => {
                    setcharAllowed((prev) => !prev);
                  }}
                />
                <label className="text-lg font-semibold">Characters</label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
