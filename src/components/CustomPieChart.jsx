import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const colorList = [
  "#fc892c",
  "#ffc348",
  "#4dd291",
  "#24ccb4",
  "#29b4d0",
  "#085381",
  "#713570",
  "#901c53",
  "#cb4967",
  "#e0644b",
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      {/* <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text> */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={colorList[payload.colorIndex]}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={colorList[payload.colorIndex]}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle
        cx={ex}
        cy={ey}
        r={2}
        fill={colorList[payload.colorIndex]}
        stroke="none"
      />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#fff"
      >
        {payload.name}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#fff"
      >
        {`(Score ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const CustomPieChart = ({ chartdata, onPieEnter, activeIndex }) => {
  return (
    <>
      {" "}
      <PieChart
        // margin={{ top: 20, right: 0, left: 100, bottom: 0 }}
        width={600}
        height={340}
      >
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          animationDuration={400}
          data={chartdata}
          cx={300}
          cy={180}
          innerRadius={40}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {chartdata.map(({ colorIndex }, index) => (
            <Cell key={`cell-${index}`} fill={colorList[colorIndex]} />
          ))}
        </Pie>
      </PieChart>
      <div className="grid grid-cols-2 justify-between text-steel gap-x-4">
        <div className="flex justify-between col-span-1 space-x-2">
          {chartdata.map(({ colorIndex, name, value }) => {
            if (!value) {
              return (
                <div
                  key={colorIndex}
                  className="flex justify-between col-span-1 space-x-2"
                >
                  <div className="font-bold">{name}</div>
                  <div>{value}%</div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default CustomPieChart;
