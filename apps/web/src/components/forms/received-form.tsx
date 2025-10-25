'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@deskops/ui';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@deskops/ui';
import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@deskops/ui';
import { Popover, PopoverContent, PopoverTrigger } from '@deskops/ui';
import { Calendar, Textarea } from '@deskops/ui';
import { toast } from 'sonner';
import { cn } from '@deskops/ui';
import { getMaterialsInOrder } from '@deskops/constants';
import { createReceivedMaterial } from '@/app/actions/received';

const receivedMaterialFormSchema = z.object({
  siteId: z.string().cuid(),
  date: z.date(),
  materialId: z.string().min(1, 'Material is required'),
  qtyTon: z.number().positive('Quantity must be positive').max(999999.999),
  source: z.string().max(200).optional(),
  vehicleRef: z.string().max(100).optional(),
  notes: z.string().max(500).optional(),
});

type ReceivedMaterialFormData = z.infer<typeof receivedMaterialFormSchema>;

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
    resolver: zodResolver(receivedMaterialFormSchema),
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

  const materials = getMaterialsInOrder();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Received Material Record</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                name="materialId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Material</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select material" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {materials.map((material) => (
                          <SelectItem key={material.id} value={material.id}>
                            {material.code} - {material.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="qtyTon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity (TON)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.001"
                        min="0"
                        max="999999.999"
                        className="tabular-nums"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseFloat(e.target.value) || 0)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Additional notes..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
