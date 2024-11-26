import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', visits: 400 },
  { month: 'Feb', visits: 300 },
  { month: 'Mar', visits: 200 },
  { month: 'Apr', visits: 278 },
  { month: 'May', visits: 189 },
  { month: 'Jun', visits: 239 },
  { month: 'Jul', visits: 349 },
  { month: 'Aug', visits: 400 },
  { month: 'Sep', visits: 300 },
  { month: 'Oct', visits: 200 },
  { month: 'Nov', visits: 278 },
  { month: 'Dec', visits: 189 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="visits" stroke="#29b6f6" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
