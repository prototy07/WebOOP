import DataTable from "react-data-table-component";
import { evaluateTex } from "tex-math-parser";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";

const columns = [
  {
    name: "Iteration",
    selector: (row) => row.iteration,
  },
  {
    name: "X(i)",
    selector: (row) => row.x0,
  },
  {
    name: "X(i+1)",
    selector: (row) => row.x1,
  },
  {
    name: "Error",
    selector: (row) => row.error,
  },
];

let dataFalse = [];
let arrayForG = [];

export function CallOnePoint(x, x0) {
  let count_id = 1;
  let iteration = 1;
  let error = null;
  

  const funcFalseposition = (eq, xm) => {
    const equation = evaluateTex(eq, { x: xm });
    return equation.evaluated;
  };

  
  
  let run = true;
  
  while (run) {
    
    let x1 = funcFalseposition(x, x0);
    error = Math.abs((x1-x0)/x1)
    
    if (iteration >= 1) {
        let arraypushG = { x: iteration, y: error };
        arraypushG.x = iteration;
        arraypushG.y = error;
        arrayForG.push(arraypushG);
      }
      let datapush = {
        count_id: count_id,
        iteration: iteration,
        x0: x0,
        x1: x1,
        error: error,
      };
      datapush.count_id = count_id;
      datapush.iteration = iteration;
      datapush.x0 = x0;
      datapush.x1 = x1;
      datapush.error = error;
      dataFalse.push(datapush);
    x0 = x1
    iteration++
    if (error < 0.000001) {
        break;
      
    } 
  }

  return [
    <DataTable columns={columns} data={dataFalse} />,
    <XYPlot width={400} height={400}>
      <HorizontalGridLines />
      <LineSeries data={arrayForG} />
      <XAxis />
      <YAxis />
    </XYPlot>,
  ];
}
