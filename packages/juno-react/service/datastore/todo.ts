import { deleteDoc, getDoc, listDocs, setDoc } from "@junobuild/core";
import { nanoid } from "nanoid";
import { Todo } from "./types";

export class TodoService {
  private readonly collection = "todos";

  async createTodo(title: string): Promise<Todo> {
    const now = Date.now();
    const todo: Todo = {
      key: nanoid(),
      data: {
        title,
        completed: false,
        createdAt: now,
        updatedAt: now,
      },
    };

    try {
      const result = await setDoc({
        collection: this.collection,
        doc: todo,
      });

      return result as Todo;
    } catch (error) {
      console.error("Error creating todo:", error);
      throw error;
    }
  }

  async updateTodo(todo: Todo): Promise<Todo> {
    const updatedTodo: Todo = {
      ...todo,
      data: {
        ...todo.data,
        updatedAt: Date.now(),
      },
    };

    try {
      const result = await setDoc({
        collection: this.collection,
        doc: updatedTodo,
      });

      return result as Todo;
    } catch (error) {
      console.error("Error updating todo:", error);
      throw error;
    }
  }

  async toggleTodoComplete(todo: Todo): Promise<Todo> {
    const updatedTodo: Todo = {
      ...todo,
      data: {
        ...todo.data,
        completed: !todo.data.completed,
        updatedAt: Date.now(),
      },
    };

    try {
      const result = await setDoc({
        collection: this.collection,
        doc: updatedTodo,
      });

      return result as Todo;
    } catch (error) {
      console.error("Error toggling todo completion:", error);
      throw error;
    }
  }

  async deleteTodo(todo: Todo): Promise<void> {
    try {
      await deleteDoc({
        collection: this.collection,
        doc: todo,
      });
    } catch (error) {
      console.error("Error deleting todo:", error);
      throw error;
    }
  }

  async getTodo(key: string): Promise<Todo | null> {
    try {
      const result = await getDoc({
        collection: this.collection,
        key,
      });

      return result as Todo;
    } catch (error) {
      console.error("Error getting todo:", error);
      throw error;
    }
  }

  async listTodos(): Promise<Todo[]> {
    try {
      const result = await listDocs({
        collection: this.collection,
        filter: {
          order: {
            desc: true,
            field: "created_at",
          },
        },
      });

      return result.items as Todo[];
    } catch (error) {
      console.error("Error listing todos:", error);
      throw error;
    }
  }

  async listCompletedTodos(): Promise<Todo[]> {
    try {
      const result = await listDocs({
        collection: this.collection,
        filter: {
          matcher: {
            key: "completed",
            description: "true",
          },
          order: {
            desc: true,
            field: "created_at",
          },
        },
      });

      return result.items as Todo[];
    } catch (error) {
      console.error("Error listing completed todos:", error);
      throw error;
    }
  }
}
