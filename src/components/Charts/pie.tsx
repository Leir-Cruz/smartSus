import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface IPieChart {
  totalNumber: number;
  sampleNumber: number;
}

export const MyPieChart = ({ totalNumber, sampleNumber }: IPieChart) => {
  const data = [
    { name: 'Total', value: totalNumber, color: '#0088FE' },
    { name: 'Amostra ', value: sampleNumber, color: '#00C49F' },
  ];
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={120}
        //fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};
