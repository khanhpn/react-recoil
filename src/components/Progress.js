import { useRecoilValue } from "recoil";
import { progressTodo } from "../recoil/initState";

const Progress = () => {
  const todos = useRecoilValue(progressTodo);
  return (
    <div>
      <div>Progress</div>
      <div>
        {todos.map((item, index) => (
          <div key={index}>{item.content}</div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
