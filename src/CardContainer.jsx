import React from "react";
import { toast } from "react-toastify";
import { Calendar } from "lucide-react";
const CardContainer = ({ problem, handleDataCard }) => {
  return (
    <div
      onClick={() => handleDataCard(problem)}
      className="  py-3 px-3 bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-lg   "
    >
      <h1 className=" font-semibold py-2">{problem.title}</h1>
      <p className="text-sm leading-normal text-[#627382]">
        {problem.description}
      </p>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="text-[#627382]">#{problem.id}</p>
          <p className="bg-amber-400 rounded-lg p-0.5 "> {problem.priority}</p>
        </div>
        <div className="flex gap-2 ju">
          <p className="text-[#627382]"> {problem.customer}</p>
          <p></p>
          <Calendar />
          {problem.createdAt}
        </div>
      </div>
    </div>
    //
  );
};

export default CardContainer;
