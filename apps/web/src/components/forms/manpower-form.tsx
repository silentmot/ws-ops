'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Calendar,
  Textarea,
  cn,
} from '@deskops/ui';
import { toast } from 'sonner';
import { ROLES, SHIFT_TYPES } from '@deskops/constants';
import { createManpowerLog } from '@/app/actions/manpower';
import { ManpowerLogSchema } from '@deskops/database/schemas';

type ManpowerLogFormData = z.infer<typeof ManpowerLogSchema>;

interface ManpowerFormProps {
  siteId: string;
  onSuccess?: () => void;
}

export function ManpowerLogForm({
  siteId,
  onSuccess,
}: ManpowerFormProps): React.JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<ManpowerLogFormData>({
    resolver: zodResolver(ManpowerLogSchema),
    defaultValues: {
      siteId,
      date: new Date(),
    },
  });

  const onSubmit = async (data: ManpowerLogFormData): Promise<void> => {
    try {
      setIsSubmitting(true);
      const result = await createManpowerLog(data);

      if (result.success) {
        toast.success('Manpower log created successfully');
        form.reset();
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast.error(result.error || 'Failed to create manpower log');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
      console.error('Error creating manpower log:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Manpower Log</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Date Field */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              'w-full justify-start text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
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

              {/* Role Field */}
              <FormField
                control={form.control}
                name="roleId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ROLES.map((role) => (
                          <SelectItem
                            key={role.code}
                            value={`ROLE_${role.code}`}
                          >
                            {role.code} - {role.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Headcount Field */}
              <FormField
                control={form.control}
                name="headcount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Headcount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        max="500"
                        className="tabular-nums"
                        placeholder="0"
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(
                            value === '' ? undefined : parseInt(value, 10)
                          );
                        }}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Hours Field */}
              <FormField
                control={form.control}
                name="hours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hours</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        min="0"
                        max="24"
                        className="tabular-nums"
                        placeholder="0"
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(
                            value === '' ? undefined : parseFloat(value)
                          );
                        }}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Shift Field */}
              <FormField
                control={form.control}
                name="shift"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shift (Optional)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ''}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select shift" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {SHIFT_TYPES.map((shift) => (
                          <SelectItem key={shift} value={shift}>
                            {shift}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Notes Field */}
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Notes (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Additional notes..."
                        className="resize-none"
                        maxLength={500}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Manpower Log'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
