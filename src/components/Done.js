import { useRecoilValue } from "recoil";
import { doneTodo } from "../recoil/initState";

const Done = () => {
  const todos = useRecoilValue(doneTodo);
  return (
    <div className="widthItem">
      <div className="styleHeader">Done</div>
      <div>
        {todos.map((item, index) => (
          <div key={index} className="styleJob">
            {item.content} <span className="styleStatus">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Done;
