import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
  } from "recharts";
  
  function Graph({ data, maxImpact }) {
    return (
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
  
        <Line type="monotone" dataKey="ax" stroke="red" />
        <Line type="monotone" dataKey="ay" stroke="green" />
        <Line type="monotone" dataKey="az" stroke="blue" />
        <Line
  type="monotone"
  dataKey="magnitude"
  stroke="purple"
  dot={(props) => {
    const { cx, cy, payload } = props;

    if (!maxImpact) return false;

    if (payload.time === maxImpact.time) {
      return (
        <circle
          cx={cx}
          cy={cy}
          r={6}
          fill="red"
          stroke="black"
          strokeWidth={2}
        />
      );
    }

    return false;
  }}
/>
      </LineChart>
    );
  }
  
  export default Graph;