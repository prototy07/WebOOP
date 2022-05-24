import React,{useState} from 'react'
import "./bisection.css";
import { CallFalseposition } from './FalsePosition-table';


const FalsePosition2 = () => {
  const [xl, setxl] = useState("");
  const [xr, setxr] = useState("");
  const [result, setresult] = useState("");
  const [eq, seteq] = useState("");

  const inputXL = (event) => {
    setxl(event.target.value);
  };
  const inputXR = (event) => {
    setxr(event.target.value);
  };
  const inputEQ = (event) => {
    seteq(event.target.value)
  }
  const saveItem = (event) => {
    event.preventDefault();
    let xlfloat = parseFloat(xl);
    let xrfloat = parseFloat(xr);
    setresult(CallFalseposition(eq,xlfloat, xrfloat));

    
  };


  return (
    <div className="h1pj">
      <h1>คำนวณ False-Position</h1>
      <div className="inputarea">
        <form onSubmit={saveItem}>
          <div>
            <label>input EQ</label>
          </div>

          <input
            type="text"
            placeholder="input EQ"
            onChange={inputEQ}
            value={eq}
          />

          <div>
            <label>input XL</label>
          </div>

          <input
            type="text"
            placeholder="input XL"
            onChange={inputXL}
            value={xl}
          />
          <div>
            <label>input XR</label>
          </div>

          <input
            type="text"
            placeholder="input XR"
            onChange={inputXR}
            value={xr}
          />
          <div>
            <input type="submit" className="btn-submit" value="Submit" />
          </div>
        </form>
      </div>
      <div>{result[0]}</div>
      <div>{result[1]}</div>
    </div>
  )
}

export default FalsePosition2