import { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useExportStore } from '@/stores/export-store';

export function useExportProgress(): void {
  const { getToken } = useAuth();
  const { updateJob } = useExportStore();

  useEffect(() => {
    let eventSource: EventSource | null = null;

    const connect = async (): Promise<void> => {
      try {
        const token = await getToken();
        eventSource = new EventSource(`/api/exports/progress?token=${token}`);

        eventSource.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            updateJob(data.jobId, {
              progress: data.progress,
              status: data.status,
              downloadUrl: data.downloadUrl,
              errorMessage: data.errorMessage,
            });
          } catch (error) {
            console.error('Failed to parse SSE data:', error);
          }
        };

        eventSource.onerror = () => {
          eventSource?.close();
          // Attempt reconnection after 5 seconds
          setTimeout(connect, 5000);
        };
      } catch (error) {
        console.error('Failed to connect to SSE:', error);
        setTimeout(connect, 5000);
      }
    };

    connect();

    return () => {
      eventSource?.close();
    };
  }, [getToken, updateJob]);
}
