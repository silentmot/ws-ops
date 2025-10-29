'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@deskops/ui';
import { useQuery } from '@tanstack/react-query';

interface SiteSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

interface Site {
  id: string;
  code: string;
  name: string;
}

export function SiteSelector({ value, onValueChange }: SiteSelectorProps) {
  const { data, isLoading, isError } = useQuery<{ sites: Site[] }>({
    queryKey: ['sites'],
    queryFn: async () => {
      const response = await fetch('/api/sites');
      if (!response.ok) {
        throw new Error('Failed to fetch sites');
      }
      return response.json();
    },
  });

  const sites = data?.sites ?? [];

  if (isLoading) {
    return (
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Loading sites..." />
        </SelectTrigger>
      </Select>
    );
  }

  if (isError || !sites || sites.length === 0) {
    return (
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Failed to load sites" />
        </SelectTrigger>
      </Select>
    );
  }

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select site" />
      </SelectTrigger>
      <SelectContent>
        {sites.map((site) => (
          <SelectItem key={site.id} value={site.code}>
            {site.code} - {site.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
