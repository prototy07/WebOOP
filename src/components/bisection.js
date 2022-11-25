import React, { useState, useEffect, useRef } from "react";
import "./bisection.css";
import { Callbisection } from "./test-table";

const Bisection = () => {
  const [isLoaded, setIsLoaded] = useState([]);

  const [result, setresult] = useState("");
  
  
  const equationInputRef = useRef();
  const xlInputRef = useRef();
  const xrInputRef = useRef();

  

  const saveItem = (event) => {
    event.preventDefault();
    const enteredEquation = equationInputRef.current.value;
    const enteredXl = xlInputRef.current.value;
    const enteredXr = xrInputRef.current.value;
    let xlfloat = parseFloat(enteredXl);
    let xrfloat = parseFloat(enteredXr);
    setresult(Callbisection(enteredEquation, xlfloat, xrfloat));
  };
  return (
    <div className="h1pj">
      <h1>คำนวณ Bisection</h1>
      <div className="inputarea">
        <form onSubmit={saveItem}>
          <div>
            <label>input EQ</label>
          </div>

          {/* <input type="text" onChange={inputPB} value={pb} /> */}

          <div>
            <label>input XL</label>
          </div>

          <select ref={xlInputRef}>
            {isLoaded.map((equXl, index) => {
              return (
                <option key={index} value={equXl.xl} label={equXl.xl}></option>
              );
            })}
          </select>

          <div>
            <label>input XR</label>
          </div>

          <select ref={xrInputRef}>
            {isLoaded.map((equXr, index) => {
              return (
                <option key={index} value={equXr.xr} label={equXr.xr}></option>
              );
            })}
          </select>

          <div>
            <input type="submit" className="btn-submit" value="Submit" />
          </div>
        </form>
      </div>
      <div>{result[0]}</div>
      <div>{result[1]}</div>
    </div>
  );
};

export default Bisection;
