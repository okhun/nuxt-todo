import { defineStore } from "pinia";
import { BACKLOG, DONE, TEST, TODO, PROGRESS } from "./../constants";
import { TodoItem } from "types";

export const useTodoListStore = defineStore("todolist", {
  state: () => ({
    todoItems: [] as TodoItem[],
  }),
  getters: {
    backlogs: (state) =>
      state.todoItems.filter((el) => el.status === BACKLOG && !el.deletedAt),
    todos: (state) =>
      state.todoItems.filter((el) => el.status === TODO && !el.deletedAt),
    progresses: (state) =>
      state.todoItems.filter((el) => el.status === PROGRESS && !el.deletedAt),
    tests: (state) =>
      state.todoItems.filter((el) => el.status === TEST && !el.deletedAt),
    dones: (state) =>
      state.todoItems.filter((el) => el.status === DONE && !el.deletedAt),
  },

  actions: {
    addTodoItem(payload: TodoItem) {
      this.todoItems.push(payload);
    },
  },
});
