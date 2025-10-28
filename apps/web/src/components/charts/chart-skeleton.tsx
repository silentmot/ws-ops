'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@deskops/ui';

interface ChartSkeletonProps {
  title: string;
  className?: string;
}

export function ChartSkeleton({
  title,
  className,
}: ChartSkeletonProps): React.JSX.Element {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 animate-pulse rounded bg-muted" />
      </CardContent>
    </Card>
  );
}
