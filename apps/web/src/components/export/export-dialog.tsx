'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@deskops/ui';
import { Download, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { cn } from '@deskops/ui';
import { useExportStore } from '@/stores/export-store';
import { useAppStore } from '@/stores/app-store';

const exportFormSchema = z
  .object({
    module: z.enum([
      'production',
      'dispatch',
      'received',
      'equipment',
      'manpower',
      'inventory',
    ]),
    format: z.enum(['xlsx', 'csv', 'pdf', 'powerbi-csv']),
    granularity: z.enum(['daily', 'weekly', 'monthly']),
    dateFrom: z.date(),
    dateTo: z.date(),
  })
  .refine((data) => data.dateFrom <= data.dateTo, {
    message: 'Start date must be before end date',
    path: ['dateTo'],
  });

type ExportFormData = z.infer<typeof exportFormSchema>;

export function ExportDialog(): React.JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { exportDialogOpen, setExportDialogOpen, addJob } = useExportStore();
  const { selectedSiteId, dateRange } = useAppStore();

  const form = useForm<ExportFormData>({
    resolver: zodResolver(exportFormSchema),
    defaultValues: {
      module: 'production',
      format: 'xlsx',
      granularity: 'daily',
      dateFrom: dateRange.from,
      dateTo: dateRange.to,
    },
  });

  const onSubmit = async (data: ExportFormData): Promise<void> => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/exports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          siteId: selectedSiteId,
          module: data.module,
          format: data.format,
          granularity: data.granularity,
          dateFrom: data.dateFrom.toISOString(),
          dateTo: data.dateTo.toISOString(),
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create export job');
      }

      const { exportJob } = await response.json();
      addJob(exportJob);
      toast.success('Export job created successfully');
      setExportDialogOpen(false);
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Export failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={exportDialogOpen} onOpenChange={setExportDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Export Data</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="module"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Module</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select module" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="production">Production</SelectItem>
                      <SelectItem value="dispatch">Dispatch</SelectItem>
                      <SelectItem value="received">Received</SelectItem>
                      <SelectItem value="equipment">Equipment</SelectItem>
                      <SelectItem value="manpower">Manpower</SelectItem>
                      <SelectItem value="inventory">Inventory</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="format"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Format</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="xlsx">Excel (.xlsx)</SelectItem>
                      <SelectItem value="csv">CSV (.csv)</SelectItem>
                      <SelectItem value="pdf">PDF (.pdf)</SelectItem>
                      <SelectItem value="powerbi-csv">
                        Power BI CSV (.csv)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="granularity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Granularity</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select granularity" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateFrom"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateTo"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>End Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Creating Export...' : 'Create Export'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
