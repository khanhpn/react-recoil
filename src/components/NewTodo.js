import { useRecoilState } from "recoil";
import { newTodo } from "../recoil/initState";

const NewTodo = () => {
  const todos = useRecoilState(newTodo);
  console.log(todos[0]);
  return (
    <div>
      <div>Todo</div>
      <div>
        {todos[0].map((item, index) => (
          <div key={index}>{item.content}</div>
        ))}
      </div>
    </div>
  );
};

export default NewTodo;
