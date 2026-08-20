"use client";

import { mockMembers } from "../../data/mockMembers";
import { getFlaggedMembers } from "../../data/flagLogic";
import { getKpisForStudio, getWeeklyTrends } from "../../data/mockKpis";
import KpiCard from "../KpiCard";
import ChurnChart from "../ChurnChart";
import AttendanceChart from "../AttendanceChart";

export default function WangarattaDashboard() {
  const flaggedMembers = getFlaggedMembers(mockMembers, "wangaratta");
  const kpis = getKpisForStudio("wangaratta");
  const weeklyTrends = getWeeklyTrends("wangaratta");

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-heading uppercase text-3xl text-bft-blue">Wangaratta</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard label="Rolling 30-Day Revenue" value={`$${kpis.rolling30DayRevenue.toLocaleString()}`} />
        <KpiCard label="Autopay Members" value={kpis.autopayMembers.toString()} />
        <KpiCard label="Suspended Members" value={kpis.suspendedMembers.toString()} />
        <KpiCard label="Attendance This Week" value={kpis.attendanceThisWeek.toString()} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChurnChart data={weeklyTrends} />
        <AttendanceChart data={weeklyTrends} />
      </div>

      <div>
        <h2 className="font-heading uppercase text-lg mb-3">Flagged Members</h2>
        {flaggedMembers.length === 0 ? (
          <p className="text-neutral-400 text-sm">No flagged members</p>
        ) : (
          <ul className="flex flex-col gap-2 max-w-md">
            {flaggedMembers.map((m) => (
              <li key={m.id} className="flex items-center justify-between px-4 py-2 rounded-lg border border-neutral-800 bg-neutral-950">
                <span>{m.name}</span>
                <span className={`text-xs font-heading uppercase px-3 py-1 rounded-full text-white ${m.flag === "red" ? "bg-red-500" : "bg-orange-400"}`}>
                  {m.flag}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}