import NewTodo from "./components/NewTodo";
import Progress from "./components/Progress";
import Done from "./components/Done";
import { RecoilRoot } from "recoil";
import Input from "./components/Input";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <div className="styleRoot">Todo app</div>
      <Input />
      <div className="wrapItem">
        <NewTodo />
        <Progress />
        <Done />
      </div>
    </RecoilRoot>
  );
}

export default App;
