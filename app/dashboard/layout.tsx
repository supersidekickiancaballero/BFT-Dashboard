import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="w-56 bg-neutral-950 border-r border-neutral-800 flex flex-col p-6 gap-8">
        <Image src="/bft-logo.png" alt="BFT Logo" width={100} height={54} />
        <nav className="flex flex-col gap-2">
          <p className="text-xs uppercase text-neutral-500 mb-1">Studios</p>
          <Link href="/dashboard/docklands" className="font-heading uppercase text-sm px-3 py-2 rounded-lg hover:bg-neutral-900 transition">
            Docklands
          </Link>
          <Link href="/dashboard/wangaratta" className="font-heading uppercase text-sm px-3 py-2 rounded-lg hover:bg-neutral-900 transition">
            Wangaratta
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
