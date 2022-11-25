import React, { useState } from "react";
import { bisec } from "./Bisection_cal";
import "./sathit.css";


const Bisection = () => {
  const [xL, setXL] = useState("");
  const [xR, setXR] = useState("");
  const [pb, setPB] = useState("");

  const [result, setResult] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const inputPB = (event) => {
    setPB(event.target.value);
  };
  const inputXL = (event) => {
    setXL(event.target.value);
  };
  const inputXR = (event) => {
    setXR(event.target.value);
  };

  const submitdata = (event) => {
    event.preventDefault();
    let xLfloat = parseFloat(xL);
    let xRfloat = parseFloat(xR);
    setResult(bisec(pb,xLfloat, xRfloat));
    setIsShow(true);
  };

  return (
    <div className="Sathit">
      <label>Bisection</label>
      <form onSubmit={submitdata}>
        <label>Problem is</label>
        <input type="text" onChange={inputPB} value={pb} />
        <label>XL is</label>
        <input type="text" onChange={inputXL} value={xL} />
        <label>XR is</label>
        <input type="text" onChange={inputXR} value={xR} />
        <button type="submit">Submit</button>
      </form>

      {isShow && <p>result is {result[0]}</p>}
      {isShow && <div>{result[1]}</div>}
      {isShow && <div>{result[2]}</div>}
    </div>
  );
};

export default Bisection;
