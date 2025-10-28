import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_SITE_ID } from '@deskops/constants';

interface DateRange {
  from: Date;
  to: Date;
}

interface AppState {
  // Site selection
  selectedSiteId: string;
  setSelectedSiteId: (siteId: string) => void;

  // Date range
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;

  // Sidebar
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;

  // Theme
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;

  // Dashboard settings
  dashboardRefreshInterval: number;
  setDashboardRefreshInterval: (interval: number) => void;

  // Export settings
  exportFormat: 'xlsx' | 'csv' | 'pdf';
  setExportFormat: (format: 'xlsx' | 'csv' | 'pdf') => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      selectedSiteId: DEFAULT_SITE_ID,
      dateRange: {
        from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        to: new Date(),
      },
      sidebarCollapsed: false,
      theme: 'system',
      dashboardRefreshInterval: 5 * 60 * 1000,
      exportFormat: 'xlsx',

      setSelectedSiteId: (siteId) => set({ selectedSiteId: siteId }),
      setDateRange: (range) => set({ dateRange: range }),
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      setTheme: (theme) => set({ theme }),
      setDashboardRefreshInterval: (interval) =>
        set({ dashboardRefreshInterval: interval }),
      setExportFormat: (format) => set({ exportFormat: format }),
    }),
    {
      name: 'deskops-app-state',
      partialize: (state) => ({
        selectedSiteId: state.selectedSiteId,
        sidebarCollapsed: state.sidebarCollapsed,
        theme: state.theme,
        dashboardRefreshInterval: state.dashboardRefreshInterval,
        exportFormat: state.exportFormat,
      }),
    }
  )
);
