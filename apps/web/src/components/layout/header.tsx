'use client';

import { useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import { Bell, Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Badge,
} from '@deskops/ui';
import { SiteSelector } from '@/components/site-selector';
import { DateRangePicker } from '@/components/date-range-picker';
import { DEFAULT_SITE_CODE } from '@deskops/constants';

const getInitialDateRange = (): { from: Date; to: Date } => ({
  from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
  to: new Date(),
});

export function Header(): React.JSX.Element {
  const { theme, setTheme } = useTheme();
  const [selectedSite, setSelectedSite] = useState(DEFAULT_SITE_CODE);
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>(
    getInitialDateRange
  );

  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="bg-card flex h-16 items-center justify-between border-b px-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold tracking-tight">DeskOps</h1>
        <SiteSelector value={selectedSite} onValueChange={setSelectedSite} />
        <DateRangePicker value={dateRange} onChange={setDateRange} />
      </div>
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs"
              >
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="p-2">
              <h4 className="font-semibold">Notifications</h4>
              <p className="text-muted-foreground text-sm">
                You have 3 unread notifications
              </p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Production Alert</p>
                <p className="text-muted-foreground text-xs">
                  Daily target reached for Site A
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Inventory Update</p>
                <p className="text-muted-foreground text-xs">
                  Low stock alert for material X
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
