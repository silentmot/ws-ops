import { useUser, useAuth as useClerkAuth } from '@clerk/nextjs';
import { UserRole } from '@deskops/constants';

interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export function useAuth(): {
  user: AuthUser | null;
  isLoading: boolean;
  isSignedIn: boolean;
  hasRole: (role: UserRole) => boolean;
  signOut: () => Promise<void>;
} {
  const { user, isLoaded } = useUser();
  const { isSignedIn, signOut } = useClerkAuth();

  const authUser: AuthUser | null = user
    ? {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress || '',
        name: user.fullName || '',
        role: (user.publicMetadata['role'] as UserRole) || UserRole.MODERATOR,
        avatar: user.imageUrl,
      }
    : null;

  const hasRole = (role: UserRole): boolean => {
    if (!authUser) return false;

    // Admin has access to everything
    if (authUser.role === UserRole.ADMIN) return true;

    // Check specific role
    return authUser.role === role;
  };

  return {
    user: authUser,
    isLoading: !isLoaded,
    isSignedIn: !!isSignedIn,
    hasRole,
    signOut,
  };
}
