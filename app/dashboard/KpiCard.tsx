type KpiCardProps = {
  label: string;
  value: string;
};

export default function KpiCard({ label, value }: KpiCardProps) {
  return (
    <div className="rounded-xl bg-neutral-900 border border-neutral-800 p-5">
      <p className="text-sm text-neutral-400">{label}</p>
      <p className="text-3xl font-bold text-white mt-1">{value}</p>
    </div>
  );
}
