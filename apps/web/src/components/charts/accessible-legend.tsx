'use client';

interface LegendItem {
  dataKey: string;
  value: string;
  color: string;
  inactive?: boolean;
}

interface AccessibleLegendProps {
  payload?: LegendItem[];
  onToggle: (dataKey: string) => void;
  hiddenSeries: Set<string>;
}

export function AccessibleLegend({
  payload,
  onToggle,
  hiddenSeries,
}: AccessibleLegendProps): React.JSX.Element | null {
  if (!payload || payload.length === 0) {
    return null;
  }

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2 pb-2"
      role="group"
      aria-label="Chart legend"
    >
      {payload.map((entry) => {
        const isHidden = hiddenSeries.has(entry.dataKey);
        return (
          <button
            key={entry.dataKey}
            type="button"
            onClick={() => onToggle(entry.dataKey)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onToggle(entry.dataKey);
              }
            }}
            className="inline-flex items-center gap-2 rounded px-3 py-2 text-xs font-medium transition-all hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            style={{
              opacity: isHidden ? 0.4 : 1,
              minHeight: '44px',
              minWidth: '44px',
            }}
            aria-pressed={!isHidden}
            aria-label={`${entry.value}: ${isHidden ? 'Hidden' : 'Visible'}. Click to ${isHidden ? 'show' : 'hide'}.`}
          >
            <span
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: entry.color }}
              aria-hidden="true"
            />
            <span>{entry.value}</span>
          </button>
        );
      })}
    </div>
  );
}
