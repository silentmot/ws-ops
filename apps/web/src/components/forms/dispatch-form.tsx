'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';
import { Loader2 } from 'lucide-react';
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
} from '@deskops/ui';
import { toast } from 'sonner';
import { OPERATION_TYPES } from '@deskops/constants';
import { createDispatch } from '@/app/actions/dispatch';
import { DispatchSchema } from '@deskops/database/schemas';
import {
  DatePickerField,
  MaterialSelectField,
  QuantityInputField,
  NotesTextareaField,
} from './shared-form-fields';

type DispatchFormData = z.infer<typeof DispatchSchema>;

interface DispatchFormProps {
  siteId: string;
  onSuccess?: () => void;
}

export function DispatchForm({
  siteId,
  onSuccess,
}: DispatchFormProps): React.JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<DispatchFormData>({
    resolver: zodResolver(DispatchSchema),
    defaultValues: {
      siteId,
      date: new Date(),
      operation: 'CRU-PRO',
    },
  });

  const onSubmit = async (data: DispatchFormData): Promise<void> => {
    setIsSubmitting(true);
    try {
      const result = await createDispatch(data);
      if (result.success) {
        toast.success('Dispatch record created successfully');
        form.reset();
        onSuccess?.();
      } else {
        toast.error(result.error ?? 'Failed to create dispatch record');
      }
    } catch (_error) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Dispatch Record</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <DatePickerField control={form.control} name="date" />
              <MaterialSelectField control={form.control} name="materialId" />
              <QuantityInputField control={form.control} name="qtyTon" />

              <FormField
                control={form.control}
                name="trips"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trips (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="1"
                        min="1"
                        placeholder="0"
                        {...field}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value
                              ? parseInt(e.target.value)
                              : undefined
                          )
                        }
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="owner"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Owner (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        maxLength={200}
                        placeholder="Owner name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reference (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        maxLength={100}
                        placeholder="Reference number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="operation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Operation</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select operation" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.entries(OPERATION_TYPES).map(
                          ([code, { label }]) => (
                            <SelectItem key={code} value={code}>
                              {label}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <NotesTextareaField control={form.control} name="notes" />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isSubmitting ? 'Creating...' : 'Create Dispatch Record'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
