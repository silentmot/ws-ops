'use client';

import { useExportStore } from '@/stores/export-store';
import {
  Progress,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@deskops/ui';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

export function ExportProgress(): React.JSX.Element {
  const { activeJobs } = useExportStore();

  if (activeJobs.length === 0) return <></>;

  return (
    <div className="space-y-4">
      {activeJobs.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-sm">
              <span>
                {job.module.toUpperCase()} Export ({job.format.toUpperCase()})
              </span>
              {job.status === 'processing' && (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}
              {job.status === 'completed' && (
                <CheckCircle className="h-4 w-4 text-green-500" />
              )}
              {job.status === 'failed' && (
                <XCircle className="h-4 w-4 text-red-500" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={job.progress} className="h-2" />
            <p className="text-muted-foreground mt-2 text-xs">
              {job.progress}% complete
            </p>
            {job.errorMessage && (
              <p className="mt-2 text-xs text-red-500">{job.errorMessage}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
