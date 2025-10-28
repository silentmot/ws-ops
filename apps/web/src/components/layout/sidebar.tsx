'use client';

import type { JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@deskops/ui';
import {
  BarChart3,
  Package,
  Truck,
  Download,
  Settings,
  Users,
  Wrench,
  ChevronLeft,
  ChevronRight,
  Home,
} from 'lucide-react';
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@deskops/ui';
import { useAppStore } from '@/stores/app-store';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Production', href: '/dashboard/production', icon: BarChart3 },
  { name: 'Dispatch', href: '/dashboard/dispatch', icon: Truck },
  { name: 'Received', href: '/dashboard/received', icon: Download },
  { name: 'Equipment', href: '/dashboard/equipment', icon: Wrench },
  { name: 'Manpower', href: '/dashboard/manpower', icon: Users },
  { name: 'Inventory', href: '/dashboard/inventory', icon: Package },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar(): JSX.Element {
  const { sidebarCollapsed, setSidebarCollapsed } = useAppStore();
  const pathname = usePathname();

  const toggleCollapsed = (): void => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <TooltipProvider>
      <div
        className={cn(
          'bg-card flex flex-col border-r transition-all duration-300',
          sidebarCollapsed ? 'w-16' : 'w-60'
        )}
      >
        <div className="flex h-16 items-center justify-end px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCollapsed}
            className="h-8 w-8"
          >
            {sidebarCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
        <nav className="flex-1 space-y-2 p-4">
          {navigation.map((item) => {
            const isActive =
              item.href === '/dashboard'
                ? pathname === '/dashboard'
                : pathname.startsWith(item.href);
            const Icon = item.icon;

            const linkContent = (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                  sidebarCollapsed && 'justify-center'
                )}
              >
                <Icon className={cn('h-5 w-5', !sidebarCollapsed && 'mr-3')} />
                {!sidebarCollapsed && (
                  <span className="flex-1">
                    {item.name}
                    {item.badge && (
                      <span className="bg-primary text-primary-foreground ml-2 rounded-full px-2 py-0.5 text-xs">
                        {item.badge}
                      </span>
                    )}
                  </span>
                )}
              </Link>
            );

            if (sidebarCollapsed) {
              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            }

            return linkContent;
          })}
        </nav>
      </div>
    </TooltipProvider>
  );
}
