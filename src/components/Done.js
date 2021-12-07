import { useRecoilValue } from "recoil";
import { doneTodo } from "../recoil/initState";

const Done = () => {
  const todos = useRecoilValue(doneTodo);
  return (
    <div>
      <div>Done</div>
      <div>
        {todos.map((item, index) => (
          <div key={index}>{item.content}</div>
        ))}
      </div>
    </div>
  );
};

export default Done;
