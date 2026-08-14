"use client";

import { mockMembers } from "../../data/mockMembers";
import { getFlaggedMembers } from "../../data/flagLogic";

export default function DocklandsDashboard() {
  const flaggedMembers = getFlaggedMembers(mockMembers, "docklands");

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-heading uppercase text-3xl text-bft-blue">Docklands</h1>

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
