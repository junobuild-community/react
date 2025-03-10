import { User } from "@junobuild/core";
import { useContext } from "react";
import { AuthContext } from "../components/auth/Auth";

export interface AuthHookResult {
  user: User | null | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// This hook provides a convenient way to access auth state
export function useAuth(): AuthHookResult {
  const context = useContext(AuthContext);

  return {
    user: context.user,
    isAuthenticated: !!context.user,
    isLoading: context.user === undefined,
  };
}
