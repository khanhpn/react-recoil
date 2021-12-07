import { useRecoilValue, useSetRecoilState } from "recoil";
import { newTodo } from "../recoil/initState";

const NewTodo = () => {
  const todos = useRecoilValue(newTodo);
  const setNewTodo = useSetRecoilState(newTodo);
  const handleTodoProgress = (id) => {
    setNewTodo(id);
  };

  return (
    <div className="widthItem">
      <div className="styleHeader">Todo</div>
      <div>
        {todos.map((item, index) => (
          <div key={index} className="styleJob">
            <span
              className="styleItem"
              onClick={() => handleTodoProgress(item.id)}
            >
              {item.content}
            </span>
            <span className="styleStatus">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewTodo;
