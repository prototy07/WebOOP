import React,{useState} from 'react'
import "./bisection.css";
import { CallSecant } from './Secant-table';


const Secant = () => {
  const [x0, setx0] = useState("");
  const [x1, setx1] = useState("");
  const [result, setresult] = useState("");
  const [eq, seteq] = useState("");

  const inputX0 = (event) => {
    setx0(event.target.value);
  };
  
  const inputX1 = (event) => {
    setx1(event.target.value);
  };
  const inputEQ = (event) => {
    seteq(event.target.value)
  }
  const saveItem = (event) => {
    event.preventDefault();
    let x0float = parseFloat(x0);
    let x1float = parseFloat(x1);
    setresult(CallSecant(eq,x0float,x1float));

    
  };


  return (
    <div className="h1pj">
      <h1>คำนวณ Secant</h1>
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
            <label>input X0</label>
          </div>

          <input
            type="text"
            placeholder="input X0"
            onChange={inputX0}
            value={x0}
          />

        <div>
            <label>input X1</label>
          </div>

          <input
            type="text"
            placeholder="input X1"
            onChange={inputX1}
            value={x1}
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

export default Secant