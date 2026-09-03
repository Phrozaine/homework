"use strict";

const todos = [];

const todoKeys = {
  id: "id",
  text: "text",
  isCompleted: "isCompleted",
};

const getNewTodoId = (todos) => {
  return (
    todos.reduce((maxId, todo) => {
      return Math.max(maxId, todo.id);
    }, 0) + 1
  );
};

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.isCompleted]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodo = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
  if (todo === undefined) {
    console.error(`Todo with id ${todoId} not found`);
    return null;
  }
  todo[todoKeys.isCompleted] = !todo[todoKeys.isCompleted];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex == -1) {
    console.error(`Todo with id ${todoId} not found`);
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};
