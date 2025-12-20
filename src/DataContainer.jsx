import React, { use } from "react";
import States from "./states";
import { Calendar } from "lucide-react";
const DataContainer = ({ promise }) => {
  const problemData = use(promise);
  console.log(problemData);
  return (
    <div>
      <States></States>
      <section className="w-11/12 grid grid-cols-1 lg:grid-cols-12 mx-auto py-10 gap-5">
        <div className="col-span-8">
          <h1 className="pb-5 text-3xl font-semibold">Customer Tickets</h1>
          {/* ticket card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
            <div className="  py-3 px-3 bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-lg   ">
              <h1 className=" font-semibold py-2">
                Login Issues - Can't Access Account
              </h1>
              <p className="text-sm leading-normal text-[#627382]">
                Customer is unable to log in to their account. They've tried
                resetting their password multiple times but still...
              </p>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <p className="text-[#627382]">#1001</p>
                  <p>HIGH PRIORITY</p>
                </div>
                <div className="flex gap-2 ju">
                  <p className="text-[#627382]">Sarah Johnson</p>
                  <p></p>
                  <Calendar />
                  1/16/2024
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* task */}
        <div className="col-span-4">
          <h1 className="py-5 text-3xl font-semibold">Task Status</h1>
          <div className="bg-white grid grid-cols-1 gap-5   mr-5">
            <div className="flex flex-col gap-3 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-lg w-87.5 h-28.25">
              <h3 className="font-bold mx-auto ">
                Login Issues - Can't Access Account
              </h3>
              <button className=" mx-auto  font-bold rounded-lg   bg-[#02A53B] text-white w-78.5 h-10.75">
                Complete
              </button>
            </div>
          </div>
          {/* Resolved Task */}
          <h1 className="py-5 text-3xl font-semibold">Resolved Task</h1>
          <div className=" grid grid-cols-1 gap-5">
            <p className="w-87.5 rounded-lg h-10.75 py-2 pl-2 text-black bg-[#E0E7FF]">
              Incorrect Billing Address
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataContainer;
