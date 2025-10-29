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
  Input,
} from '@deskops/ui';
import { toast } from 'sonner';
import { createReceivedMaterial } from '@/app/actions/received';
import { ReceivedMaterialSchema } from '@deskops/database/schemas';
import {
  DatePickerField,
  MaterialSelectField,
  QuantityInputField,
  NotesTextareaField,
} from './shared-form-fields';

type ReceivedMaterialFormData = z.infer<typeof ReceivedMaterialSchema>;

interface ReceivedMaterialFormProps {
  siteId: string;
  onSuccess?: () => void;
}

export function ReceivedMaterialForm({
  siteId,
  onSuccess,
}: ReceivedMaterialFormProps): React.JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ReceivedMaterialFormData>({
    resolver: zodResolver(ReceivedMaterialSchema),
    defaultValues: {
      siteId,
      date: new Date(),
      qtyTon: 0,
    },
  });

  const onSubmit = async (data: ReceivedMaterialFormData): Promise<void> => {
    setIsSubmitting(true);
    try {
      const result = await createReceivedMaterial(data);
      if (result.success) {
        toast.success('Received material record created successfully');
        form.reset();
        onSuccess?.();
      } else {
        toast.error(
          result.error ?? 'Failed to create received material record'
        );
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
        <CardTitle>Add Received Material Record</CardTitle>
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
                name="source"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Source (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        maxLength={200}
                        placeholder="Material source"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="vehicleRef"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle Reference (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        maxLength={100}
                        placeholder="Vehicle ID or plate number"
                        {...field}
                      />
                    </FormControl>
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
              {isSubmitting ? 'Creating...' : 'Create Received Material Record'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
