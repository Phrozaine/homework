import { getTodosFromLocalStorage } from "./storage.js";
import { renderTodos, innitTodoHandlers } from "./DOM.js";

const todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos);
  innitTodoHandlers(todos);
});
