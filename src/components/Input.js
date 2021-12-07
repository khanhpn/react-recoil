import React, { useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { initTodos } from "../recoil/initState";

const Input = () => {
  const [todo, setTodo] = useRecoilState(initTodos);
  const resetTodoToInit = useResetRecoilState(initTodos);
  const [handleValue, sethandleValue] = useState({
    open: false,
    content: "",
  });

  const handleOpen = () =>
    sethandleValue((prev) => ({ ...prev, open: !handleValue.open }));

  const handleChangeInput = (event) => {
    sethandleValue((prev) => ({ ...prev, content: event.target.value }));
  };
  const handleAddJob = () => {
    const newTodo = {
      id: new Date().getTime(),
      status: "New",
      content: handleValue.content,
    };
    setTodo([...todo, newTodo]);
    sethandleValue((prev) => ({ ...prev, content: "" }));
  };

  const handleReset = () => {
    resetTodoToInit();
  };

  return (
    <div className="wrapInput">
      <button className="btnOpen" onClick={handleOpen}>
        {handleValue.open ? "Close" : "Open"}
      </button>
      <button className="btnOpen" onClick={handleReset}>
        Reset
      </button>
      {handleValue.open && (
        <div className="inputWrapStyle">
          <input
            value={handleValue.content}
            className="inputStyle"
            onChange={handleChangeInput}
          />
          <button className="btnOpen" onClick={handleAddJob}>
            Add job
          </button>
        </div>
      )}
    </div>
  );
};

export default Input;
