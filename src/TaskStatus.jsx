import React from "react";

const TaskStatus = ({ problem, handleComplete }) => {
  return (
    <div className="flex  flex-col gap-3 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-lg w-87.5 h-28.25">
      <h3 className="font-bold mx-auto "> {problem.title}</h3>
      <button
        onClick={() => handleComplete(problem)}
        className=" mx-auto  font-bold rounded-lg   bg-[#02A53B] text-white w-78.5 h-10.75"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskStatus;
