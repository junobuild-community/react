import { Doc } from "@junobuild/core";

interface TodoData {
  title: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface Todo extends Doc<TodoData> {
  key: string;
  description?: string;
  version?: bigint;
}
