import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Graph({ data, maxImpact }) {
  return (
    <div className="chart-wrapper">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="time" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} />
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
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;