"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-4 text-center">
      <Image src="/bft-logo.png" alt="BFT Logo" width={180} height={180} />

      <div>
        <h1 className="font-heading uppercase text-5xl">
          BFT <span className="text-bft-blue">DASHBOARD</span>
        </h1>
        <p className="text-neutral-500 mt-2">Docklands & Wangaratta — everything in one place.</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => router.push("/dashboard/docklands")}
          className="px-8 py-3 rounded-full bg-neutral-200 font-heading uppercase text-black hover:bg-neutral-300 transition"
        >
          Docklands
        </button>
        <button
          onClick={() => router.push("/dashboard/wangaratta")}
          className="px-8 py-3 rounded-full bg-black text-white font-heading uppercase border border-black hover:bg-neutral-800 transition"
        >
          Wangaratta
        </button>
      </div>
    </div>
  );
}
