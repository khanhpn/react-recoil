import { atom, selector } from "recoil";

const initState = [
  { id: 0, content: "job1", status: "New" },
  { id: 1, content: "job2", status: "Progress" },
  { id: 2, content: "job3", status: "Done" },
  { id: 3, content: "job4", status: "New" },
  { id: 4, content: "job5", status: "Progress" },
  { id: 5, content: "job6", status: "Done" },
  { id: 6, content: "job7", status: "New" },
  { id: 7, content: "job8", status: "Progress" },
  { id: 8, content: "job9", status: "Done" },
];

export const initTodos = atom({
  key: "initTodo",
  default: initState,
});

export const newTodo = selector({
  key: "newTodo",
  get: ({ get }) => {
    const todos = get(initTodos);
    return todos.filter((item) => item.status === "New");
  },
  set: ({ get, set }, id) => {
    const currentTodos = get(initTodos);
    set(
      initTodos,
      currentTodos.map((item) =>
        item.id === id ? { ...item, status: "Progress" } : item
      )
    );
  },
});

export const progressTodo = selector({
  key: "progressTodo",
  get: ({ get }) => {
    const todos = get(initTodos);
    return todos.filter((item) => item.status === "Progress");
  },
  set: ({ get, set }, id) => {
    const currentTodos = get(initTodos);
    set(
      initTodos,
      currentTodos.map((item) =>
        item.id === id ? { ...item, status: "Done" } : item
      )
    );
  },
});

export const doneTodo = selector({
  key: "doneTodo",
  get: ({ get }) => {
    const todos = get(initTodos);
    return todos.filter((item) => item.status === "Done");
  },
});

export default initTodos;
