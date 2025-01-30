import { useContext } from "react";
import { junoContext } from "../providers/junoProvider";

export const useJuno = () => {
  const authContext = useContext(junoContext);
  if (!authContext) {
    throw new Error("useJuno must be used within a JunoProvider");
  }
  return authContext;
};
