'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@deskops/ui';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@deskops/ui';
import { toast } from 'sonner';
import { OPERATION_TYPES } from '@deskops/constants';
import { createProduction } from '@/app/actions/production';
import { ProductionSchema } from '@deskops/database';
import {
  DatePickerField,
  MaterialSelectField,
  QuantityInputField,
  NotesTextareaField,
} from './shared-form-fields';

type ProductionFormData = z.infer<typeof ProductionSchema>;

interface ProductionFormProps {
  siteId: string;
  onSuccess?: () => void;
}

export function ProductionForm({
  siteId,
  onSuccess,
}: ProductionFormProps): React.JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ProductionFormData>({
    resolver: zodResolver(ProductionSchema),
    defaultValues: {
      siteId,
      date: new Date(),
      qtyTon: 0,
      operation: 'CRU-PRO',
    },
  });

  const onSubmit = async (data: ProductionFormData): Promise<void> => {
    setIsSubmitting(true);
    try {
      const result = await createProduction(data);
      if (result.success) {
        toast.success('Production record created successfully');
        form.reset();
        onSuccess?.();
      } else {
        toast.error(result.error ?? 'Failed to create production record');
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
        <CardTitle>Add Production Record</CardTitle>
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
                        <SelectItem value="MORNING">MORNING</SelectItem>
                        <SelectItem value="AFTERNOON">AFTERNOON</SelectItem>
                        <SelectItem value="NIGHT">NIGHT</SelectItem>
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
              {isSubmitting ? 'Creating...' : 'Create Production Record'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
