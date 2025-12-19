import React from "react";

const States = () => {
  return (
    <div className="w-11/12 grid lg:grid-cols-2 grid-cols-1 mx-auto py-10 gap-5">
      {/* In-Progress */}
      <div className="rounded-lg border-2 border-red-500 lg:w-177 h-62.5">
        <h3>In-Progress</h3>
        <h1>{0}</h1>
      </div>
      {/* Resolved */}
      <div className="rounded-lg border-2 border-amber-500 lg:w-177 h-62.5">
        <h3>Resolved</h3>
        <h1>{0}</h1>
      </div>
    </div>
  );
};

export default States;
