'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WeeklyMetric } from '../data/mockKpis';

export default function ChurnChart({ data }: { data: WeeklyMetric[] }) {
  return (
    <div className="rounded-xl bg-neutral-900 border border-neutral-800 p-5">
      <p className="text-sm text-neutral-400 mb-4">Monthly Churn % Trend</p>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="week" stroke="#888" fontSize={12} />
          <YAxis stroke="#888" fontSize={12} unit="%" />
          <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }} />
          <Line type="monotone" dataKey="churnPercent" stroke="#00B5CC" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
