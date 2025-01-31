import { User, authSubscribe } from "@junobuild/core";
import { useEffect, useState } from "react";

export type OptionalUser = User | undefined | null;

export const useAuth = () => {
  const [user, setUser] = useState<OptionalUser>(undefined);

  useEffect(() => {
    const unSubscribe = authSubscribe(setUser);

    return () => {
      unSubscribe();
    };
  }, []);

  return user;
};
