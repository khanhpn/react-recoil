import { atom, selector } from "recoil";

const initState = [
  { id: 0, content: "job1", status: "New" },
  { id: 1, content: "job2", status: "Progress" },
  { id: 2, content: "job3", status: "Done" },
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
});

export const progressTodo = selector({
  key: "progressTodo",
  get: ({ get }) => {
    const todos = get(initTodos);
    return todos.filter((item) => item.status === "Progress");
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
