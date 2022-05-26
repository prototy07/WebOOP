import React,{useState} from 'react'
import "./bisection.css";
import { CallNewton } from './newton-table';



const OnePoint = () => {
  const [x0, setx0] = useState("");
  
  const [result, setresult] = useState("");
  const [eq, seteq] = useState("");

  const inputX0 = (event) => {
    setx0(event.target.value);
  };
  
  const inputEQ = (event) => {
    seteq(event.target.value)
  }
  const saveItem = (event) => {
    event.preventDefault();
    let x0float = parseFloat(x0);
    
    setresult(CallNewton(eq,x0float));

    
  };


  return (
    <div className="h1pj">
      <h1>คำนวณ Newton Raphson</h1>
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
            <input type="submit" className="btn-submit" value="Submit" />
          </div>
        </form>
      </div>
      <div>{result[0]}</div>
      <div>{result[1]}</div>
    </div>
  )
}

export default OnePoint