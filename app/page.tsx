"use client";

import Image from "next/image";
import { useStudio } from "./context/StudioContext";
import { mockMembers } from "./data/mockMembers";
import { getFlaggedMembers } from "./data/flagLogic";

export default function Home() {
  const { selectedStudio, setSelectedStudio } = useStudio();
  const flaggedMembers = getFlaggedMembers(mockMembers, selectedStudio);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-8 p-8">
      <Image
        src="/bft-logo.png"
        alt="BFT Logo"
        width={220}
        height={120}
        priority
      />

      <h1 className="font-heading text-4xl md:text-6xl uppercase text-black tracking-tight text-center">
        BFT <span className="text-bft-blue">Dashboard</span>
      </h1>

      <p className="font-body text-neutral-600 text-center max-w-md">
        Docklands &amp; Wangaratta — everything in one place.
      </p>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setSelectedStudio("docklands")}
          className={`font-heading uppercase px-6 py-3 rounded-full transition ${
            selectedStudio === "docklands"
              ? "bg-bft-blue text-white ring-4 ring-bft-blue/30"
              : "bg-neutral-200 text-black hover:opacity-90"
          }`}
        >
          Docklands
        </button>
        <button
          onClick={() => setSelectedStudio("wangaratta")}
          className={`font-heading uppercase px-6 py-3 rounded-full transition ${
            selectedStudio === "wangaratta"
              ? "bg-black text-white ring-4 ring-black/30"
              : "bg-neutral-200 text-black hover:opacity-90"
          }`}
        >
          Wangaratta
        </button>
      </div>

      <p className="font-body text-sm text-neutral-400 mt-2">
        Viewing: <span className="font-semibold">{selectedStudio}</span>
      </p>

      <div className="w-full max-w-md mt-6">
        <h2 className="font-heading uppercase text-lg text-black mb-3 text-center">
          Flagged Members
        </h2>
        {flaggedMembers.length === 0 ? (
          <p className="font-body text-sm text-neutral-400 text-center">
            No flagged members 🎉
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {flaggedMembers.map((m) => (
              <li
                key={m.id}
                className="flex items-center justify-between px-4 py-2 rounded-lg border border-neutral-200"
              >
                <span className="font-body text-black">{m.name}</span>
                <span
                  className={`text-xs font-heading uppercase px-3 py-1 rounded-full text-white ${
                    m.flag === "red" ? "bg-red-500" : "bg-orange-400"
                  }`}
                >
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