type MetricCounterProps = {
  value: string;
  label: string;
};

export default function MetricCounter({ value, label }: MetricCounterProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border bg-bg-elevated p-6">
      <span className="text-3xl font-bold tracking-tight text-gold">
        {value}
      </span>
      <span className="text-sm text-text-muted">{label}</span>
    </div>
  );
}
