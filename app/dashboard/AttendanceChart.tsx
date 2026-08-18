'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WeeklyMetric } from '../data/mockKpis';

export default function AttendanceChart({ data }: { data: WeeklyMetric[] }) {
  return (
    <div className="rounded-xl bg-neutral-900 border border-neutral-800 p-5">
      <p className="text-sm text-neutral-400 mb-4">Weekly Attendance</p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="week" stroke="#888" fontSize={12} />
          <YAxis stroke="#888" fontSize={12} />
          <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }} />
          <Bar dataKey="attendance" fill="#00B5CC" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
