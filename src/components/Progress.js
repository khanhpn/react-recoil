import { useRecoilValue, useSetRecoilState } from "recoil";
import { progressTodo } from "../recoil/initState";

const Progress = () => {
  const todos = useRecoilValue(progressTodo);
  const setDoneTodo = useSetRecoilState(progressTodo);
  const handleTodoDone = (id) => {
    setDoneTodo(id);
  };

  return (
    <div className="widthItem">
      <div className="styleHeader">Progress</div>
      <div>
        {todos.map((item, index) => (
          <div key={index} className="styleJob">
            <span className="styleItem" onClick={() => handleTodoDone(item.id)}>
              {item.content}
            </span>
            <span className="styleStatus">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
