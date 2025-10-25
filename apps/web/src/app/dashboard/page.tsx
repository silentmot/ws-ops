import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@deskops/ui';

export default function DashboardPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <p className="text-muted-foreground">
        Welcome to DeskOps - Construction & Demolition Recycling Management
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Dashboard with KPI metrics and charts will be implemented in the
            next phase
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            This placeholder page demonstrates the complete layout structure
            with the Sidebar, Header, and main content area. The full dashboard
            implementation with KPI cards, production charts, dispatch
            analytics, and real-time data visualizations will be built in
            subsequent phases as specified in the implementation plan.
          </p>
          <p className="text-muted-foreground mt-4 text-sm">
            Navigate using the sidebar to access other sections (currently
            placeholders).
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
