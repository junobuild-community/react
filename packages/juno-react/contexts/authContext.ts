import { User } from "@junobuild/core";
import { createContext } from "react";

export interface AuthContextType {
  user: User | null | undefined;
}

export const AuthContext = createContext<AuthContextType>({ user: null });

// export interface AuthContextType {
//   subscribeCollection: (
//     collectionName: string,
//     callback: (docs: []) => void,
//   ) => void;
//   user: User | null | undefined;
// }

// export const AuthContext = createContext<AuthContextType>({
//   subscribeCollection: () => {},
//   user: null,
// });
