'use client';

import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';
import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Calendar,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  cn,
} from '@deskops/ui';
import { getMaterialsInOrder } from '@deskops/constants';

interface DatePickerFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label?: string;
}

export function DatePickerField<TFieldValues extends FieldValues>({
  control,
  name,
  label = 'Date',
}: DatePickerFieldProps<TFieldValues>): React.JSX.Element {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
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
                    format(field.value as Date, 'PPP')
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
                selected={field.value as Date}
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
  );
}

interface MaterialSelectFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label?: string;
}

export function MaterialSelectField<TFieldValues extends FieldValues>({
  control,
  name,
  label = 'Material',
}: MaterialSelectFieldProps<TFieldValues>): React.JSX.Element {
  const materials = getMaterialsInOrder();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value as string}>
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
  );
}

interface QuantityInputFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label?: string;
}

export function QuantityInputField<TFieldValues extends FieldValues>({
  control,
  name,
  label = 'Quantity (TON)',
}: QuantityInputFieldProps<TFieldValues>): React.JSX.Element {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type="number"
              step="0.001"
              min="0"
              max="999999.999"
              className="tabular-nums"
              placeholder="0"
              {...field}
              onChange={(e) =>
                field.onChange(
                  e.target.value === '' ? undefined : parseFloat(e.target.value)
                )
              }
              value={field.value as number ?? ''}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

interface NotesTextareaFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label?: string;
  placeholder?: string;
}

export function NotesTextareaField<TFieldValues extends FieldValues>({
  control,
  name,
  label = 'Notes (Optional)',
  placeholder = 'Additional notes...',
}: NotesTextareaFieldProps<TFieldValues>): React.JSX.Element {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} className="resize-none" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
