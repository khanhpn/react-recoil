import NewTodo from "./components/NewTodo";
import Progress from "./components/Progress";
import Done from "./components/Done";
import { RecoilRoot } from "recoil";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <div>Todo app</div>
      <div className="wrapItem">
        <NewTodo />
        <Progress />
        <Done />
      </div>
    </RecoilRoot>
  );
}

export default App;
