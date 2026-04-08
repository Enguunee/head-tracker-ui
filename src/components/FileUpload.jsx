import { useState } from "react";
import Graph from "./Graph";

function FileUpload() {
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [data, setData] = useState([]);
  const [maxImpact, setMaxImpact] = useState(null); 

  function processCSVText(text, name = "Sample Data") {
    setFileName(name);
    setFileContent(text);
  
    const parsedData = parseCSV(text);
    setData(parsedData);
  
    const biggestImpact = findMaxImpact(parsedData);
    setMaxImpact(biggestImpact);
  }
  function handleFileChange(event) {
    const file = event.target.files[0];
    

    if (!file) {
      return;
    }

    setFileName(file.name);

    const reader = new FileReader();

    reader.onload = (event) => {
        const text = event.target.result;
        processCSVText(text, file.name);
      };
    reader.readAsText(file);
    
  }

  function handleUseSampleData() {
    processCSVText(sampleCSV, "Sample Data");
  }

  function parseCSV(text){
    const lines = text.split("\n");

    const data = [];

    for (let i = 1; i<lines.length; i++){
        const line = lines[i].trim();
        if (!line) continue;
        const values = line.split(",");

        const time = Number(values[0]);
        const ax = Number(values[1]);
        const ay = Number(values[2]);
        const az = Number(values[3]);

        const magnitude = Math.sqrt(
        ax * ax + ay * ay + az * az
        );

        const obj = {
        time,
        ax,
        ay,
        az,
        magnitude,
        };

        data.push(obj);
    }
    return data;
  }

  function findMaxImpact(data){
    if (data.length ===0){
        return null;
    }
    let maxPoint  = data[0];

    for (let i =1; i<data.length; i++){
        if(data[i].magnitude > maxPoint.magnitude){
            maxPoint = data[i];
        }
    }
    return maxPoint

  }
  function handleClearData() {
    setFileName("");
    setFileContent("");
    setData([]);
    setMaxImpact(null);
  }

  const sampleCSV = 
`time_ms,ax,ay,az
0,0.12,-0.34,1.02
5,0.22,0.10,0.95
10,0.45,0.12,1.30
15,0.30,0.18,1.10
20,0.18,-0.05,0.98
25,0.25,0.20,1.15
30,0.40,0.35,1.40
35,2.80,1.90,4.60
40,0.50,0.10,1.20
45,0.15,-0.08,0.92
50,0.20,0.05,1.00
55,3.20,2.40,5.10
60,0.35,0.12,1.25
65,0.18,0.06,1.05
70,0.22,-0.02,0.97
75,2.60,1.70,4.20
80,0.30,0.14,1.18`;

  return (
    <div style={{ border: "2px solid red", padding: "20px", marginTop: "20px" }}>
      <h3>Upload Data File</h3>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{ display: "block", marginTop: "10px", marginBottom: "10px" }}
      />
      <div style={{ marginBottom: "15px" }}>
        <button onClick={handleUseSampleData} style={{ marginRight: "10px" }}>
            Use Sample Data
        </button>

        <button onClick={handleClearData}>
            Clear Data
        </button>
      </div>
      {data.length >0 && <Graph data={data} maxImpact={maxImpact}/>}
      {maxImpact && (
        <div style={{ marginTop: "15px" }}>
            <h4>Biggest Impact</h4>
            <p>Time: {maxImpact.time} ms</p>
            <p>ax: {maxImpact.ax}</p>
            <p>ay: {maxImpact.ay}</p>
            <p>az: {maxImpact.az}</p>
            <p>Magnitude: {maxImpact.magnitude.toFixed(2)}</p>
        </div>
        )}

      {fileName && <p>Selected file: {fileName}</p>}
      {fileContent && (
        <pre style={{ maxHeight: "200px", overflow: "auto" }}>
            {fileContent}
        </pre>
        )}
    </div>
  );
}

export default FileUpload;