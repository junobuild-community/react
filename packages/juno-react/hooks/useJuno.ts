import { useContext } from "react";
import { JunoContext } from "../providers/junoContext";

export const useJuno = () => {
  const context = useContext(JunoContext);
  if (!context) {
    throw new Error("useJuno must be used within a JunoProvider");
  }
  return context;
};
