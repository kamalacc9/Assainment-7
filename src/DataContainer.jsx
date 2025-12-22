import React, { use, useState } from "react";
import States from "./States";
import CardContainer from "./CardContainer";
import TaskStatus from "./TaskStatus";
import { toast } from "react-toastify";
const DataContainer = ({ promise }) => {
  const problemData = use(promise);

  const [prblmData, setProblem] = useState(problemData);

  const [progressData, setProgressData] = useState([]);
  const [resolveData, setResolveData] = useState([]);
  const handleComplete = (problem) => {
    toast("Completed");
    const newResolveData = [...resolveData, problem];
    setResolveData(newResolveData);
    const remaining = progressData.filter((pData) => pData.id !== problem.id);
    setProgressData(remaining);
    const remainingProblem = prblmData.filter((item) => item.id !== problem.id);
    setProblem(remainingProblem);
  };

  const handleDataCard = (problem) => {
    const isExist = progressData.find((pData) => pData.id == problem.id);
    if (isExist) {
      toast.error("Problem was allready taken");
      return;
    }
    toast("In-Progress");
    const newProgressData = [...progressData, problem];
    setProgressData(newProgressData);
  };

  return (
    <div>
      <States resolveData={resolveData} progressData={progressData}></States>
      <section className="w-11/12 grid grid-cols-1 lg:grid-cols-12 mx-auto py-10 gap-5">
        <div className="col-span-8">
          <h1 className="pb-5 text-3xl font-semibold">Customer Tickets</h1>
          {/* ticket card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
            {prblmData.map((problem) => (
              <CardContainer
                handleDataCard={handleDataCard}
                key={problem.id}
                problem={problem}
              ></CardContainer>
            ))}
          </div>
        </div>
        {/* task */}
        <div className="col-span-4">
          <h1 className="py-5 text-3xl font-semibold">Task Status</h1>
          {/* Task Status */}
          <div className="bg-white grid   grid-cols-1 gap-5   mr-5">
            {progressData.length === 0 && (
              <p className="pl-4 text-gray-500 py-10">
                Select a ticket to add to Task Status
              </p>
            )}
            {progressData.length > 0 &&
              progressData.map((problem) => (
                <TaskStatus
                  handleComplete={handleComplete}
                  problem={problem}
                ></TaskStatus>
              ))}
          </div>
          {/* Resolved Task */}
          <h1 className="py-5 text-3xl font-semibold">Resolved Task</h1>
          <div className=" grid grid-cols-1 gap-5">
            {resolveData.length === 0 && (
              <p className="pl-4 text-gray-500 py-10">No resolved tasks yet.</p>
            )}
            {resolveData.length > 0 &&
              resolveData.map((rData) => (
                <p className="w-87.5 rounded-lg h-10.75 py-2 pl-2 text-black bg-[#E0E7FF]">
                  {rData.title}
                </p>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataContainer;
