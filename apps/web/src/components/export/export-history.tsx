'use client';

import { useExportStore } from '@/stores/export-store';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Badge,
} from '@deskops/ui';
import { Download, RotateCw, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface ExportJob {
  id: string;
  module: string;
  format: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  downloadUrl?: string;
  errorMessage?: string;
  createdAt: string;
}

export function ExportHistory(): React.JSX.Element {
  const { completedJobs, removeJob, clearCompletedJobs } = useExportStore();

  const handleDownload = async (job: ExportJob): Promise<void> => {
    if (!job.downloadUrl) {
      toast.error('Download URL not available');
      return;
    }

    try {
      const response = await fetch(job.downloadUrl);
      if (!response.ok) throw new Error('Download failed');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `DeskOps_${job.module}_${job.id}.${job.format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success('Download started');
    } catch (_error) {
      toast.error('Download failed');
    }
  };

  const handleRetry = async (jobId: string): Promise<void> => {
    try {
      const response = await fetch(`/api/exports/${jobId}/retry`, {
        method: 'POST',
      });

      if (!response.ok) throw new Error('Retry failed');

      toast.success('Export job retry initiated');
      removeJob(jobId);
    } catch (_error) {
      toast.error('Retry failed');
    }
  };

  if (completedJobs.length === 0) {
    return (
      <Card>
        <CardContent className="text-muted-foreground py-8 text-center">
          No completed exports
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Export History</CardTitle>
          <Button variant="ghost" size="sm" onClick={clearCompletedJobs}>
            Clear All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {completedJobs.map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">
                    {job.module.toUpperCase()}
                  </span>
                  <Badge
                    variant={
                      job.status === 'completed' ? 'default' : 'destructive'
                    }
                  >
                    {job.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  {format(new Date(job.createdAt), 'MMM dd, yyyy HH:mm')}
                </p>
              </div>
              <div className="flex gap-2">
                {job.status === 'completed' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload(job)}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                )}
                {job.status === 'failed' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRetry(job.id)}
                  >
                    <RotateCw className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeJob(job.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
