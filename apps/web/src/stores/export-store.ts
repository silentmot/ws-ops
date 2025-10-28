import { create } from 'zustand';

interface ExportJob {
  id: string;
  module: string;
  format: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  downloadUrl?: string;
  errorMessage?: string;
  createdAt: string;
}

interface ExportState {
  activeJobs: ExportJob[];
  completedJobs: ExportJob[];
  exportDialogOpen: boolean;
  selectedModule: string;

  addJob: (job: ExportJob) => void;
  updateJob: (id: string, updates: Partial<ExportJob>) => void;
  removeJob: (id: string) => void;
  clearCompletedJobs: () => void;
  setExportDialogOpen: (open: boolean) => void;
  setSelectedModule: (module: string) => void;
}

export const useExportStore = create<ExportState>((set) => ({
  activeJobs: [],
  completedJobs: [],
  exportDialogOpen: false,
  selectedModule: 'production',

  addJob: (job) => set((state) => ({ activeJobs: [...state.activeJobs, job] })),

  updateJob: (id, updates) =>
    set((state) => {
      const job = state.activeJobs.find((j) => j.id === id);
      if (!job) return state;

      const updatedJob = { ...job, ...updates };

      if (updates.status === 'completed' || updates.status === 'failed') {
        return {
          activeJobs: state.activeJobs.filter((j) => j.id !== id),
          completedJobs: [...state.completedJobs, updatedJob],
        };
      }

      return {
        activeJobs: state.activeJobs.map((j) => (j.id === id ? updatedJob : j)),
      };
    }),

  removeJob: (id) =>
    set((state) => ({
      activeJobs: state.activeJobs.filter((j) => j.id !== id),
      completedJobs: state.completedJobs.filter((j) => j.id !== id),
    })),

  clearCompletedJobs: () => set({ completedJobs: [] }),
  setExportDialogOpen: (open) => set({ exportDialogOpen: open }),
  setSelectedModule: (module) => set({ selectedModule: module }),
}));
