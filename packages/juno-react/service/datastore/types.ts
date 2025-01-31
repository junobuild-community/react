export interface Todo {
  key: string;
  data: {
    title: string;
    completed: boolean;
    createdAt: number;
    updatedAt: number;
  };
  description?: string;
  version?: bigint;
}
