import { setTodosToLocalStorage } from "./storage.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js";
import { todoKeys } from "./constants.js";

const form = document.querySelector(`.form`);
const input = document.querySelector(`.input`);
const tasks = document.querySelector(`.todos`);

const createTodoElement = (todo) => {
  const todoElement = document.createElement("li");
  todoElement.classList.add("todo");
  todoElement.dataset.id = todo[todoKeys.id];
  todoElement.innerHTML = `
          <div class="todo-text">${todo[todoKeys.text]}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
          </div>`;
  return todoElement;
};

export const renderTodos = (todos) => {
  tasks.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    if (todo[todoKeys.is_completed]) {
      todoElement.classList.add("completed");
    }
    tasks.prepend(todoElement);
  });
};

const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text);
  const todoElement = createTodoElement(todo);
  setTodosToLocalStorage(todos);
  tasks.prepend(todoElement);
};

export const innitTodoHandlers = (todos) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    handleCreateTodo(todos, text);
    input.value = "";
  });

  tasks.addEventListener("click", (event) => {
    const todo = event.target.closest(".todo");
    if (!todo) return;

    if (event.target.matches(".button-complete")) {
      completeTodoById(todos, Number(todo.dataset.id));
      setTodosToLocalStorage(todos);
      todo.classList.toggle("completed");
    }
    if (event.target.matches(".button-delete")) {
      deleteTodoById(todos, Number(todo.dataset.id));
      setTodosToLocalStorage(todos);
      todo.remove();
    }
  });
};
