import { defineStore } from "pinia";

type Status = "backlog" | "todo" | "progress" | "test" | "done";

interface TodoItem {
  id: string;
  title: string;
  status: Status;
  createdAt: string;
  deletedAt: string | null;
}

export const useTodoListStore = defineStore("todolist", {
  state: () => ({
    todoItems: [] as TodoItem[],
  }),
  getters: {
    backlogs: (state) =>
      state.todoItems.filter((el) => el.status === "backlog" && !el.deletedAt),
    todos: (state) =>
      state.todoItems.filter((el) => el.status === "todo" && !el.deletedAt),
    progresses: (state) =>
      state.todoItems.filter((el) => el.status === "progress" && !el.deletedAt),
    tests: (state) =>
      state.todoItems.filter((el) => el.status === "test" && !el.deletedAt),
    dones: (state) =>
      state.todoItems.filter((el) => el.status === "done" && !el.deletedAt),
  },

  actions: {
    addTodoItem(payload: TodoItem) {
      this.todoItems.push(payload);
    },
  },
});
