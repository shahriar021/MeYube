import React, { useMemo, useRef, useState } from "react";
import { findNthPrime } from "../helper/allstuff";

function Demo() {
  const [text, setText] = useState("");
  const [isThemneCOlor, setIsThemeColor] = useState(false);
  const [state, setX] = useState(0);
  // const prime = () => findNthPrime(text);
  const prime = useMemo(() => findNthPrime(text), [text]);

  let x = 10;
  console.log(x, "let");

  const ref = useRef(0);

  return (
    <>
      <div
        className={`border border-2 p-2 ${
          isThemneCOlor ? "bg-blue-800" : "bg-amber-500"
        } text-white`}
      >
        <button onClick={() => setIsThemeColor(!isThemneCOlor)}>toggle</button>
        <input
          value={text}
          className="w-full border-2 p-3"
          onChange={(e) => setText(e.target.value)}
        />
        <h1>nth prime number:{prime}</h1>
      </div>
      <div
        className={`border border-2 p-2 "bg-red"
         h-[200px] w-[300px]`}
      >
        <h1>let x : {x}</h1>
        <button
          onClick={() => {
            x = x + 1;
            console.log("x:", x);
          }}
        >
          increase let x{" "}
        </button>

        <h1>state x : {state}</h1>
        <button
          onClick={() => {
            setX(state + 1);
            console.log("state:", state);
          }}
        >
          increase state x{" "}
        </button>
        <h1>ref x : {ref.current}</h1>
        <button
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref:", ref.current);
          }}
        >
          increase ref x{" "}
        </button>
      </div>
    </>
  );
}

export default Demo;
