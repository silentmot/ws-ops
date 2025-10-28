'use client';

import { useEffect, useState, useRef } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@deskops/ui';
import { cn } from '@deskops/ui';
import { formatWithPrecision, type UOM } from '@deskops/constants';
import { DesignTokens } from '@/lib/design-tokens';

interface KPICardProps {
  title: string;
  value: number;
  unit: UOM;
  change: number;
  isLoading?: boolean;
  className?: string;
  sparkData?: number[];
  sparkColor?: string;
}

export function KPICard({
  title,
  value,
  unit,
  change,
  isLoading = false,
  className,
  sparkData,
  sparkColor = 'hsl(var(--chart-1))',
}: KPICardProps): React.JSX.Element {
  const [animatedValue, setAnimatedValue] = useState(0);
  const previousValueRef = useRef(value);
  const isPositive = change >= 0;
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (isLoading) return undefined;

    // Only reset if value actually changed
    if (previousValueRef.current !== value) {
      previousValueRef.current = value;

      const duration = parseInt(DesignTokens.animation.counter, 10);
      const steps = 60;
      const increment = value / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep += 1;
        const newValue = currentStep === 1 ? 0 : Math.min(increment * currentStep, value);
        setAnimatedValue(newValue);

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
    return undefined;
  }, [value, isLoading]);  if (isLoading) {
    return (
      <Card className={cn(className)}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-8 w-24 animate-pulse rounded bg-muted" />
          <div className="mt-2 h-4 w-16 animate-pulse rounded bg-muted" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div
          className="flex items-center space-x-1 text-xs"
          style={{
            color: isPositive
              ? 'hsl(var(--success))'
              : 'hsl(var(--destructive))',
          }}
        >
          {isPositive ? (
            <TrendingUp className="h-3 w-3" aria-label="Trending up" />
          ) : (
            <TrendingDown className="h-3 w-3" aria-label="Trending down" />
          )}
          <span>{Math.abs(change).toFixed(1)}%</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tabular-nums">
          {formatWithPrecision(animatedValue, unit)} {unit}
        </div>
        <p className="text-xs text-muted-foreground">
          {isPositive ? '+' : ''}{change.toFixed(1)}% from previous period
        </p>
        {sparkData && sparkData.length > 0 && (
          <div className="mt-3">
            <svg
              width="100%"
              height="24"
              className="overflow-visible"
              role="img"
              aria-label={`Trend chart for ${title}`}
              tabIndex={0}
            >
              <defs>
                <linearGradient id={`gradient-${title.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={sparkColor} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={sparkColor} stopOpacity="0.05" />
                </linearGradient>
              </defs>
              {(() => {
                const max = Math.max(...sparkData);
                const min = Math.min(...sparkData);
                const range = max - min || 1;
                const points = sparkData
                  .map((val, i) => {
                    const x = (i / (sparkData.length - 1)) * 100;
                    const y = 24 - ((val - min) / range) * 20;
                    return `${x},${y}`;
                  })
                  .join(' ');

                const areaPoints = `0,24 ${points} 100,24`;

                return (
                  <>
                    <polyline
                      fill={`url(#gradient-${title.replace(/\s+/g, '-')})`}
                      points={areaPoints}
                      className={prefersReducedMotion ? '' : 'animate-in fade-in duration-300'}
                    />
                    <polyline
                      fill="none"
                      stroke={sparkColor}
                      strokeWidth="1.5"
                      points={points}
                      className={prefersReducedMotion ? '' : 'animate-in fade-in duration-300'}
                    />
                  </>
                );
              })()}
            </svg>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
