import { SignIn } from '@clerk/nextjs';

export default function SignInPage(): React.JSX.Element {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">DeskOps</h1>
          <p className="text-muted-foreground mt-2">
            Construction & Demolition Recycling Management
          </p>
        </div>
        <SignIn
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'shadow-lg',
            },
          }}
        />
      </div>
    </div>
  );
}
